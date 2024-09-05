import PurchasePriceFilter from "./FilterOptions/PurchasePriceFilter.tsx";
import BuyerFilter from "./FilterOptions/BuyerFilter.tsx";
import OrderDateFilter from "./FilterOptions/OrderDateFilter.tsx";
import VendorFilter from "./FilterOptions/VendorFilter.tsx";
import LocationFilter from "./FilterOptions/LocationFilter.tsx";

export default function FilterByListView()
{
    return (
        <div className={"flex flex-col gap-8 pb-8"}>
            <div className={"flex flex-col gap-2"}>
                <p className={"font-light text-small opacity-80 capitalize"}>locations</p>
                <LocationFilter/>
            </div>

            <div className={"flex flex-col gap-2"}>
                <p className={"font-light text-small opacity-80 capitalize"}>vendors</p>
                <VendorFilter/>
            </div>
            <div className={"flex flex-col gap-2"}>
                <p className={"font-light text-small opacity-80 capitalize"}>buyers</p>
                <BuyerFilter/>
            </div>
            <div className={"flex flex-col gap-2"}>
                <p className={"font-light text-small opacity-80 capitalize"}>ordered date</p>
                <OrderDateFilter/>
            </div>
            <PurchasePriceFilter/>
        </div>
    );
}