import SearchableListBox from "../../SearchableListBox.tsx";

export default function LocationFilter()
{
    return (
        <SearchableListBox
            inputProps={{
                label: "Search Location",
                placeholder: "Enter location name..."
            }}
            items={Array.from({length: 10}, (_, i) => `Location ${i}`)}
        />
    );
}