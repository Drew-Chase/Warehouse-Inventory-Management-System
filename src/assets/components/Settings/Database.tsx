import {Button, Card, CardBody, CardHeader, Input, Select, SelectItem, Tooltip} from "@nextui-org/react";
import {useEffect, useState} from "react";
import ExtendedSwitch from "../Extends/ExtendedSwitch.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faVial} from "@fortawesome/free-solid-svg-icons";

export default function Database()
{
    const [useInternalDatabase, setUseInternalDatabase] = useState(true);
    const supportedDatabases = ["MySQL", "PostgreSQL", "Microsoft SQL Server", "MongoDB"];

    const [showPassword, setShowPassword] = useState(false);

    const [databaseHost, setDatabaseHost] = useState("localhost");
    const [databasePort, setDatabasePort] = useState("5432");
    const [databaseUsername, setDatabaseUsername] = useState("root");
    const [databasePassword, setDatabasePassword] = useState("password");
    const [databaseName, setDatabaseName] = useState("warehouse-data");
    const [databaseType, setDatabaseType] = useState("MySQL");
    const [connectionString, setConnectionString] = useState("");


    const buildConnectionString = () =>
    {
        const protocolMap: { [key: string]: string } = {
            MySQL: "mysql",
            PostgreSQL: "postgresql",
            "Microsoft SQL Server": "mssql",
            MongoDB: "mongodb"
        };
        const protocol = protocolMap[databaseType];
        let connString = "";
        if (protocol)
        {
            connString = `${protocol}://${databaseUsername}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}`;
        }
        setConnectionString(connString);
    };

    useEffect(buildConnectionString, [databaseHost, databasePort, databaseUsername, databasePassword, databaseName, databaseType]);


    return (
        <div className={"flex flex-col gap-4"}>
            <Card>
                <CardHeader><h5 id="database">Database Settings</h5></CardHeader>
                <CardBody className={"flex flex-col gap-4"}>
                    <ExtendedSwitch
                        label={"Use internal database"}
                        description={"The internal database utilizes SQLite and stores the data file within the application's directory."}
                        selected={useInternalDatabase}
                        onToggle={setUseInternalDatabase}
                    />
                    <div>
                        <div className={"flex flex-row"}>
                            <h6 className={"text-3xl mb-4 mr-auto"} style={{opacity: useInternalDatabase ? .5 : 1}}>Database Configuration</h6>
                            <Tooltip content={"Test Connection"}>
                                <Button isDisabled={useInternalDatabase} variant={"ghost"} color={"primary"}><FontAwesomeIcon icon={faVial}/></Button>
                            </Tooltip>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <div className={"flex flex-row gap-4"}>
                                <Input
                                    isDisabled={useInternalDatabase}
                                    label={"Host"}
                                    placeholder={"localhost"}
                                    description={"The host of the database"}
                                    isRequired
                                    value={databaseHost}
                                    onValueChange={setDatabaseHost}
                                />
                                <Input
                                    isDisabled={useInternalDatabase}
                                    label={"Port"}
                                    type="number"
                                    placeholder={"5432"}
                                    description={"The port of the database"}
                                    isRequired
                                    value={databasePort}
                                    onValueChange={value => setDatabasePort(value.replace(/\D/g, ""))}
                                />
                            </div>
                            <div className={"flex flex-row gap-4"}>
                                <Input
                                    isDisabled={useInternalDatabase}
                                    label={"Username"}
                                    type="text"
                                    placeholder={"root"}
                                    description={"The username of the database"}
                                    isRequired
                                    value={databaseUsername}
                                    onValueChange={setDatabaseUsername}
                                />
                                <Input
                                    isDisabled={useInternalDatabase}
                                    label={"Password"}
                                    type={showPassword ? "test" : "password"}
                                    placeholder={"********"}
                                    description={"The password of the database"}
                                    isRequired
                                    value={databasePassword}
                                    onValueChange={setDatabasePassword}
                                    endContent={
                                        <Tooltip content={"Toggle Password visibility"}>
                                            <FontAwesomeIcon
                                                icon={showPassword ? faEyeSlash : faEye}
                                                className={"mb-auto mt-4 cursor-pointer opacity-50 hover:opacity-100 transition-[color,opacity]"}
                                                onClick={() => setShowPassword(prev => !prev)}
                                            />
                                        </Tooltip>
                                    }
                                />
                            </div>
                            <div className={"flex flex-row gap-4"}>
                                <Input
                                    isDisabled={useInternalDatabase}
                                    label={"Database Name"}
                                    type="text"
                                    description={"The name of the database"}
                                    isRequired
                                    value={databaseName}
                                    onValueChange={setDatabaseName}
                                />
                                <Select
                                    isDisabled={useInternalDatabase}
                                    label={"Database Type"}
                                    description={"The backend server of the database"}
                                    isRequired
                                    defaultSelectedKeys={[databaseType]}
                                    onSelectionChange={value => setDatabaseType(value as string)}
                                >
                                    {supportedDatabases.map(option => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                                </Select>
                            </div>
                            <Input
                                isDisabled={useInternalDatabase}
                                label={"Connection String"}
                                type="text"
                                value={connectionString}
                                description={"The connection string of the database"}
                                isRequired
                                onValueChange={value =>
                                {
                                    // build host, port, username, password, and database name from connection string

                                    const regex = /^(?<protocol>\w+):\/\/(?<username>[^:]+):(?<password>[^@]+)@(?<host>[^:]+):(?<port>\d+)\/(?<dbname>.+)$/;

                                    const match = value.match(regex);

                                    if (match?.groups)
                                    {
                                        setDatabaseUsername(match.groups.username);
                                        setDatabasePassword(match.groups.password);
                                        setDatabaseHost(match.groups.host);
                                        setDatabasePort(match.groups.port);
                                        setDatabaseName(match.groups.dbname);

                                        // Infer database type from the protocol
                                        switch (match.groups.protocol)
                                        {
                                            case "mysql":
                                                setDatabaseType("MySQL");
                                                break;
                                            case "postgresql":
                                                setDatabaseType("PostgreSQL");
                                                break;
                                            case "mssql":
                                                setDatabaseType("Microsoft SQL Server");
                                                break;
                                            case "mongodb":
                                                setDatabaseType("MongoDB");
                                                break;
                                            default:
                                                setDatabaseType("");
                                                break;
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}