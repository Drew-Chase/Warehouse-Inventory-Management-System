import React from "react";
import WithGoogle from "./WithGoogle.tsx";
import WithGitHub from "./WithGitHub.tsx";

export enum OAuthMethods
{
    GOOGLE,
    GITHUB,
}

export interface WithOAuthProps extends WithSpecifiedOAuthProps
{
    method: OAuthMethods;
}

export interface WithSpecifiedOAuthProps
{

    onSuccess: (response: any) => void;
    onError: () => void;
    prompt?: string;
    color?: "primary" | "secondary" | "brand" | "white" | string;
    textColor?: "white" | "black";
    className?: string;
    style?: React.CSSProperties;
    align?: "start" | "end" | "center";
}


export default function WithOAuth(props: WithOAuthProps)
{
    switch (props.method)
    {
        case OAuthMethods.GOOGLE:
            return (<WithGoogle onSuccess={props.onSuccess} onError={props.onError} prompt={props.prompt} color={props.color} textColor={props.textColor} className={props.className} style={props.style} align={props.align}/>);
        case OAuthMethods.GITHUB:
            return (<WithGitHub onSuccess={props.onSuccess} onError={props.onError} prompt={props.prompt} color={props.color} textColor={props.textColor} className={props.className} style={props.style} align={props.align}/>);
    }
}
