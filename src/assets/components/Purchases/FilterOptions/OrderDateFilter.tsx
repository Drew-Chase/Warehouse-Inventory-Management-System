import {DateRangePicker} from "@nextui-org/react";
import {getLocalTimeZone, today} from "@internationalized/date";

export default function OrderDateFilter()
{
    return (
        <div className={"p-4 bg-background-L-100 rounded-lg w-full"}>
            <DateRangePicker
                className={"w-full"}
                visibleMonths={2}
                description={"Select a date range"}
                maxValue={today(getLocalTimeZone())}
                classNames={{
                    inputWrapper: [
                        "bg-background-L100 data-[focus=true]:bg-background-L-100 hover:bg-background-L000 h-[60px]"
                    ],
                    calendarContent: [
                        "bg-background-L200",
                        "aria-[selected=true]:bg-primary"
                    ]

                }}
            />
        </div>
    );
}