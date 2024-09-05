import {Button, Chip, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Tooltip} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faEdit, faEllipsisH, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";

export interface PurchaseOrderItemProps
{
    id: number;
    name: string;
    vendor: string;
    buyer: string;
    location: string;
    date: string | Date;
    paid: boolean;
    price: number;
    progress:number;
}


export default function PurchaseOrderItem(props: PurchaseOrderItemProps)
{
    return (
        <div
            className={"w-full bg-background-L100 p-4 rounded-2xl flex flex-col gap-4 min-h-[174px] h-[174px] grow shadow-lg"}
        >
            <div className={"flex flex-row items-center w-full"}>
                <div className={"flex flex-row w-full"}>
                    <p className={"text-2xl"}>PO-{props.id}</p>
                    <Divider orientation={"vertical"} className={"mx-4"}/>
                    <p className={"text-lg"}>{props.name}</p>
                    <p className={"mx-2"}>-</p>
                    <p className={"text-lg opacity-50 font-light"}>{props.vendor}</p>
                </div>
                <div className={"flex flex-row gap-4"}>
                    <Tooltip content={
                        new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD"
                        }).format(props.price)}
                    >
                        <p className={"text-medium cursor-default"}>${
                            (() =>
                            {
                                if (props.price > 1_000_000_000)
                                {
                                    return `${(props.price / 1_000_000_000).toFixed(1)}B`;
                                }
                                if (props.price > 1_000_000)
                                {
                                    return `${(props.price / 1_000_000).toFixed(1)}M`;
                                } else if (props.price > 1_000)
                                {
                                    return `${(props.price / 1_000).toFixed(1)}K`;
                                } else
                                {
                                    return props.price;
                                }
                            })()
                        }</p>
                    </Tooltip>
                    {props.paid ? (
                        <Chip
                            className={"text-background-L000 bg-accent-L000"}
                            radius={"sm"}
                        >
                            <FontAwesomeIcon icon={faCheckCircle}/>
                            <span className={"ml-2"}>paid</span>
                        </Chip>
                    ) : (<Chip className={"bg-danger"} radius={"sm"}>unpaid</Chip>)}
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
                                <DropdownItem>
                                    Mark as {props.paid ? "Unpaid" : "Paid"}
                                </DropdownItem>
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


        </div>
    );
}