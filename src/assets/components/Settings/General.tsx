import {Card, CardBody, CardHeader, Input} from "@nextui-org/react";
import Locations from "./General/Locations.tsx";
import FileUploadInput from "../FileUploadInput.tsx";

export default function General()
{
    return (
        <div className={"flex flex-col gap-4"}>
            <Card>
                <CardHeader><h5 id="general">General Settings</h5></CardHeader>
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
        </div>
    );
}