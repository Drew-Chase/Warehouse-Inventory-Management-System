import {useEffect, useState} from "react";
import {Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import {WarehouseLocation} from "./Locations.tsx";

export interface EditLocationPopupProps
{
    isOpen: boolean;
    onSave: (location: WarehouseLocation) => void;
    value: WarehouseLocation;
    onClose: () => void;
}

export default function EditLocationPopup(props: EditLocationPopupProps)
{
    const {onOpen} = useDisclosure();
    const [name, setName] = useState(props.value.name);
    const [address, setAddress] = useState(props.value.address);

    const [isMissingName, setIsMissingName] = useState(false);
    const [isMissingAddress, setIsMissingAddress] = useState(false);

    useEffect(() =>
    {
        console.log("EditLocationPopup", props.isOpen);
        if (props.isOpen)
        {
            onOpen();
            console.log("Setting name and address", props.value.name, props.value.address);
            setName(props.value.name);
            setAddress(props.value.address);
        } else
        {
            setName("");
            setAddress("");
        }
    }, [props.isOpen]);

    return (
        <Modal
            isOpen={props.isOpen}
            onOpenChange={isOpen =>
            {
                if (!isOpen) props.onClose();
            }}
            onClose={() =>
            {
                console.log("Closing EditLocationPopup");
                setName("");
                setAddress("");
                props.onClose();
            }}
        >
            <ModalContent>
                {
                    onClose =>
                    {
                        const edit = () =>
                        {
                            setIsMissingName(false);
                            setIsMissingAddress(false);
                            if (name === "" || address === "")
                            {
                                if (name === "") setIsMissingName(true);
                                if (address === "") setIsMissingAddress(true);
                                return;
                            }
                            props.onSave({id: props.value.id, name, address} as WarehouseLocation);
                            setName("");
                            setAddress("");
                            onClose();

                        };
                        return (
                            <>
                                <ModalHeader><p className={"text-3xl"}>Edit Location</p></ModalHeader>
                                <ModalBody>
                                    <Input
                                        label={"Display Name"}
                                        placeholder={"Please enter the name of the location."}
                                        isRequired
                                        value={name}
                                        onValueChange={setName}
                                        isInvalid={isMissingName}
                                        errorMessage={"Please enter a name."}
                                        onKeyUp={event =>
                                        {
                                            if (event.key === "Enter") edit();
                                        }}
                                    />
                                    <Input
                                        label={"Address"}
                                        placeholder={"Please enter the address of the location."}
                                        isRequired
                                        value={address}
                                        onValueChange={setAddress}
                                        isInvalid={isMissingAddress}
                                        errorMessage={"Please enter an address."}
                                        onKeyUp={event =>
                                        {
                                            if (event.key === "Enter") edit();
                                        }}
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color={"primary"} onClick={edit}> Save </Button>
                                    <Button onClick={onClose} variant={"light"} color={"danger"}>Cancel</Button>
                                </ModalFooter>
                            </>

                        );
                    }

                }
            </ModalContent>
        </Modal>
    );
}