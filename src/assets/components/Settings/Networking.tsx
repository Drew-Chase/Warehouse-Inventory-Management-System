import {Button, Card, CardBody, CardHeader, Input, ListboxItem, Tooltip} from "@nextui-org/react";
import {useState} from "react";
import ExtendedListbox from "../Extends/ExtendedListbox.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faEdit, faPlus, faRotateRight, faTrash} from "@fortawesome/free-solid-svg-icons";
import ExtendedSwitch from "../Extends/ExtendedSwitch.tsx";

export default function Networking()
{
    const [port, setPort] = useState<string>("1421");
    const [portError, setPortError] = useState<string | null>(null);

    const [allowAPIAccess, setAllowAPIAccess] = useState<boolean>(false);

    // @ts-ignore
    const [allowedHostNames, setAllowedHostNames] = useState<string[]>(["localhost", "127.0.0.1", "192.168.1.157"]);

    return (
        <div className={"flex flex-col gap-4"}>
            <Card>
                <CardHeader><h5 id="networking">Networking Settings</h5></CardHeader>
                <CardBody className={"flex flex-col gap-8"}>
                    <div className={"flex flex-row items-center gap-8 mr-4"}>
                        <ExtendedSwitch
                            label={"Force HTTPS"}
                            description={"This will enforce secure connections by automatically redirecting users to HTTPS and disallowing insecure HTTP connections."}
                            classNames={{base: "w-full max-w-full"}}
                        />
                        <Input
                            label={"Application Port"}
                            placeholder={"Please enter the port number for the application."}
                            description={"This is the port for the web interface and api."}
                            isRequired
                            value={port.toString()}
                            onValueChange={value =>
                            {
                                setPortError(null);
                                const portString = value.replace(/\D/g, "").trim();
                                if (portString.length > 0 && Number.isFinite(+portString))
                                {
                                    const portNumber = parseInt(portString);
                                    if (portNumber < 1 || portNumber > 65535)
                                    {
                                        setPortError("Port number must be between 1 and 65535.");
                                    }
                                }
                                setPort(portString);
                            }}
                            isInvalid={portError != null}
                            errorMessage={portError}
                            className={"w-1/3"}
                        />
                    </div>

                    <ExtendedSwitch
                        label={"Allow API Access"}
                        description={"This will enable the API, allowing external applications to access and interact with the web application using an API Key."}
                        selected={allowAPIAccess}
                        onToggle={setAllowAPIAccess}
                    />

                    <div className={"flex flex-row gap-4 items-center"}>
                        <Input
                            isDisabled={!allowAPIAccess}
                            label={"API Key"}
                            description={"This is the key used to authenticate API requests."}
                            isRequired
                            className={"w-full cursor-default"}
                            classNames={{
                                input: "!cursor-pointer",
                                label: "!cursor-pointer",
                                inputWrapper: "!cursor-pointer",
                                innerWrapper: "!cursor-pointer"
                            }}
                            isReadOnly
                            value={"0daa8c707f8c4daf8b6c17e053cea6ad"}
                        />
                        <Tooltip content={"Copy API Key"}>
                            <Button isDisabled={!allowAPIAccess} className={"mb-5"} variant={"light"}><FontAwesomeIcon icon={faCopy}/></Button>
                        </Tooltip>
                        <Tooltip content={"Generate a new API Key"}>
                            <Button isDisabled={!allowAPIAccess} color={"danger"} className={"mb-5"} variant={"ghost"}><FontAwesomeIcon icon={faRotateRight}/></Button>
                        </Tooltip>
                    </div>

                    <div>
                        <div className={"flex flex-row items-center"}>
                            <h5>Allowed Hostnames</h5>
                            <div className={"flex flex-row ml-auto"}>
                                <Button color={"primary"} variant={"ghost"}><FontAwesomeIcon icon={faPlus}/></Button>
                            </div>
                        </div>
                        <p className={"text-tiny opacity-50 max-w-[500px] w-1/2 mb-4"}>The list of allowed hostnames is used to specify which hostnames are permitted to access the web application. This list enhances security by restricting access to only trusted and authorized hostnames, ensuring that requests from unauthorized or potentially malicious sources are denied.</p>
                        <ExtendedListbox
                            label={"Allowed Hostnames"}
                        >
                            {allowedHostNames.map((hostName, index) => (
                                <ListboxItem
                                    key={index}
                                    title={hostName}
                                    endContent={(
                                        <div className={"flex flex-row"}>
                                            <Tooltip content={`Edit '${hostName}'`}>
                                                <Button className={"min-w-0"} variant={"light"}>
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </Button>
                                            </Tooltip>
                                            <Tooltip content={`Delete '${hostName}'`}>
                                                <Button className={"min-w-0"} variant={"light"} color={"danger"}>
                                                    <FontAwesomeIcon icon={faTrash}/>
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    )}
                                />
                            ))}

                        </ExtendedListbox>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}
