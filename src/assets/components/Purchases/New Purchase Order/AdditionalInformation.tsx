import {Autocomplete, AutocompleteItem, Textarea} from "@nextui-org/react";
import PageForm from "../../PageForm.tsx";

export default function AdditionalInformation()
{
    return (

        <PageForm title={"Add New Purchase Order"} subtitle={"Additional Information"}>
            <Autocomplete
                label={"Ship To"}
                placeholder={"123 Warehouse Lane, Company Town, USA"}
                description={"The location that the items will be shipped to.  Select a location or add a new one."}
                allowsCustomValue
            >
                {Array.from({length: 10}, (_, i) => (
                    <AutocompleteItem key={i} value={`Location ${i}`}>Warehouse Address {i}</AutocompleteItem>
                ))}
            </Autocomplete>
            <Autocomplete
                label={"Ship Via"}
                placeholder={"123 Main Street, Vendor Town, USA"}
                description={"The location that the items will be shipped from. Select a location or add a new one."}
                allowsCustomValue
            >
                {Array.from({length: 10}, (_, i) => (
                    <AutocompleteItem key={i} value={`Vendor Location ${i}`}>Vendor Address {i}</AutocompleteItem>
                ))}
            </Autocomplete>

            <Textarea
                label={"Notes"}
                placeholder={"Enter any notes or special instructions here"}
                description={"These are any additional notes or instructions that you would like to include with the purchase order. These will only be visible to you and your team."}
                size={"lg"}
            />

        </PageForm>
    );
}