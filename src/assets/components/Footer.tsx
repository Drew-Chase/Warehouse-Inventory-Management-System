import {Card, CardBody, Link} from "@nextui-org/react";

export default function Footer()
{
    return (
        <Card className={"w-[95%] my-4 mx-auto"}>
            <CardBody className={"flex flex-row gap-8 items-start justify-center"}>
                <p className={"opacity-50 hover:opacity-100 transition-[color,opacity]"}>Created by <Link href={"https://github.com/drew-chase"} target={"_blank"}>Drew Chase</Link></p>
            </CardBody>
        </Card>
    );
}