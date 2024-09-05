import {Button, cn, Divider, Input, ScrollShadow} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import SortByDropdown from "../SortByDropdown.tsx";
import ViewSelector from "../ViewSelector.tsx";
import PurchaseOrderItem from "./PurchaseOrderItem.tsx";


export default function PurchasesList()
{
    return (
        <div className={"flex flex-col w-full mx-4"}>
            <div className="flex flex-row w-full items-center gap-4">
                <Input
                    classNames={{
                        inputWrapper: cn(
                            "bg-background-L200 outline outline-4 outline-background-L-100",
                            "hover:outline-primary hover:outline-1 transition-all",
                            "hover:!bg-background-L100 data-[focus=true]:!bg-background-L100"
                        ),
                        input: "focus:!bg-background-L100"
                    }}
                    label={"Search"}
                    placeholder={"Search purchase orders..."}
                    startContent={<FontAwesomeIcon icon={faMagnifyingGlass}/>}
                />
                <ViewSelector/>
                <Divider orientation={"vertical"}/>
                <SortByDropdown/>
                <Button color={"primary"} className={"font-medium h-12"}>New Purchase</Button>
            </div>
            <ScrollShadow size={20} className={"flex flex-col gap-4 mt-4 max-h-[calc(100vh_-_140px)] overflow-y-auto pr-4"}>
                {Array.from({length: 10}).map(() => (
                    <PurchaseOrderItem
                        id={Math.floor(Math.random() * 100_000)}
                        name={"Test Product"}
                        vendor={"Test Vendor"}
                        buyer={"Test Buyer"}
                        location={"Test Location"}
                        date={new Date()}
                        paid={Math.random() > 0.5}
                        price={Math.floor(Math.random() * 100_000)}
                    />
                ))}
            </ScrollShadow>
        </div>
    );
}