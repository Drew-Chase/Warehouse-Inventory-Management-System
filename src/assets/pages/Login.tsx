import {Button, Card, CardBody, CardHeader, cn, Divider, Input, Switch} from "@nextui-org/react";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faEye, faEyeSlash, faKey} from "@fortawesome/free-solid-svg-icons";
import WithOAuth, {OAuthMethods} from "../components/OAuth/WithOAuth.tsx";

export default function Login()
{
    document.title = "Login - Warehouse Management System";

    const [showPassword, setShowPassword] = useState(false);


    return (
        <Card
            className={"flex flex-col w-1/3 max-w-[800px] min-w-[400px] mx-auto mt-8 justify-center px-8 py-4"}
        >
            <CardHeader><h1>Login</h1></CardHeader>
            <CardBody>
                <div className={"flex flex-col gap-4"}>
                    <Input
                        label={"Email or Username"}
                        placeholder={"Enter your username or email"}
                        type={"text"}
                        startContent={<FontAwesomeIcon icon={faEnvelope} opacity={.5}/>}
                        autoComplete={"username webauthn"}
                    />
                    <Input
                        label={"Password"}
                        placeholder={"Enter your password"}
                        type={showPassword ? "text" : "password"}
                        autoComplete={"current-password"}
                        startContent={<FontAwesomeIcon icon={faKey} opacity={.5}/>}
                        endContent={
                            <FontAwesomeIcon
                                onClick={() => setShowPassword(prev => !prev)}
                                icon={showPassword ? faEye : faEyeSlash}
                                opacity={showPassword ? 1 : 0.5}
                                className={"cursor-pointer"}
                            />
                        }
                    />
                    <Switch
                        classNames={{
                            base: cn(
                                "inline-flex flex-row-reverse w-full max-w-full bg-content1 hover:bg-content2 items-center",
                                "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                                "data-[selected=true]:border-primary"
                            ),
                            wrapper: "p-0 h-4 overflow-visible",
                            thumb: cn("w-6 h-6 border-2 shadow-lg",
                                "group-data-[hover=true]:border-primary",
                                //selected
                                "group-data-[selected=true]:ml-6",
                                // pressed
                                "group-data-[pressed=true]:w-7",
                                "group-data-[selected]:group-data-[pressed]:ml-4"
                            )
                        }}
                    >
                        <div className="flex flex-col gap-1">
                            <p className="text-medium">Remember Me?</p>
                            <p className="text-tiny text-default-400">
                                This will keep you logged in until you log out.
                            </p>
                        </div>
                    </Switch>
                    <Button radius={"lg"} color={"primary"}>Log In</Button>
                </div>
                <div className={"flex flex-row my-8 mx-auto w-1/3 gap-4 items-center justify-center"}>
                    <Divider className={"w-full"}/>
                    <p className={"opacity-50 text-tiny"}>OR</p>
                    <Divider className={"w-full"}/>
                </div>
                <div className={"w-full flex flex-col gap-4"}>
                    <WithOAuth
                        color={"brand"}
                        method={OAuthMethods.GOOGLE}
                        onSuccess={
                            res =>
                            {
                            }
                        }
                        onError={
                            () =>
                            {
                            }
                        }
                    />
                    <WithOAuth
                        color={"brand"}
                        method={OAuthMethods.GITHUB}
                        onSuccess={
                            res =>
                            {
                            }
                        }
                        onError={
                            () =>
                            {
                            }
                        }
                    />
                </div>
            </CardBody>

        </Card>
    );
}