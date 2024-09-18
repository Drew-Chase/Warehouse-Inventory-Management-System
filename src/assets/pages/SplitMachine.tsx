import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import $ from "jquery";
import PageForm from "../components/PageForm.tsx";
import {Button, Divider, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faPrint} from "@fortawesome/free-solid-svg-icons";
import Barcode from "react-barcode";


export default function SplitMachine()
{
    const id: string = useParams().id ?? "";
    const [stores, setStores] = useState<string[]>([]);
    const [quantity, setQuantity] = useState<Map<string, string>>(new Map());
    const [shiftDown, setShiftDown] = useState(false);


    useEffect(() =>
    {
        // TODO: Setup API call to get store locations
        let tmp: string[] = [];

        for (let i = 0; i < 12; i++)
        {
            const random = Math.random().toString(36).substring(2, 10).toUpperCase();
            tmp.push(`Store ${random}`);
        }
        setStores(tmp);

    }, []);

    const print = () =>
    {
        const url = new URL(`${window.location.origin}/print/inventory/split/${id}`);
        for (const [key, value] of quantity.entries())
        {
            url.searchParams.append(key, value.toString());
        }
        const printWindow = window.open(url.toString(), "_blank", "toolbar=no,scrollbars=no,resizable=no,width=1020,height=667");
        if (!printWindow)
        {
            alert("Please allow popups for this site");
            return;
        }
        printWindow.onload = () =>
        {
            printWindow.print();
            printWindow.close();
        };
    };

    return (
        <>
            <PageForm title={"Inventory"} subtitle={"Split Machine"}>
                <Table
                    removeWrapper
                    isHeaderSticky
                    isStriped
                    className={"max-300px overflow-y-auto"}

                >
                    <TableHeader>
                        <TableColumn>Store</TableColumn>
                        <TableColumn>Quantity</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {stores.map((store, index) => (
                            <TableRow>
                                <TableCell>{store}</TableCell>
                                <TableCell>
                                    <Input
                                        tabIndex={index + 1}
                                        placeholder={`Quantity for ${store}`}
                                        value={quantity.get(store)?.toString() || ""}
                                        onValueChange={e =>
                                        {
                                            const updatedQuantity = new Map(quantity);
                                            if (e === "")
                                            {
                                                updatedQuantity.delete(store);
                                            } else
                                            {
                                                updatedQuantity.set(store, e.replace(/\D/g, ""));
                                            }
                                            setQuantity(updatedQuantity);
                                        }}
                                        onKeyDown={e =>
                                        {
                                            console.log("Pressed", e.key);
                                            if (e.key === "Shift")
                                            {
                                                setShiftDown(true);
                                            }
                                            if (e.key === "Tab")
                                            {
                                                e.preventDefault();
                                                if (shiftDown)
                                                {
                                                    const nextIndex = (index - 1) % stores.length;
                                                    document.querySelectorAll("input")[nextIndex].focus();
                                                } else
                                                {
                                                    const nextIndex = (index + 1) % stores.length;
                                                    document.querySelectorAll("input")[nextIndex].focus();
                                                }
                                            }
                                        }}
                                        onKeyUp={e =>
                                        {
                                            console.log("Released", e.key);
                                            if (e.key === "Shift")
                                            {
                                                setShiftDown(false);
                                            }
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </PageForm>

            <div className={"flex flex-row gap-4 items-center justify-end p-4 pr-8 fixed bottom-0 left-0 right-0 bg-background-L-100 h-[100px] border-t-3 border-t-background-L200 shadow-lg z-[100]"}>
                <Button variant={"ghost"} color={"primary"} size={"lg"} startContent={<FontAwesomeIcon icon={faPrint}/>} onClick={print}> Print </Button>
                <Divider orientation={"vertical"}/>
                <Button color={"primary"} size={"lg"} startContent={<FontAwesomeIcon icon={faPaperPlane}/>}> Send </Button>
            </div>
        </>
    );
}

interface StoreMap
{
    store: string;
    quantity: number;
}

export function PrintSplitMachineData()
{
    const itemNumber: string = useParams().id ?? "";
    const props: StoreMap[] = [...useSearchParams()[0]].map(([key, value]) => ({store: key, quantity: parseInt(value)}));
    $("html").attr("class", "");

    return (
        <>
            <div className={"flex flex-col w-full p-4 text-tiny"}>
                <div className={"flex flex-row grow"}>
                    <div className={"flex flex-col border-1 border-black grow px-2 text-center items-center justify-center"}>
                        <p className={"font-light"}>Item#</p>
                        <p className={"text-tiny font-bold"}>{itemNumber}</p>
                    </div>
                    <div className={"flex flex-col border-1 border-black grow px-2 text-center items-center justify-center"}>
                        <p className={"font-light"}>Description</p>
                        <p className={"text-tiny font-bold"}>2pk Thermal Socks Womens</p>
                    </div>
                </div>
                <div className={"flex flex-row w-full border-1 border-t-transparent border-black px-2 grow gap-8 items-center"}>
                    <p className={"text-sm font-bold"}>MP</p>
                    <p className={"mr-auto"}>$</p>
                    <p>{(3).toFixed(2)}</p>
                </div>
                {
                    props.map((prop) => (
                            <div className={"flex flex-row border-1 border-t-transparent border-black grow p-2 text-center items-center justify-between"}>
                                <p>{prop.store}</p>
                                <p>{prop.quantity}</p>
                            </div>
                        )
                    )

                }


                <div className={"flex flex-row border-1 border-t-transparent border-black grow p-2 text-center items-center justify-between"}>
                    <p>Total Qty to Split</p>
                    <p>{props.map(i => i.quantity).reduce((a, b) => a + b)}</p>
                </div>

            </div>
            <div className={"absolute bottom-4 right-4"}>
                <Barcode value={itemNumber} width={1} height={50} fontSize={12}/>
            </div>
        </>
    );

}