import {Divider, Tab, Tabs} from "@nextui-org/react";
import {useState} from "react";
import FilterByAccordionView from "./FilterByAccordionView.tsx";
import FilterByListView from "./FilterByListView.tsx";
import ListIcon from "../../images/icons/ListIcon.svg.tsx";
import AccordionViewIcon from "../../images/icons/AccordionViewIcon.svg.tsx";

export default function FiltersPanel()
{
    const [useAccordion, setUseAccordion] = useState<boolean>(true);
    return (
        <div className={"flex flex-col min-w-[300px] w-1/4 h-full ml-4"}>
            <div className={"flex flex-col shadow-lg bg-background-L100 min-h-[200px] w-full rounded-2xl p-4 max-h-[calc(100vh_-_100px)] h-[100vh] overflow-y-auto pr-5 mt-3"}>
                <h5 className={"mb-4"}>Inventory</h5>
                <div className={"flex flex-row items-center"}>
                    <p className={"font-medium text-medium opacity-70 uppercase my-2 w-full"}>filter by</p>
                    <Tabs
                        size={"lg"}
                        classNames={{
                            tabList: "bg-background-L200 data-[selected=true]:text-primary",
                            tab: "aspect-square w-[38px] h-[38px]",
                            cursor: "!bg-primary-L-300 outline outline-2 outline-primary"
                        }}
                        onSelectionChange={(index) =>
                        {
                            setUseAccordion(index === "accordion");
                        }}
                        selectedKey={useAccordion ? "accordion" : "list"}
                    >
                        <Tab key={"list"} title={
                            <ListIcon size={18} fill={!useAccordion ? "hsl(var(--nextui-primary-L000))" : "hsl(var(--nextui-foreground-L-100))"}/>
                        }/>
                        <Tab key={"accordion"} title={
                            <AccordionViewIcon width={24} height={18} fill={useAccordion ? "hsl(var(--nextui-primary-L000))" : "hsl(var(--nextui-foreground-L-100))"}/>
                        }/>
                    </Tabs>
                </div>
                <Divider className={"mb-4"}/>
                {useAccordion ? <FilterByAccordionView/> : <FilterByListView/>}
            </div>
        </div>
    );
}
