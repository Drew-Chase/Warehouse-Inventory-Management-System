import {Button, cn, Divider, Input, Pagination, ScrollShadow} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import SortByDropdown from "../SortByDropdown.tsx";
import ViewSelector from "../ViewSelector.tsx";
import PurchaseOrderItem from "./PurchaseOrderItem.tsx";
import {useNavigate} from "react-router-dom";
import $ from "jquery";


export default function PurchasesList()
{
    const navigate = useNavigate();
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
                <SortByDropdown
                    sortOptions={
                        [
                            {
                                name: "Name",
                                description: "Sort by Item Name"
                            },
                            {
                                name: "Date",
                                description: "Sort by Creation Date"
                            },
                            {
                                name: "Progress",
                                description: "Sort by the completion percentage"
                            }
                        ]
                    }
                />
                <Button color={"primary"} className={"font-medium h-12"} onClick={() => navigate("/app/purchases/new")}>New Purchase</Button>
            </div>
            <ScrollShadow id={"purchase-list"} size={20} className={"flex flex-col gap-4 mt-4 max-h-[calc(100vh_-_140px)] overflow-y-auto pr-4"}>
                {Array.from({length: 10}).map(() => (
                    <PurchaseOrderItem
                        id={Math.floor(Math.random() * 100_000)}
                        name={"Assorted Foods"}
                        vendor={"High Desert Sales"}
                        buyer={"Victor Buyer"}
                        location={"123 Vendor Way. Enterprise, AL 36330"}
                        date={new Date()}
                        paid={Math.random() > 0.5}
                        price={Math.floor(Math.random() * 100_000)}
                        progress={Math.floor(Math.random() * 400)}
                    />
                ))}
                <Pagination
                    className={"mt-4 mx-auto shrink-0"}
                    total={100}
                    showShadow
                    showControls
                    classNames={{
                        item: "hover:!bg-background-L200 !rounded-medium",
                        next: "hover:!bg-background-L200 !rounded-medium",
                        prev: "hover:!bg-background-L200 !rounded-medium"
                    }}

                    onChange={(page) =>
                    {
                        console.log("Page changed to", page);
                        // scroll to top
                        $("#purchase-list")[0].scrollTo({top: 0, behavior: "smooth"});
                    }}
                />
            </ScrollShadow>
        </div>
    );
}