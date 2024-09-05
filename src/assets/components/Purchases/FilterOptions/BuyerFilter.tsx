import SearchableListBox from "../../SearchableListBox.tsx";

export default function BuyerFilter()
{
    return (

        <SearchableListBox
            inputProps={{
                label: "Search Buyer",
                placeholder: "Enter buyer name..."
            }}
            items={Array.from({length: 10}, (_, i) => `Location ${i}`)}
        />
    );
}