import React, {ReactElement} from "react";
import {Button, Image, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Tooltip} from "@nextui-org/react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import logo from "../images/logo.svg";
import {useNavigate} from "react-router-dom";
import DashboardIcon from "../images/DashboardIcon.tsx";

interface Page
{
    name: string;
    url: string;
    icon?: ReactElement;
}

export default function Navigation()
{
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pages: Page[] = [
        {
            name: "Dashboard",
            url: "/app/",
            icon: <DashboardIcon/>
        },
        {
            name: "Purchases",
            url: "/app/purchases"
        },
        {
            name: "Inventory",
            url: "/app/inventory"
        },
        {
            name: "Vendors",
            url: "/app/vendors"
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
                    className="w-full bg-background-L-100"
                    radius={"full"}
                    startContent={item.icon ?? <></>}
                    onClick={() => navigate(item.url)}
                >
                    {item.name}
                </Button>
            </NavbarMenuItem>
        );
    });


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth={"full"}>
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden"/>
                <NavbarBrand>
                    <Tooltip delay={1000} content={"Navigate Home"}>
                        <Image onClick={() => navigate("/")} src={logo} className={"rounded-none cursor-pointer hover:scale-105"}/>
                    </Tooltip>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher/>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems}
            </NavbarMenu>
        </Navbar>);
}