import FiltersPanel from "../components/Vendors/FiltersPanel.tsx";
import VendorsList from "../components/Vendors/VendorsList.tsx";

export default function Vendors()
{
    return (
        <div className={"flex flex-row"}>
            <FiltersPanel/>
            <VendorsList/>
        </div>
    );
}