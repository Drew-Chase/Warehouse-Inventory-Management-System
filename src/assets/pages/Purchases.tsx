import FiltersPanel from "../components/Purchases/FiltersPanel.tsx";
import PurchasesList from "../components/Purchases/PurchasesList.tsx";

export default function Purchases()
{
    return (
        <div className={"flex flex-row"}>
            <FiltersPanel/>
            <PurchasesList/>
        </div>
    );
}