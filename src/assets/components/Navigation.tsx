import React, {ReactNode} from "react";
import {Badge, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Tooltip} from "@nextui-org/react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {useNavigate} from "react-router-dom";
import DashboardIcon from "../images/icons/DashboardIcon.tsx";
import PurchasesIcon from "../images/icons/PurchasesIcon.tsx";
import InventoryIcon from "../images/icons/InventoryIcon.tsx";
import VendorIcon from "../images/icons/VendorIcon.tsx";
import GearIcon from "../images/icons/GearIcon.tsx";
import NotificationIcon from "../images/icons/NotificationIcon.tsx";
import AccountDropdown from "./AccountDropdown.tsx";
import Logo from "../images/Logo.tsx";

interface Page
{
    name: string;
    url: string;
    icon: (props: { isCurrentPage: boolean }) => ReactNode;
}

export default function Navigation()
{
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pages: Page[] = [
        {
            name: "Dashboard",
            url: "/app/",
            icon: ({isCurrentPage}) => (
                <DashboardIcon fill={isCurrentPage ? "hsl(var(--nextui-primary-L000))" : "hsl(0, 0%, 50%)"}/>
            )
        },
        {
            name: "Purchases",
            url: "/app/purchases",
            icon: ({isCurrentPage}) => (
                <PurchasesIcon fill={isCurrentPage ? "hsl(var(--nextui-primary-L000))" : "hsl(0, 0%, 50%)"}/>
            )
        },
        {
            name: "Inventory",
            url: "/app/inventory",
            icon: ({isCurrentPage}) => (
                <InventoryIcon fill={isCurrentPage ? "hsl(var(--nextui-primary-L000))" : "hsl(0, 0%, 50%)"}/>
            )
        },
        {
            name: "Vendors",
            url: "/app/vendors",
            icon: ({isCurrentPage}) => (
                <VendorIcon fill={isCurrentPage ? "hsl(var(--nextui-primary-L000))" : "hsl(0, 0%, 50%)"}/>
            )
        }
    ];
    const menuItems = pages.map((item, index) =>
    {
        const isCurrentPage = window.location.pathname === item.url;
        return (
            <NavbarMenuItem key={`${item}-${index}`}>
                <Button
                    href={item.url}
                    aria-current={isCurrentPage}
                    size="lg"
                    variant={isCurrentPage ? "flat" : "ghost"}
                    className="w-full bg-background-L-100 hover:!text-white hover:!bg-background-L200 hover:!border-transparent"
                    style={{
                        color: isCurrentPage ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 50%)",
                        backgroundColor: isCurrentPage ? "hsl(var(--nextui-background-L200))" : "transparent"
                    }}
                    radius={"full"}
                    startContent={item.icon({isCurrentPage})}
                    onClick={() => navigate(item.url)}
                >
                    {item.name}
                </Button>
            </NavbarMenuItem>
        );
    });


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth={"full"} className={"bg-transparent"} isBlurred={false} position={"static"}>
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden"/>
                <NavbarBrand>
                    <Logo fill={"hsl(var(--nextui-foreground-L000))"}/>
                </NavbarBrand>
            </NavbarContent>
            {
                window.location.pathname.startsWith("/app/") && (
                    <>
                        <NavbarContent className="hidden sm:flex gap-4" justify="center">
                            {menuItems}
                        </NavbarContent>
                        <NavbarContent justify="end">
                            <NavbarItem>
                                <Tooltip content={"Open Settings"}>
                                    <Button className={"bg-background-L200 text-foreground-L-100 w-[2.5rem] h-[2.5rem] p-0 min-w-0 aspect-square"}>
                                        <GearIcon fill={"hsl(var(--nextui-foreground-L000))"}/>
                                    </Button>
                                </Tooltip>
                            </NavbarItem>
                            <NavbarItem>
                                <Tooltip content={"Open Notifications"}>
                                    <Button className={"bg-background-L200 text-foreground-L-100 w-[2.5rem] h-[2.5rem] p-0 min-w-0 aspect-square"}>
                                        <Badge className={"bg-accent-L000 aspect-square"}>
                                            <NotificationIcon fill={"hsl(var(--nextui-foreground-L000))"}/>
                                        </Badge>
                                    </Button>
                                </Tooltip>
                            </NavbarItem>
                            <NavbarItem>
                                <AccountDropdown/>
                            </NavbarItem>
                        </NavbarContent>

                        <NavbarMenu>
                            {menuItems}
                        </NavbarMenu>
                    </>
                )
            }
        </Navbar>
    );
}
