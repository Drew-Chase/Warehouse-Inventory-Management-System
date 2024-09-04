import {Button, Card, CardBody, CardHeader, cn, Input, Switch} from "@nextui-org/react";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faEye, faEyeSlash, faKey} from "@fortawesome/free-solid-svg-icons";
import Authentication from "../ts/Authentication.ts";
import {useNavigate} from "react-router-dom";
import {debug_mode} from "../../main.tsx";

export default function Login()
{
    document.title = "Login - Warehouse Management System";

    const [showPassword, setShowPassword] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const resetErrors = () =>
    {
        setUsernameError("");
        setPasswordError("");
        setError("");
    };

    const login = async () =>
    {
        if (isLoggingIn) return;
        resetErrors();
        if (!username || !password)
        {
            if (!username) setUsernameError("Username is required");
            if (!password) setPasswordError("Password is required");
            return;
        }
        setIsLoggingIn(true);
        if (debug_mode)
        {
            console.log("Logging in", {username, password, rememberMe});
            navigate("/app/");
            setIsLoggingIn(false);
            return;

        }
        const response = await Authentication.getInstance().login(username, password, rememberMe);
        if (typeof response === "string")
        {
            setUsernameError("Invalid username");
            setPasswordError("Invalid password");
            setError(response);
        }
        if (typeof response === "object" && response.token) navigate("/app/");

        setIsLoggingIn(false);
    };

    return (
        <Card
            className={"flex flex-col w-1/3 max-w-[800px] min-w-[400px] mx-auto mt-10 justify-center px-8 py-4"}
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
                        value={username}
                        onValueChange={setUsername}
                        isInvalid={!!usernameError}
                        errorMessage={usernameError}
                        onKeyUp={(e) => e.key === "Enter" && login()}
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
                        value={password}
                        onValueChange={setPassword}
                        isInvalid={!!passwordError}
                        errorMessage={passwordError}
                        onKeyUp={(e) => e.key === "Enter" && login()}
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
                        isSelected={rememberMe}
                        onValueChange={setRememberMe}
                    >
                        <div className="flex flex-col gap-1">
                            <p className="text-medium">Remember Me?</p>
                            <p className="text-tiny text-default-400">
                                This will keep you logged in until you log out.
                            </p>
                        </div>
                    </Switch>
                    {error && <p className={"text-danger"}><strong>Error:</strong> {error}</p>}
                    <Button radius={"lg"} color={"primary"} isLoading={isLoggingIn} onClick={login}>Log In</Button>
                </div>
            </CardBody>

        </Card>
    );
}