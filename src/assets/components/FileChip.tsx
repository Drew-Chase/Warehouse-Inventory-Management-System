import {Button, cn, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import InformationIcon from "../images/icons/InformationIcon.svg.tsx";

interface FileChipProps
{
    name: string;
    content: string;
}

export default function FileChip(props: FileChipProps)
{
    const {onOpen, onOpenChange, isOpen} = useDisclosure();
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) =>
                        (
                            <>
                                <ModalHeader>{props.name}</ModalHeader>
                                <ModalBody>
                                    {props.content}
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={onClose}>Close</Button>
                                    <Button onClick={onClose} variant={"light"} color={"danger"}>Delete</Button>
                                </ModalFooter>
                            </>
                        )
                    }
                </ModalContent>;
            </Modal>
            <div
                className={cn(
                    "bg-background-L200 text-foreground-L000 p-2 px-4 flex flex-row flex-nowrap gap-4 rounded-xl items-center",
                    "cursor-pointer hover:bg-background-L-100 transition-all duration-200"
                )}
                onClick={onOpen}
            >
                <InformationIcon/>
                <span>{props.name}</span>
            </div>
        </>
    );
}