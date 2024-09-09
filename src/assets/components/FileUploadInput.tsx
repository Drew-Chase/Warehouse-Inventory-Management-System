import {HTMLProps} from "react";
import {Button, cn, Divider} from "@nextui-org/react";

interface FileUploadInputProps extends HTMLProps<any>
{
    label?: string;
    description?: string;
    buttonLabel?: string;
    accept?: string;
    onFileChange?: (file: File) => void;
    classNames?: FileUploadInputClassNames;
}

interface FileUploadInputClassNames
{
    wrapper?: string;
    dragdropArea?: string;
    button?: string;
    label?: string;
}

export default function FileUploadInput(props: FileUploadInputProps)
{
    return (
        <div className={cn("flex flex-col", props.className)}>
            <p className={cn("ml-2 mb-2", props.classNames?.label)}>{props.label ?? ""}</p>
            <div className={cn("flex flex-row w-full border-2 border-foreground-L-200/20 p-8 rounded-3xl", props.classNames?.wrapper)}>
                <div className={"w-full items-center justify-center flex gap-8"}>
                    <p className={cn("text-center text-xl opacity-50 p-8 mx-auto cursor-pointer", props.classNames?.dragdropArea)}>
                        Drag<br/>
                        &amp;<br/>
                        Drop
                    </p>
                    <Divider orientation={"vertical"}/>
                    <Button variant={"ghost"} color={"primary"} size={"lg"} className={cn("p-8 mx-auto", props.classNames?.button)}>{props.buttonLabel ?? "Upload File"}</Button>
                </div>
            </div>
            <p className={"text-tiny text-foreground-400"}>{props.description}</p>
        </div>
    );
}