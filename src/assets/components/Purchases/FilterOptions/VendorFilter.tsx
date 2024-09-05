import SearchableListBox from "../../SearchableListBox.tsx";

export default function VendorFilter()
{
    return (

        <SearchableListBox
            inputProps={{
                label: "Search Vendors",
                placeholder: "Enter vendor name..."
            }}
            items={Array.from({length: 10}, (_, i) => `Location ${i}`)}
        />
    );
}