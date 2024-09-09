import FiltersPanel from "../components/Inventory/FiltersPanel.tsx";
import List from "../components/Inventory/InventoryList.tsx";

export default function Inventory()
{
    return (
        <div className={"flex flex-row"}>
            <FiltersPanel/>
            <List/>
        </div>
    );
}

