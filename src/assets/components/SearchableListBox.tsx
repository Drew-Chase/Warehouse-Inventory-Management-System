import {Input, InputProps, Listbox, ListboxItem, ListboxProps} from "@nextui-org/react";
import {useState} from "react";


interface SearchableListBoxProps
{
    items: string[];
    inputProps?: InputProps;
    listboxProps?: ListboxProps;
}

export default function SearchableListBox(props: SearchableListBoxProps)
{
    const {inputProps, items, listboxProps} = props;
    const [search, setSearch] = useState("");
    return (
        <div className={"w-full bg-background-L-100 rounded-lg"}>
            <Input
                value={search}
                onValueChange={setSearch}
                variant={"underlined"}
                classNames={{
                    inputWrapper: [
                        "mx-[5px] w-[calc(100%-10px)]",
                    ]

                }}
                {...inputProps}
            />
            <Listbox
                className={"w-full max-h-[200px] overflow-y-auto"}
                selectionMode={"multiple"}
                itemClasses={{
                    base: [
                        "rounded-md",
                        "text-default-800 dark:text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-background-L100",
                        "data-[selectable=true]:focus:bg-background-L200",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500"
                    ]
                }}
                {...listboxProps}
            >
                {items.filter(item => item.toLowerCase().includes(search.toLowerCase())).map((item, i) => (
                    <ListboxItem key={i} value={item}>
                        {item}
                    </ListboxItem>
                ))}
            </Listbox>
        </div>
    );
}