import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {WarehouseLocation} from "./Locations.tsx";

interface DeleteLocationPopupProps
{
    isOpen: boolean;
    location: WarehouseLocation;
    onDelete: (id: number) => void;
    onClose: () => void;
}

export default function DeleteLocationPopup(props: DeleteLocationPopupProps)
{
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
                    onClose => (
                        <>
                            <ModalHeader><p className={"text-3xl"}>Delete</p></ModalHeader>
                            <ModalBody>
                                <p>Are you sure you want to delete this location?</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color={"danger"} onClick={() =>
                                {
                                    console.log("Deleting location", props.location.id);
                                    props.onDelete(props.location.id);
                                    onClose();
                                }}
                                >
                                    Delete
                                </Button>
                                <Button onClick={onClose} variant={"light"}>Cancel</Button>
                            </ModalFooter>
                        </>
                    )
                }
            </ModalContent>
        </Modal>
    );
}