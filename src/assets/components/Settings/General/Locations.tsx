import {Button, ListboxItem, Tooltip} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import AddLocationPopup from "./AddLocationPopup.tsx";
import EditLocationPopup from "./EditLocationPopup.tsx";
import DeleteLocationPopup from "./DeleteLocationPopup.tsx";
import ExtendedListbox from "../../Extends/ExtendedListbox.tsx";

export interface WarehouseLocation
{
    id: number;
    name: string;
    address: string;
}

export default function Locations()
{
    const [isAdding, setIsAdding] = useState(false);
    const [deleteLocation, setDeleteLocation] = useState<WarehouseLocation | null>(null);
    const [editLocation, setEditLocation] = useState<WarehouseLocation | null>(null);
    const [items, setItems] = useState<WarehouseLocation[]>([
        {
            id: 1,
            name: "Warehouse A",
            address: "1234 Example St, City, State, ZIP"
        },
        {
            id: 2,
            name: "Warehouse B",
            address: "5678 Example St, City, State, ZIP"
        }
    ]);


    useEffect(() =>
    {
        console.log("Saving locations", items);
        // TODO: Save items to the server
    }, [items]);

    return (
        <>
            <AddLocationPopup
                isOpen={isAdding}
                onAdd={(name, address) =>
                {
                    setItems([...items, {
                        id: items.length + 1,
                        name,
                        address
                    }]);
                }}
                onClose={() => setIsAdding(false)}
            />
            <EditLocationPopup
                isOpen={editLocation != null}
                onSave={
                    location =>
                    {
                        setItems(items.map(item => item.id === location.id ? location : item));
                    }
                }
                value={editLocation || {id: 0, name: "", address: ""}}
                onClose={() => setEditLocation(null)}
            />
            <DeleteLocationPopup
                isOpen={deleteLocation != null}
                location={deleteLocation || {id: -1, name: "", address: ""}}
                onDelete={id =>
                {
                    setItems(items.filter(item => item.id !== id));
                    setDeleteLocation(null);
                }}
                onClose={() => setDeleteLocation(null)}
            />
            <div className={"flex flex-row items-center"}>
                <h5>Locations</h5>
                <div className={"flex flex-row ml-auto"}>
                    <Button color={"primary"} variant={"ghost"} onClick={() => setIsAdding(true)}><FontAwesomeIcon icon={faPlus}/></Button>
                </div>
            </div>
            <ExtendedListbox
                emptyContent={"No locations found."}
            >
                {items.map((item) => (
                    <ListboxItem
                        key={item.id}
                        title={item.name}
                        description={item.address}
                        endContent={(
                            <div className={"flex flex-row"}>
                                <Tooltip content={`Edit '${item.name}'`}>
                                    <Button className={"min-w-0"} variant={"light"} onClick={() =>
                                    {
                                        setEditLocation(item);
                                    }}>
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Button>
                                </Tooltip>
                                <Tooltip content={`Delete '${item.name}'`}>
                                    <Button className={"min-w-0"} variant={"light"} color={"danger"} onClick={() => setDeleteLocation(item)}>
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </Button>
                                </Tooltip>
                            </div>
                        )}
                    />
                ))}
            </ExtendedListbox>
        </>
    );
}
