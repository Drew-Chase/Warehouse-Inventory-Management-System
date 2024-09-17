import {Card, CardBody, CardHeader, Tab, Tabs} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import General from "../components/Settings/General.tsx";
import {useEffect} from "react";
import $ from "jquery";
import Networking from "../components/Settings/Networking.tsx";
import Authentication from "../components/Settings/Authentication.tsx";
import Database from "../components/Settings/Database.tsx";
import Profile from "../components/Settings/Profile.tsx";

interface SettingsProps
{
    tab: "general" | "networking" | "authentication" | "database" | "profile";
}

export default function Settings({tab}: SettingsProps)
{
    const navigate = useNavigate();

    const scrollTo = (tab: string) =>
    {
        const element = document.getElementById(tab);
        if (element)
        {
            element.scrollIntoView({behavior: "smooth"});
            setTimeout(() =>
            {
                navigate(`/app/settings/${tab === "general" ? "" : tab}`);
            }, 500);
        }
    };

    useEffect(() =>
    {
        const sections = ["general", "networking", "authentication", "database", "profile"];
        const sectionElements = sections.map(section => $(`#${section}`)[0]);
        const scrollView = $("#scroll-view");
        let lastCallTime = 0;

        scrollView.on("scroll", () =>
        {
            if (lastCallTime) clearTimeout(lastCallTime);
            lastCallTime = setTimeout(() =>
            {
                clearTimeout(lastCallTime);
                const viewportHeight = scrollView.innerHeight() || window.innerHeight || document.documentElement.clientHeight;
                const viewportMidpoint = viewportHeight / 2;
                sectionElements.forEach((element, index) =>
                {
                    if (element)
                    {
                        const entryRect = element.getBoundingClientRect();
                        const entryMidpoint = entryRect.top + entryRect.height / 2;
                        if (entryMidpoint <= viewportMidpoint)
                        {
                            navigate(`/app/settings/${sections[index] === "general" ? "" : sections[index]}`);
                        }
                    }

                });
            }, 200);
        });

    }, []);

    return (
        <div className={"flex flex-row h-[calc(100dvh_-_85px)] mx-4 gap-4"}>
            <Card className={"w-[325px] shrink-0 grow-0 h-full"}>
                <CardHeader><h5>Settings</h5></CardHeader>
                <CardBody>
                    <Tabs
                        isVertical
                        selectedKey={tab}
                        onSelectionChange={key => scrollTo(key as string)}
                        classNames={{
                            base: "w-full h-full",
                            tabList: "w-full h-full bg-transparent",
                            cursor: "dark:bg-primary-L000",
                            tabContent: "group-data-[selected=true]:text-black",
                            tab: "justify-start py-6 data-[hover=true]:bg-background-L200 data-[hover-unselected=true]:opacity-100 data-[hover-unselected=true]:text-white/100"
                        }}
                    >
                        <Tab key={"general"} title={"General"}/>
                        <Tab key={"networking"} title={"Networking"}/>
                        <Tab key={"authentication"} title={"Authentication"}/>
                        <Tab key={"database"} title={"Database"}/>
                        <Tab key={"profile"} title={"Profile"}/>
                    </Tabs>
                </CardBody>
            </Card>
            <div id={"scroll-view"} className={"flex flex-col max-h-[calc(100dvh_-_64px)] h-screen overflow-y-auto w-full gap-4 pb-[calc(100dvh_-_175px)]"}>
                <General/>
                <Networking/>
                <Authentication/>
                <Database/>
                <Profile/>
            </div>
        </div>
    );
}