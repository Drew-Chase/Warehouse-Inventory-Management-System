import {Button, Divider, Tab, Tabs} from "@nextui-org/react";
import AddDocumentsIcon from "../../images/icons/AddDocumentsIcon.svg.tsx";
import SaveIcon from "../../images/icons/SaveIcon.svg.tsx";
import InformationIcon from "../../images/icons/InformationIcon.svg.tsx";
import {useNavigate, useParams} from "react-router-dom";
import GeneralInformation from "../../components/Purchases/New Purchase Order/GeneralInformation.tsx";
import AdditionalInformation from "../../components/Purchases/New Purchase Order/AdditionalInformation.tsx";
import Finalize from "../../components/Purchases/New Purchase Order/Finalize.tsx";
import {ReactNode, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileInvoice} from "@fortawesome/free-solid-svg-icons";
import ManifestData from "../../components/Purchases/New Purchase Order/ManifestData.tsx";

interface TabItem
{
    id: string;
    title: string;
    icon: ReactNode;
    body: ReactNode;
}

export default function NewPurchaseOrder()
{
    document.title = `New Purchase Order - Warehouse`;
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState<string>(useParams()?.tab ?? "");

    const tabs: TabItem[] = [
        {
            id: "",
            title: "General Information",
            icon: <InformationIcon size={20} fill={currentTab === "" ? "hsl(var(--nextui-primary-L000))" : undefined}/>,
            body: <GeneralInformation/>
        },
        {
            id: "manifest",
            title: "Manifest Data",
            icon: <FontAwesomeIcon icon={faFileInvoice} width={20} height={20} style={{height: "20px"}} color={currentTab === "manifest" ? "hsl(var(--nextui-primary-L000))" : undefined}/>,
            body: <ManifestData/>
        },
        {
            id: "additional",
            title: "Additional Information",
            icon: <AddDocumentsIcon size={20} fill={currentTab === "additional" ? "hsl(var(--nextui-primary-L000))" : undefined}/>,
            body: <AdditionalInformation/>
        },
        {
            id: "finalize",
            title: "Finalize",
            icon: <SaveIcon size={20} fill={currentTab === "finalize" ? "hsl(var(--nextui-primary-L000))" : undefined}/>,
            body: <Finalize/>
        }
    ];

    const nextTab = () =>
    {
        const currentTabIndex: number = tabs.findIndex(i => i.id === currentTab);

        if (currentTabIndex === -1)
        {
            console.error(`Unable to find tab with id of '${currentTab}'`, tabs);
            return;
        }

        const nextItemIndex = currentTabIndex >= tabs.length ? 0 : currentTabIndex + 1;
        if (nextItemIndex !== 0) setCurrentTab(tabs[nextItemIndex].id);
    };

    useEffect(() => navigate(`/app/purchases/new/${currentTab}`), [currentTab]);

    return (
        <div className={"flex flex-row h-[calc(100dvh_-_172px)] w-screen min-h-[500px] mt-8"}>

            <Tabs
                placement={"start"}
                classNames={{
                    base: "my-auto ml-4",
                    tabList: "bg-transparent",
                    tab: "h-16 w-full",
                    cursor: "!bg-background-L200",
                    tabContent: "w-full"
                }}
                defaultSelectedKey={currentTab}
                selectedKey={currentTab}
                onSelectionChange={(index) => setCurrentTab(index as string)}
            >
                {tabs.map((tab, index) => (
                    <Tab
                        key={tab.id}
                        title={
                            <div className={"flex flex-row items-center text-start gap-2"}>
                                {tab.icon}
                                <div className={"flex flex-col justify-start w-full p-2"}>
                                    <p className={"opacity-50 uppercase"}>step {index + 1}</p>
                                    <p className={"capitalize"} style={{color: currentTab === tab.id ? "hsl(var(--nextui-primary-L000))" : "white"}}>{tab.title}</p>
                                </div>
                            </div>
                        }
                    >
                        {tab.body}
                    </Tab>
                ))}
            </Tabs>

            <div className={"flex flex-row gap-4 items-center justify-end p-4 pr-8 fixed bottom-0 left-0 right-0 bg-background-L-100 h-[100px] border-t-3 border-t-background-L200 shadow-lg z-[100]"}>
                <Button variant={"ghost"} color={"primary"} size={"lg"}> Save as Draft </Button>
                <Divider orientation={"vertical"}/>
                <Button color={"primary"} size={"lg"} onClick={nextTab}> {currentTab !== "finalize" ? "Next" : "Finish"} </Button>
            </div>
        </div>
    );
};