import {Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Select, SelectItem, Tooltip, User} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Authentication from "../ts/Authentication.ts";
import {useNavigate} from "react-router-dom";
import {applyTheme, getCurrentTheme, Theme} from "../ts/Theme.ts";

export default function AccountDropdown()
{
    const navigate = useNavigate();
    return (
        <Dropdown classNames={{content: "dark:bg-background-L200 bg-background-L-100"}}>
            <DropdownTrigger>
                <div>
                    <Tooltip content={"Open Profile"}>
                        <Avatar
                            name={"D"}
                            src={"https://avatars.githubusercontent.com/u/5598099?v=4"}
                            color={"warning"} isBordered className={"text-2xl cursor-pointer"}
                            classNames={{
                                name: "top-[1rem]",
                                base: "outline-warning-L-100 hover:outline-warning-L-200 transition-all dark:hover:bg-warning-L-100"
                            }}
                        />
                    </Tooltip>
                </div>
            </DropdownTrigger>
            <DropdownMenu
                disabledKeys={["profile"]}
                className="p-3"
                itemClasses={{
                    base: [
                        "rounded-md",
                        "text-default-800 dark:text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-background-L100",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500"
                    ]
                }}
            >
                <DropdownSection aria-label="Profile & Actions" showDivider>
                    <DropdownItem
                        isReadOnly
                        key="profile"
                        className="h-14 gap-2 opacity-100"
                    >
                        <User
                            name="Drew Chase"
                            description="drew.chase@mardens.com"
                            classNames={{
                                name: "text-default-600",
                                description: "text-default-500"
                            }}
                            avatarProps={{
                                size: "sm",
                                src: "https://avatars.githubusercontent.com/u/5598099?v=4",
                                name: "A"
                            }}
                        />
                    </DropdownItem>
                    <DropdownItem key="dashboard">
                        Dashboard
                    </DropdownItem>
                    <DropdownItem key="settings">Settings</DropdownItem>
                    <DropdownItem
                        key="new_project"
                        endContent={<FontAwesomeIcon icon={faPlus}/>}
                        href={"/app/purchases/new"}
                    >
                        New Purchase Order
                    </DropdownItem>
                </DropdownSection>

                <DropdownSection aria-label="Preferences" showDivider>
                    <DropdownItem key="quick_search" shortcut="⌘K">
                        Quick search
                    </DropdownItem>
                    <DropdownItem
                        isReadOnly
                        key="theme"
                        className="cursor-default"

                    >
                        <Select
                            className="w-full"
                            classNames={{
                                trigger: "bg-background-L100 text-foreground-L-100 data-[hover=true]:bg-background-L000",
                                popoverContent: "bg-background-L000 text-foreground-L-100"
                            }}
                            id="theme"
                            name="theme"
                            size={"sm"}
                            label={"Theme"}
                            defaultSelectedKeys={[getCurrentTheme()]}
                            onChange={(e) => applyTheme(e.target.value as Theme)}
                        >
                            <SelectItem key={"default"}>System</SelectItem>
                            <SelectItem key={"dark"}>Dark</SelectItem>
                            <SelectItem key={"light"}>Light</SelectItem>
                        </Select>
                    </DropdownItem>
                </DropdownSection>

                <DropdownSection aria-label="Help & Feedback">
                    <DropdownItem key="help_and_feedback">
                        Help & Feedback
                    </DropdownItem>
                    <DropdownItem key="logout" color={"danger"} onClick={() =>
                    {
                        Authentication.getInstance().logout();
                        navigate("/");
                    }}>Log Out</DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}