import {cn, Divider, Input, ScrollShadow} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import SortByDropdown from "../SortByDropdown.tsx";
import ViewSelector from "../ViewSelector.tsx";
import InventoryItem from "./InventoryItem.tsx";


export default function InventoryList()
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
                    placeholder={"Search inventory..."}
                    startContent={<FontAwesomeIcon icon={faMagnifyingGlass}/>}
                />
                <ViewSelector/>
                <Divider orientation={"vertical"}/>
                <SortByDropdown sortOptions={
                    [
                        {
                            name: "Name",
                            description: "Sort by Item Name"
                        },
                        {
                            name: "Quantity",
                            description: "Sort by Quantity"
                        },
                        {
                            name: "Price",
                            description: "Sort by Price"
                        }
                    ]
                }/>
            </div>
            <ScrollShadow size={20} className={"flex flex-col gap-4 mt-4 max-h-[calc(100vh_-_140px)] overflow-y-auto pr-4"}>
                {Array.from({length: 10}).map(() => (
                    <InventoryItem
                        name={"Apples"}
                        price={Math.floor(Math.random() * 100_000)}
                        quantity={Math.floor(Math.random() * 100)}
                        poCount={Math.floor(Math.random() * 10)}
                        category={"Fruit"}
                    />
                ))}
            </ScrollShadow>
        </div>
    );
}