import {Textarea} from "@nextui-org/react";
import PageForm from "../../PageForm.tsx";
import FileUploadInput from "../../FileUploadInput.tsx";

export default function AdditionalInformation()
{
    return (

        <PageForm title={"Add New Vendor"} subtitle={"Additional Information"}>
            <FileUploadInput label={"Files"} description={"These are any files that relate to the Vendor; agreements, receipts, PDF documents, etc."}/>

            <Textarea
                label={"Terms"}
                placeholder={"Enter any terms or conditions here"}
                description={""}
                size={"lg"}
            />
            <Textarea
                label={"Notes"}
                placeholder={"Enter any notes or special instructions here"}
                description={"These are any additional notes or instructions that you would like to include about the vendor. These will only be visible to you and your team."}
                size={"lg"}
            />

        </PageForm>
    );
}