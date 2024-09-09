import {Button, Chip, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Tooltip} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faEllipsisH, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";
import CalendarIcon from "../../images/icons/CalendarIcon.svg.tsx";
import LocationIcon from "../../images/icons/LocationIcon.svg.tsx";

export interface VendorItemProps
{
    id: number;
    name: string;
    shortname: string;
    location: string;
    date: string | Date;
    vendorTotalPayments: number;
}


export default function VendorItem(props: VendorItemProps)
{

    return (
        <div className={"w-full bg-background-L100 p-4 rounded-2xl flex flex-col gap-4 min-h-[110px] h-[110px] grow shadow-lg"}>
            <div className={"flex flex-row items-center w-full"}>
                <div className={"flex flex-row w-full items-center"}>
                    <p className={"text-2xl"}>{props.shortname}</p>
                    <Divider orientation={"vertical"} className={"mx-4 h-8"}/>
                    <p className={"text-lg"}>{props.name}</p>
                </div>
                <div className={"flex flex-row gap-4 items-center"}>
                    <Tooltip content={
                        new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD"
                        }).format(props.vendorTotalPayments)}
                    >
                        <p className={"text-medium cursor-default"}>${
                            (() =>
                            {
                                if (props.vendorTotalPayments > 1_000_000_000)
                                {
                                    return `${(props.vendorTotalPayments / 1_000_000_000).toFixed(1)}B`;
                                }
                                if (props.vendorTotalPayments > 1_000_000)
                                {
                                    return `${(props.vendorTotalPayments / 1_000_000).toFixed(1)}M`;
                                } else if (props.vendorTotalPayments > 1_000)
                                {
                                    return `${(props.vendorTotalPayments / 1_000).toFixed(1)}K`;
                                } else
                                {
                                    return props.vendorTotalPayments;
                                }
                            })()
                        }</p>
                    </Tooltip>
                    <Chip
                        className={"text-background-L000 bg-accent-L000"}
                        radius={"sm"}
                    >
                        <span>1 PO</span>
                    </Chip>
                    <Dropdown classNames={{content: "dark:bg-background-L200 bg-background-L-100"}}>
                        <DropdownTrigger>
                            <Button
                                variant={"ghost"}
                                className={"data-[hover=true]:!bg-background-L-100 data-[hover=true]:!text-primary data-[hover=true]:border-transparent"}
                            >
                                <FontAwesomeIcon icon={faEllipsisH}/>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu

                            itemClasses={{
                                base: [
                                    "rounded-md",
                                    "text-default-800 dark:text-default-500",
                                    "transition-opacity",
                                    "data-[hover=true]:text-foreground",
                                    "data-[hover=true]:bg-background-L100",
                                    "data-[selectable=true]:focus:bg-default-50",
                                    "data-[pressed=true]:opacity-70",
                                    "data-[focus-visible=true]:ring-default-500"
                                ]
                            }}
                        >
                            <DropdownSection title={"Actions"} showDivider>
                                <DropdownItem
                                    endContent={<FontAwesomeIcon className={"text-foreground/50"} icon={faEye}/>}
                                >
                                    View
                                </DropdownItem>
                                <DropdownItem
                                    endContent={<FontAwesomeIcon className={"text-foreground/50"} icon={faEdit}/>}
                                >
                                    Edit
                                </DropdownItem>
                            </DropdownSection>
                            <DropdownSection title={"Danger Zone"}>
                                <DropdownItem
                                    color={"danger"}
                                    className={"!text-danger data-[hover=true]:bg-danger data-[hover=true]:!text-foreground"}
                                    endContent={<FontAwesomeIcon icon={faTrash}/>}
                                >
                                    Delete
                                </DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <div className={"flex flex-row w-full items-center gap-2 text-foreground-L-200 text-small font-light"}>
                <div className={"flex flex-row items-center gap-2"}>
                    <LocationIcon size={14}/>
                    {props.location}
                </div>
                <Divider orientation={"vertical"} className={"h-2 w-2 rounded-full"}/>
                <div className={"flex flex-row items-center gap-2"}>
                    <CalendarIcon size={14}/>
                    {(() =>
                    {
                        const date = new Date(props.date);
                        const year = date.getFullYear();
                        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
                        return `${month}/${day}/${year}`;
                    })()}
                </div>
            </div>

        </div>
    );
}