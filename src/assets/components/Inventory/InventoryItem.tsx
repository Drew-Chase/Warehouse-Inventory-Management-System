import {Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Tooltip} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faEllipsisH, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";

export interface InventoryItemProps
{
    id: string
    name: string;
    category: string | string[];
    poCount: number;
    quantity: number;
    price: number;
}


export default function InventoryItem(props: InventoryItemProps)
{

    return (
        <div className={"w-full bg-background-L100 p-4 rounded-2xl flex flex-col gap-4 min-h-[70px] h-[70px] grow shadow-lg"}>
            <div className={"flex flex-row items-center w-full"}>
                <div className={"flex flex-row w-full items-center"}>
                    <p className={"text-lg"}>{props.name}</p>
                </div>
                <div className={"flex flex-row gap-4 items-center"}>
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
                    <Chip
                        className={"text-background-L000 bg-accent-L000"}
                        radius={"sm"}
                    >
                        <span>{props.poCount} PO</span>
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
                                    href={`/app/inventory/split/${props.id}`}
                                    endContent={<FontAwesomeIcon className={"text-foreground/50"} icon={faEye}/>}
                                >
                                    Split
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