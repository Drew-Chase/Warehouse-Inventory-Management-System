import {Button, cn, Divider, Input, Tab, Tabs} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import ListIcon from "../../images/icons/ListIcon.svg.tsx";
import GridIcon from "../../images/icons/GridIcon.svg.tsx";
import {useState} from "react";

export enum View
{
    LIST = "list",
    GRID = "grid"
}

export default function PurchasesList()
{
    const [view, setView] = useState<View>(View.LIST);
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
                    placeholder={"Search purchase orders..."}
                    startContent={<FontAwesomeIcon icon={faMagnifyingGlass}/>}
                />
                <Tabs
                    size={"lg"}
                    classNames={{
                        tabList: "bg-background-L200 data-[selected=true]:text-primary",
                        tab: "aspect-square w-[38px] h-[38px]",
                        cursor: "!bg-primary-L-300 outline outline-2 outline-primary"
                    }}
                    onSelectionChange={(index) => setView(index === "list" ? View.LIST : View.GRID)}
                >
                    <Tab key={"list"} title={<ListIcon size={18} fill={view === View.LIST ? "hsl(var(--nextui-primary-L000))" : "hsl(var(--nextui-foreground-L-100))"}/>}/>
                    <Tab key={"grid"} title={<GridIcon size={18} fill={view === View.GRID ? "hsl(var(--nextui-primary-L000))" : "hsl(var(--nextui-foreground-L-100))"}/>}/>
                </Tabs>
                <Divider orientation={"vertical"}/>
                <Button size={"sm"} className={"bg-background-L200"}></Button>
            </div>
        </div>
    );
}