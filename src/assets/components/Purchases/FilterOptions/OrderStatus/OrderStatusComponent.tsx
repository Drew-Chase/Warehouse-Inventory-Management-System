import {Chip, cn, Radio, RadioGroup, RadioProps} from "@nextui-org/react";
import {useState} from "react";

export enum OrderStatus
{
    All = "all",
    InProgress = "inprogress",
    Paid = "paid",
    Completed = "completed"
}

export interface OrderStatusComponentProps
{
    selected?: OrderStatus;
    setSelected?: (status: OrderStatus) => void;
}

export default function OrderStatusComponent(props: OrderStatusComponentProps)
{
    const [selected, setSelected] = useState<OrderStatus>(props.selected ?? OrderStatus.All);
    return (
        <div className={"flex flex-col w-full gap-4 pb-3"}>
            <p className={"font-medium text-medium opacity-70 uppercase"}>order status</p>
            <RadioGroup
                classNames={{
                    wrapper: "grid grid-rows-2 grid-flow-col"
                }}
                value={selected}
                onValueChange={key =>
                {
                    const status = key as OrderStatus;
                    setSelected(status);
                    if (props.setSelected) props.setSelected(status);
                }}
            >
                <CustomRadio count={32} value={"all"}>All</CustomRadio>
                <CustomRadio count={32} value={"inprogress"}>In Progress</CustomRadio>
                <CustomRadio count={32} value={"paid"}>Paid</CustomRadio>
                <CustomRadio count={32} value={"completed"}>Completed</CustomRadio>
            </RadioGroup>
        </div>
    );
}

interface CustomRadioProps extends RadioProps
{
    count: number;
}

const CustomRadio = (props: CustomRadioProps) =>
{
    const {children, ...otherProps} = props;

    return (
        <Radio
            {...otherProps}
            classNames={{
                base: cn(
                    "flex flex-row m-0 bg-background-L200 hover:bg-background-L000 items-center w-full",
                    "cursor-pointer rounded-lg gap-4 px-1 py-3 border-2 border-foreground-L-200/20 truncate",
                    "dark:data-[selected=true]:border-primary text-nowrap min-w-[150px] relative dark:data-[selected=true]:bg-primary-L000/5 data-[selected=true]:bg-primary-L000"
                ),
                label: "flex flex-row w-full",
                wrapper: "hidden",
                labelWrapper: "w-full"
            }}

        >
            <div className={"w-[100%]"}>
                {children}
            </div>
            <Chip
                className={"absolute right-0 dark:bg-primary-L-300 dark:text-primary aspect-square p-0 items-center justify-center flex"}
                radius={"sm"}
                classNames={{content: "p-0 items-center justify-center flex"}}
            >
                {props.count}
            </Chip>
        </Radio>
    );
};