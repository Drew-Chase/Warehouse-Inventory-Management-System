import {Button, Chip, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Progress, Tooltip, User} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faEdit, faEllipsisH, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";
import CalendarIcon from "../../images/icons/CalendarIcon.svg.tsx";
import LocationIcon from "../../images/icons/LocationIcon.svg.tsx";
import userIcon from "../../images/test-user.svg";
import ManifestIcon from "../../images/icons/ManifestIcon.svg.tsx";
import ShippingIcon from "../../images/icons/ShippingIcon.svg.tsx";
import PackagingIcon from "../../images/icons/PackagingIcon.svg.tsx";
import FinishedIcon from "../../images/icons/FinishedIcon.svg.tsx";

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
    progress: number;
}


export default function PurchaseOrderItem(props: PurchaseOrderItemProps)
{
    let progressColor = "bg-warning-L000";
    if (props.progress > 100 && props.progress < 200)
    {
        progressColor = "bg-info-L000";
    } else if (props.progress >= 200 && props.progress < 300)
    {
        progressColor = "bg-accent-L000";
    } else if (props.progress >= 300)
    {
        progressColor = "bg-primary-L000";
    }

    let iconColor = "hsl(var(--nextui-warning-L000))";
    if (props.progress > 100 && props.progress < 200)
    {
        iconColor = "hsl(var(--nextui-info-L000))";
    } else if (props.progress >= 200 && props.progress < 300)
    {
        iconColor = "hsl(var(--nextui-accent-L000))";
    } else if (props.progress >= 300)
    {
        iconColor = "hsl(var(--nextui-primary-L000))";
    }

    let nextStage = "";
    if (props.progress < 100)
    {
        nextStage = "Mark as Delivered";
    } else if (props.progress < 200)
    {
        nextStage = "Mark as Packaged";
    } else if (props.progress < 300)
    {
        nextStage = "Mark as complete";
    }


    return (
        <div className={"w-full bg-background-L100 p-4 rounded-2xl flex flex-col gap-4 min-h-[240px] h-[240px] grow shadow-lg"}>
            <div className={"flex flex-row items-center w-full"}>
                <div className={"flex flex-row w-full items-center"}>
                    <p className={"text-2xl"}>PO-{props.id}</p>
                    <Divider orientation={"vertical"} className={"mx-4 h-8"}/>
                    <p className={"text-lg"}>{props.name}</p>
                    <p className={"mx-2"}>-</p>
                    <p className={"text-lg opacity-50 font-light"}>{props.vendor}</p>
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
                                {
                                    (() =>
                                    {
                                        if (nextStage !== "")
                                        {
                                            return (
                                                <DropdownItem>
                                                    {nextStage}
                                                </DropdownItem>
                                            ) as any;
                                        }
                                    })()
                                }
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
                <User name={props.buyer} avatarProps={{src: userIcon}}/>
                <Divider orientation={"vertical"} className={"h-2 w-2 rounded-full"}/>
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
            <div className={"flex flex-col items-start w-full bg-background-L200 rounded-lg h-full p-4"}>
                <div className={"w-full flex flex-row gap-2 mb-2 items-center"}>
                    <span className={"text-lg"}>{
                        (() =>
                        {
                            if (props.progress < 100)
                            {
                                return "PO was created";
                            } else if (props.progress < 200)
                            {
                                return "Order is being delivered";
                            } else if (props.progress < 300)
                            {
                                return "Order is being packaged";
                            } else if (props.progress >= 300)
                            {
                                return "Order is complete";
                            }
                            return ``;
                        })()
                    }</span>
                    <span className={"text-foreground-L-200"}>Feb. 1, 2022 @ 12:45 PM</span>
                </div>

                <div className={"flex flex-row items-center w-full gap-3"}>
                    <ManifestIcon size={24} fill={iconColor}/>
                    <Progress value={props.progress} minValue={0} maxValue={100} size={"sm"} classNames={{indicator: progressColor}}/>
                    <ShippingIcon size={24} fill={props.progress > 100 ? iconColor : undefined}/>
                    <Progress value={props.progress} minValue={100} maxValue={200} size={"sm"} classNames={{indicator: progressColor}}/>
                    <PackagingIcon size={24} fill={props.progress > 200 ? iconColor : undefined}/>
                    <Progress value={props.progress} minValue={200} maxValue={300} size={"sm"} classNames={{indicator: progressColor}}/>
                    <FinishedIcon size={24} fill={props.progress >= 300 ? iconColor : undefined}/>
                </div>

            </div>

        </div>
    );
}