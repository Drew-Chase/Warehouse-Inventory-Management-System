import {Card, CardBody, CardHeader, Input} from "@nextui-org/react";
import Locations from "./General/Locations.tsx";
import FileUploadInput from "../FileUploadInput.tsx";

export default function General()
{
    return (
        <Card>
            <CardHeader><h5>General Settings</h5></CardHeader>
            <CardBody className={"flex flex-col gap-4"}>
                <Input
                    label={"Company Name"}
                    placeholder={"Please enter the name of your company."}
                    isRequired
                />
                <FileUploadInput
                    label={"Company Logo"}
                />
                <Locations/>
            </CardBody>
        </Card>
    );
}