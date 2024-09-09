import DateFilter from "./FilterOptions/DateFilter.tsx";
import NumberOfPOFilter from "./FilterOptions/NumberOfPOFilter.tsx";
import PurchasePriceFilter from "../Purchases/FilterOptions/PurchasePriceFilter.tsx";

export default function FilterByListView()
{
    return (
        <div className={"flex flex-col gap-8 pb-8"}>
            <div className={"flex flex-col gap-2"}>
                <p className={"font-light text-small opacity-80 capitalize"}>Number of Purchase Orders</p>
                <NumberOfPOFilter/>
            </div>
            <div className={"flex flex-col gap-2"}>
                <p className={"font-light text-small opacity-80 capitalize"}>date range</p>
                <DateFilter/>
            </div>
            <div className={"flex flex-col gap-2"}>
                <p className={"font-light text-small opacity-80 capitalize"}>Total Payment Range</p>
                <PurchasePriceFilter/>
            </div>
        </div>
    );
}