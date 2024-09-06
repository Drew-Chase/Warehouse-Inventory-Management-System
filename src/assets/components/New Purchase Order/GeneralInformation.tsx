import PageForm from "../PageForm.tsx";
import {Autocomplete, AutocompleteItem, Input} from "@nextui-org/react";
import FileUploadInput from "../FileUploadInput.tsx";

export default function GeneralInformation()
{
    return (
        <PageForm title={"Add New Purchase Order"} subtitle={"General Information"}>
            <div className={"flex flex-row gap-4"}>
                <Input
                    label={"Name or Description"}
                    placeholder={"Enter the name or description of the purchase order"}
                    description={"The name or description of the purchase order is a friendly name to help you identify the purchase order"}
                />
                <Input
                    label={"PO Number"}
                    placeholder={"Enter the purchase order number"}
                    description={"The purchase order is automatically incremented from the previous, however you can manually enter a number"}
                />
            </div>
            <Autocomplete
                label={"Vendor"}
                placeholder={"Search for a vendor"}
                description={"The vendor is the company that you are purchasing the items from"}
            >
                {Array.from({length: 10}, (_, i) => (
                    <AutocompleteItem key={i} value={`Vendor ${i}`}>Vendor {i}</AutocompleteItem>
                ))}
            </Autocomplete>
            <Autocomplete
                label={"Category"}
                placeholder={"Search for a category"}
                description={"This is used to categorize the purchase order which makes it easier to search for.  You can add a new category by typing it in or use an existing one"}
                allowsCustomValue
            >
                {Array.from({length: 10}, (_, i) => (
                    <AutocompleteItem key={i} value={`Vendor ${i}`}>Vendor {i}</AutocompleteItem>
                ))}
            </Autocomplete>

            <FileUploadInput label={"Files"} description={"These are any files that relate to the PO; inventory manifests, receipts, PDF documents, etc."}/>
        </PageForm>
    );
}