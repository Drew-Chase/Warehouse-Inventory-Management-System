import {Accordion, AccordionItem} from "@nextui-org/react";
import PurchasePriceFilter from "./FilterOptions/PurchasePriceFilter.tsx";
import BuyerFilter from "./FilterOptions/BuyerFilter.tsx";
import OrderDateFilter from "./FilterOptions/OrderDateFilter.tsx";
import VendorFilter from "./FilterOptions/VendorFilter.tsx";
import LocationFilter from "./FilterOptions/LocationFilter.tsx";

export default function FilterByAccordionView()
{
    return (
        <Accordion
            showDivider={false}
            itemClasses={{
                base: "py-0 w-full",
                title: "font-normal text-medium",
                trigger: "px-2 py-0 dark:data-[hover=true]:bg-background-L000 data-[hover=true]:bg-background-L100/50 dark:data-[open=true]:bg-background-L-100 data-[open=true]:bg-background-L100/50 data-[open=true]:rounded-b-none dark:bg-background-L200 bg-background-L000 rounded-lg h-14 flex items-center dark:shadow-lg transition-all",
                indicator: "text-medium",
                content: "text-small p-4 dark:bg-background-L-100 bg-background-L100/50 rounded-b-lg"
            }}
            className="p-2 flex flex-col gap-2"
        >
            <AccordionItem title={"Location"} key={"Location"}> <LocationFilter/> </AccordionItem>
            <AccordionItem title={"Vendor"} key={"Vendor"}> <VendorFilter/> </AccordionItem>
            <AccordionItem title={"Buyer"} key={"Buyer"}> <BuyerFilter/> </AccordionItem>
            <AccordionItem title={"Order Date"} key={"OrderDate"}> <OrderDateFilter/> </AccordionItem>
            <AccordionItem title={"Purchase Price"} key={"PurchasePrice"}> <PurchasePriceFilter/> </AccordionItem>
        </Accordion>
    );
}