import {Tab, Tabs} from "@nextui-org/react";
import ListIcon from "../images/icons/ListIcon.svg.tsx";
import GridIcon from "../images/icons/GridIcon.svg.tsx";
import {useState} from "react";

export enum View
{
    LIST = "list",
    GRID = "grid"
}

interface ViewSelectorProps
{
    view?: View;
    onValueChange?: (view: View) => void;
}

export default function ViewSelector(props: ViewSelectorProps)
{
    const [view, setView] = useState<View>(props.view ?? View.LIST);
    return (
        <Tabs
            size={"lg"}
            classNames={{
                tabList: "bg-background-L200 data-[selected=true]:text-primary",
                tab: "aspect-square w-[38px] h-[38px]",
                cursor: "!bg-primary-L-300 outline outline-2 outline-primary"
            }}
            onSelectionChange={(index) =>
            {
                const view = index === "list" ? View.LIST : View.GRID;
                if (props.onValueChange) props.onValueChange(view);
                setView(view);
            }}
        >
            <Tab key={"list"} title={<ListIcon size={18} fill={view === View.LIST ? "hsl(var(--nextui-primary-L000))" : "hsl(var(--nextui-foreground-L-100))"}/>}/>
            <Tab key={"grid"} title={<GridIcon size={18} fill={view === View.GRID ? "hsl(var(--nextui-primary-L000))" : "hsl(var(--nextui-foreground-L-100))"}/>}/>
        </Tabs>
    );
}