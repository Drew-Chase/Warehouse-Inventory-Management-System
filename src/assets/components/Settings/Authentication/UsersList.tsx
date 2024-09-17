import ExtendedSwitch from "../../Extends/ExtendedSwitch.tsx";
import {useState} from "react";
import {User} from "../../../ts/Authentication.ts";
import ExtendedListbox from "../../Extends/ExtendedListbox.tsx";
import {Button, ListboxItem, Tooltip} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {WarehouseLocation} from "../General/Locations.tsx";

export default function UsersList()
{
    // @ts-ignore
    const [isAdding, setIsAdding] = useState(false);
    // @ts-ignore
    const [deleteUser, setDeleteUser] = useState<WarehouseLocation | null>(null);
    // @ts-ignore
    const [editUser, setEditUser] = useState<WarehouseLocation | null>(null);
    // @ts-ignore
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            username: "Administrator",
            admin: true,
            created_at: "2021-01-01",
            updated_at: "2021-01-01",
            last_login: "2021-01-01",
            password: ""
        },
        {
            id: 2,
            username: "john.doe@example.com",
            admin: false,
            created_at: "2021-01-01",
            updated_at: "2021-01-01",
            last_login: "2021-01-01",
            password: ""
        }
    ]);
    return (
        <>
            <div className={"flex flex-row items-center"}>
                <h5>Users</h5>
                <div className={"flex flex-row ml-auto"}>
                    <Button color={"primary"} variant={"ghost"} onClick={() => setIsAdding(true)}><FontAwesomeIcon icon={faPlus}/></Button>
                </div>
            </div>
            <ExtendedSwitch
                label={"Open Registration"}
                description={"Allow users to register themselves without an invite code. This is not recommended for public-facing applications."}
            />

            <ExtendedListbox
                emptyContent={"No users found."}
            >
                {users.map(user => (
                    <ListboxItem
                        key={user.id}
                        title={user.username}
                        description={<p><span className={"italic mr-1"}>Role:</span><span className={"font-bold"}>{user.admin ? "Admin" : "User"}</span></p>}
                        endContent={(
                            <div className={"flex flex-row"}>
                                <Tooltip content={`Edit '${user.username}'`}>
                                    <Button className={"min-w-0"} variant={"light"} onClick={() =>
                                    {
                                    }}>
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Button>
                                </Tooltip>
                                <Tooltip content={`Delete '${user.username}'`}>
                                    <Button className={"min-w-0"} variant={"light"} color={"danger"} onClick={() =>
                                    {
                                    }}>
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