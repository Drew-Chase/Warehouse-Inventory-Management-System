import {Accordion, AccordionItem} from "@nextui-org/react";
import DateFilter from "./FilterOptions/DateFilter.tsx";
import NumberOfPOFilter from "./FilterOptions/NumberOfPOFilter.tsx";
import PurchasePriceFilter from "../Purchases/FilterOptions/PurchasePriceFilter.tsx";

export default function FilterByAccordionView()
{
    return (
        <Accordion
            showDivider={false}
            itemClasses={{
                base: "py-0 w-full",
                title: "font-normal text-medium",
                trigger: "px-2 py-0 data-[hover=true]:bg-background-L000 bg-background-L200 rounded-lg h-14 flex items-center shadow-lg",
                indicator: "text-medium",
                content: "text-small p-4 bg-background-L-100 rounded-b-lg"
            }}
            className="p-2 flex flex-col gap-2"
        >
            <AccordionItem title={"Date Range"} key={"DateRange"}> <DateFilter/> </AccordionItem>
            <AccordionItem title={"Number of Purchase Orders"} key={"NumberOfPOFilter"}> <NumberOfPOFilter/> </AccordionItem>
            <AccordionItem title={"Purchase Price"} key={"PurchasePrice"}> <PurchasePriceFilter/> </AccordionItem>
        </Accordion>
    );
}