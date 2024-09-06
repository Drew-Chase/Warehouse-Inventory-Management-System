import {Chip, Divider, Tooltip, User} from "@nextui-org/react";
import userIcon from "../images/test-user.svg";
import LocationIcon from "../images/icons/LocationIcon.svg.tsx";
import CalendarIcon from "../images/icons/CalendarIcon.svg.tsx";

interface VendorCardProps
{
    shortName: string;
    vendor: string;
    vendorTotalPayments: number;
    location: string;
    date: string;
}

export default function VendorCard(props: VendorCardProps)
{
    return (
        <div className={"flex flex-col gap-4 bg-background-L200 rounded-3xl p-8 shadow-lg"}>
            <div className={"flex flex-row items-center w-full"}>
                <div className={"flex flex-row w-full items-center"}>
                    <p className={"text-2xl"}>{props.shortName}</p>
                    <Divider orientation={"vertical"} className={"mx-4 h-8"}/>
                    <p className={"text-lg opacity-50"}>{props.vendor}</p>
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
                    <Chip className={"bg-accent-L000 text-background-L000 w-10"} radius={"sm"}>1 PO</Chip>
                </div>
            </div>
            <div className={"flex flex-row w-full items-center gap-2 text-foreground-L-200 text-small font-light"}>
                <User name={props.vendor} avatarProps={{src: userIcon}}/>
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
        </div>
    );
}