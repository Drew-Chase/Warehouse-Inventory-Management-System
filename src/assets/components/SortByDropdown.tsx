import {Button, cn, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup, RadioProps} from "@nextui-org/react";
import SortIcon from "../images/icons/SortIcon.svg.tsx";
import {useState} from "react";

interface SortByDropdownProps
{
    sort?: string;
    sortOptions: SortOption[];
    ascending?: boolean;
    onSortChange?: (sort: string, ascending: boolean) => void;
}

interface SortOption
{
    name: string;
    description: string;
}

export default function SortByDropdown(props: SortByDropdownProps)
{
    const [sort, setSort] = useState<string>("");
    const [ascending, setAscending] = useState<boolean>(true);
    return (
        <Popover classNames={{content: "dark:bg-background-L200 bg-background-L-100"}} placement={"bottom"}>
            <PopoverTrigger>
                <Button className={"bg-background-L200 aspect-square w-12 h-12 min-w-12 min-h-12 p-0"}><SortIcon height={12}/></Button>
            </PopoverTrigger>
            <PopoverContent
                className={cn(
                    "rounded-md",
                    "text-default-800 dark:text-default-500",
                    "transition-opacity",
                    "data-[hover=true]:text-foreground",
                    "data-[hover=true]:bg-transparent",
                    "data-[selectable=true]:focus:bg-default-50",
                    "data-[pressed=true]:opacity-70",
                    "data-[focus-visible=true]:ring-default-500"
                )}
            >
                <div className={"flex flex-col w-full gap-4 pb-3"}>
                    <p className={"text-tiny opacity-50 font-medium"}>Sort By</p>
                    <RadioGroup
                        value={sort}
                        onValueChange={(value) =>
                        {
                            setSort(value as string);
                            if (props.onSortChange) props.onSortChange(value as string, ascending);
                        }}
                    >
                        {props.sortOptions.map((option) => (
                            <CustomRadio key={option.name.replace(/\s/g, "")} value={option.name} description={option.description}>{option.name}</CustomRadio>
                        ))}
                    </RadioGroup>
                    <p className={"text-tiny opacity-50 font-medium"}>Sort Order</p>
                    <RadioGroup
                        value={ascending ? "ascending" : "descending"}
                        onValueChange={(value) =>
                        {
                            const ascending = value === "ascending";
                            setAscending(ascending);
                            if (props.onSortChange) props.onSortChange(sort, ascending);
                        }}
                    >
                        <CustomRadio value={"ascending"}>Ascending</CustomRadio>
                        <CustomRadio value={"descending"}>Descending</CustomRadio>
                    </RadioGroup>
                </div>
            </PopoverContent>
        </Popover>
    );
}


const CustomRadio = (props: RadioProps) =>
{
    const {children, ...otherProps} = props;

    return (
        <Radio
            {...otherProps}
            classNames={{
                base: cn(
                    "inline-flex m-0 bg-background-L100 hover:bg-background-L000 items-center",
                    "max-w-[300px] cursor-pointer rounded-lg gap-4 p-2 border-2 border-transparent",
                    "data-[selected=true]:border-primary"
                )
            }}
        >
            {children}
        </Radio>
    );
};