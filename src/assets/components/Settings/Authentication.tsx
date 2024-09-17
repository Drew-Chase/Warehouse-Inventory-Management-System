import {Card, CardBody, CardHeader} from "@nextui-org/react";
import PasswordRequirements from "./Authentication/PasswordRequirements.tsx";
import PasswordResetInterval from "./Authentication/PasswordResetInterval.tsx";
import UsersList from "./Authentication/UsersList.tsx";

export default function Authentication()
{
    return (
        <div className={"flex flex-col gap-4"}>
            <Card>
                <CardHeader><h5 id="authentication">Authentication Settings</h5></CardHeader>
                <CardBody className={"flex flex-col gap-4"}>
                    <PasswordRequirements/>
                    <PasswordResetInterval/>

                    <UsersList/>
                </CardBody>
            </Card>
        </div>
    );
}