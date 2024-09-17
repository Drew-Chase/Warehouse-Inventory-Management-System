import PageForm from "../../PageForm.tsx";
import FileUploadInput from "../../FileUploadInput.tsx";
import {Button, Input, Tooltip} from "@nextui-org/react";
import {KeyboardEvent, useState} from "react";
import $ from "jquery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faTrash} from "@fortawesome/free-solid-svg-icons";


interface ManifestItem
{
    upc: string;
    description: string;
    quantity: number;
    cost: number;
}

export default function ManifestData()
{
    const [manifestItems, setManifestItems] = useState<ManifestItem[]>([]);
    const [upc, setUpc] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [quantity, setQuantity] = useState<string>("");
    const [cost, setCost] = useState<string>("");


    const addManifestItem = () =>
    {

        setManifestItems([...manifestItems, {upc: upc || "N/A", description: description || "No Description", quantity: +quantity, cost: +cost}]);
        setUpc("");
        setDescription("");
        setQuantity("");
        setCost("");

        $("#manifest-upc-input").trigger("focus");
    };

    const handleKeyUp = (e: KeyboardEvent) =>
    {
        if (e.key === "Enter") addManifestItem();
    };

    return (
        <PageForm title={"Add New Purchase Order"} subtitle={"Manifest Data"}>
            <div className={"flex flex-col gap-8"}>
                <FileUploadInput
                    label={"Manifest File"}
                    description={"Upload the manifest file for this purchase order. This must be a CSV or Excel file."}
                />

                <div className={"flex flex-col gap-4 max-h-[400px] h-screen overflow-y-auto relative mb-[100px] pr-8"}>
                    <div className={"bg-background-L-100 rounded-md pl-2 py-2 flex flex-row gap-4 items-center justify-between sticky top-0 left-0 right-0 z-[10]"}>
                        <p className={"bg-background-L-100 rounded-md w-full"}>UPC/Item#</p>
                        <p className={"bg-background-L-100 rounded-md w-full"}>Description</p>
                        <p className={"bg-background-L-100 rounded-md w-full"}>Quantity</p>
                        <p className={"bg-background-L-100 rounded-md w-full"}>Cost</p>
                        <p className={"bg-background-L-100 rounded-md w-[80px] shrink-0"}>Actions</p>
                    </div>

                    {manifestItems.map((item, index) => (
                        <div key={index} className={"flex flex-row gap-4 items-center justify-between"}>
                            <p className={"w-full"}>{item.upc}</p>
                            <p className={"w-full"}>{item.description}</p>
                            <p className={"w-full"}>{item.quantity}</p>
                            <p className={"w-full"}>{Intl.NumberFormat("en-us", {currency: "USD", style: "currency"}).format(item.cost)}</p>
                            <Tooltip content={"Remove item"} color={"danger"}>
                                <Button color={"danger"} variant={"light"}><FontAwesomeIcon icon={faTrash}/></Button>
                            </Tooltip>
                        </div>
                    )) as any}

                    <div className={"flex flex-row gap-4 items-center justify-between sticky bottom-0 left-0 right-0"}>
                        <Input id={"manifest-upc-input"} autoFocus tabIndex={64} onKeyUp={handleKeyUp} onValueChange={setUpc} value={upc} className={"mx-0 w-full"} label={"UPC/Item#"}/>
                        <Input id={"manifest-description-input"} onKeyUp={handleKeyUp} tabIndex={65} onValueChange={setDescription} value={description} className={"mx-0 w-full"} label={"Description"}/>
                        <Input id={"manifest-quantity-input"} onKeyUp={handleKeyUp} tabIndex={66} onValueChange={setQuantity} value={quantity} className={"mx-0 w-full"} label={"Quantity"}/>
                        <Input id={"manifest-cost-input"} onKeyUp={handleKeyUp} tabIndex={67} onValueChange={setCost} value={cost} className={"mx-0 w-full"} label={"Cost"}/>
                        <Tooltip content={"Insert Item"}>
                            <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
                        </Tooltip>
                    </div>

                </div>

            </div>
        </PageForm>
    );
}