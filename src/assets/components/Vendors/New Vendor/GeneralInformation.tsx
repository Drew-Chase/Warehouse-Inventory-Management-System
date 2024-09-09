import {Autocomplete, AutocompleteItem, Input} from "@nextui-org/react";
import FileUploadInput from "../../FileUploadInput.tsx";
import PageForm from "../../PageForm.tsx";

export default function GeneralInformation()
{
    return (
        <PageForm title={"Add New Vendor"} subtitle={"General Information"}>
            <p><span className={"text-danger font-bold text-xl"}>*</span> Indicates a required field </p>
            <FileUploadInput label={"Company Logo / Icon"} description={"This is used to easily identify the vendor/company at a glance"}/>
            <div className={"flex flex-row gap-4"}>
                <Input
                    label={"Company Name"}
                    placeholder={"Enter the company name"}
                    description={"The legal name of the vendor/company that you are purchasing from"}
                    isRequired
                />
                <Input
                    label={"Short Code"}
                    placeholder={"Enter a short code"}
                    description={"This is a short code that can be used to quickly identify the vendor"}
                    isRequired
                />
            </div>
            <Autocomplete
                label={"Category"}
                placeholder={"Search for a category"}
                description={"The category that the vendor falls under. This can be used to group vendors together. You can add a new category by typing it in or use an existing one"}
                allowsCustomValue
            >
                {Array.from({length: 10}, (_, i) => (
                    <AutocompleteItem key={i} value={`Vendor ${i}`}>Category {i}</AutocompleteItem>
                ))}
            </Autocomplete>
        </PageForm>
    );
}