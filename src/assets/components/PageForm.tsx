import {ReactNode} from "react";

interface PageFormProps
{
    title: string,
    subtitle: string,
    children?: ReactNode
}

export default function PageForm(props: PageFormProps)
{
    return (
        <div className={"flex flex-col w-[calc(100vw_-_300px)] min-w-[600px] items-center h-[calc(100dvh_-_170px)]"}>
            <h5 className={"lg:text-[1.5rem] md:text-2xl sm:text-xl lg:mb-2 text-foreground-L-200/70"}>{props.title}</h5>
            <h1 className={"lg:text-[2.5rem] md:text-3xl sm:text-2xl lg:mb-2"}>{props.subtitle}</h1>
            <div className={"flex flex-col bg-background-L100 h-full min-h-[200px] overflow-y-auto w-10/12 rounded-t-3xl p-10 pb-10 gap-4"}>
                {props.children}
            </div>
        </div>
    );
}