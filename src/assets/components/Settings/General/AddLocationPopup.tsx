import {Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {useState} from "react";

interface AddLocationPopupProps
{
    isOpen: boolean;
    onAdd: (name: string, address: string) => void;
    onClose: () => void;
}

export default function AddLocationPopup(props: AddLocationPopupProps)
{
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const [isMissingName, setIsMissingName] = useState(false);
    const [isMissingAddress, setIsMissingAddress] = useState(false);


    return (
        <Modal
            isOpen={props.isOpen}
            onOpenChange={value =>
            {
                if (!value) props.onClose();
            }}
        >
            <ModalContent>
                {
                    onClose =>
                    {
                        const add = () =>
                        {
                            setIsMissingName(false);
                            setIsMissingAddress(false);
                            if (name === "" || address === "")
                            {
                                if (name === "") setIsMissingName(true);
                                if (address === "") setIsMissingAddress(true);
                                return;
                            }
                            props.onAdd(name, address);
                            setName("");
                            setAddress("");
                            onClose();
                        };
                        return (
                            <>
                                <ModalHeader><p className={"text-3xl"}>Add Location</p></ModalHeader>
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
                                            if (event.key === "Enter") add();
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
                                            if (event.key === "Enter") add();
                                        }}
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color={"primary"} onClick={add}> Add </Button>
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