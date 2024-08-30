import {Button, cn, Image} from "@nextui-org/react";
import GoogleLogo from "../../images/google-logo.svg";
import {WithSpecifiedOAuthProps} from "./WithOAuth.tsx";
import {useState} from "react";

export default function WithGoogle(props: WithSpecifiedOAuthProps)
{
    const [loading, setLoading] = useState(false);
    let color = props.color;
    switch (color)
    {
        case "brand":
        {
            color = "#2977f1";
            break;
        }
        default:
        {
            color = "white";
            break;
        }
    }


    const signIn = async () =>
    {
        const url: URL = new URL("https://accounts.google.com/o/oauth2/v2/auth");
        url.searchParams.append("client_id", "55703062252-38ppr8udq2eemh4th8dgpdvafrnrgcre.apps.googleusercontent.com");
        url.searchParams.append("redirect_uri", window.location.href);
        url.searchParams.append("response_type", "code");
        url.searchParams.append("scope", ".../auth/userinfo.profile .../auth/userinfo.email");
        window.location.assign(url.toString());
        console.log(url.toString());
    };
    return (
        <Button
            isLoading={loading}
            onClick={() =>
            {
                setLoading(true);
                signIn();
            }}
            style={
                {
                    backgroundColor: color,
                    color: props.textColor ?? "black",
                    ...props.style
                }
            }
            className={
                cn(
                    "flex items-center font-bold gap-2 p-4 rounded-lg w-full",
                    `justify-${props.align ?? "center"}`,
                    props.className
                )
            }
        >
            <Image src={GoogleLogo} className={"bg-white rounded-full p-1"} width={32} height={32}/>
            <p>{props.prompt ?? "Sign In"} With Google</p>
        </Button>
    );
}
