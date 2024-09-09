import {Button, cn, Divider, Input, ScrollShadow} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import SortByDropdown from "../SortByDropdown.tsx";
import ViewSelector from "../ViewSelector.tsx";
import VendorItem from "./VendorItem.tsx";
import {useNavigate} from "react-router-dom";


export default function VendorsList()
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
                    placeholder={"Search vendors..."}
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
                                name: "Total Payments",
                                description: "Sort by Total Payments"
                            },
                            {
                                name: "Number of PO's",
                                description: "Sort by Number of Purchase Orders"
                            }
                        ]
                    }
                />
                <Button color={"primary"} className={"font-medium h-12"} onClick={() => navigate("/app/vendors/new")}>New Vendor</Button>
            </div>
            <ScrollShadow size={20} className={"flex flex-col gap-4 mt-4 max-h-[calc(100vh_-_140px)] overflow-y-auto pr-4"}>
                {Array.from({length: 10}).map(() => (
                    <VendorItem
                        id={Math.floor(Math.random() * 100_000)}
                        name={"High Desert Sales"}
                        shortname={"HDS"}
                        location={"123 Vendor Way. Enterprise, AL 36330"}
                        date={new Date()}
                        vendorTotalPayments={Math.floor(Math.random() * 100_000)}
                    />
                ))}
            </ScrollShadow>
        </div>
    );
}