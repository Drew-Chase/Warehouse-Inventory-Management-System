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
                trigger: "px-2 py-0 data-[hover=true]:bg-background-L000 bg-background-L200 rounded-lg h-14 flex items-center shadow-lg",
                indicator: "text-medium",
                content: "text-small p-4 bg-background-L-100 rounded-b-lg"
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