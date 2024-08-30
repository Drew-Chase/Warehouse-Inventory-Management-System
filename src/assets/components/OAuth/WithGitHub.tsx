import {Button, cn, Image} from "@nextui-org/react";
import GitHubLogo from "../../images/github-mark-white.svg";
import {WithSpecifiedOAuthProps} from "./WithOAuth.tsx";


export default function WithGitHub(props: WithSpecifiedOAuthProps)
{
    let color = props.color;
    switch (color)
    {
        case "brand":
        {
            color = "#333";
            break;
        }
        default:
        {
            color = "white";
            break;
        }
    }
    return (
        <Button
            onClick={() =>
            {
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
            <Image src={GitHubLogo} className={"rounded-full p-1"} width={32} height={32}/>
            <p>{props.prompt ?? "Sign In"} With Github</p>
        </Button>
    );
}
