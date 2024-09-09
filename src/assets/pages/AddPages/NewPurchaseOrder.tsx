import {Button, Divider, Tab, Tabs} from "@nextui-org/react";
import AddDocumentsIcon from "../../images/icons/AddDocumentsIcon.svg.tsx";
import SaveIcon from "../../images/icons/SaveIcon.svg.tsx";
import InformationIcon from "../../images/icons/InformationIcon.svg.tsx";
import {useNavigate} from "react-router-dom";
import GeneralInformation from "../../components/Purchases/New Purchase Order/GeneralInformation.tsx";
import AdditionalInformation from "../../components/Purchases/New Purchase Order/AdditionalInformation.tsx";
import Finalize from "../../components/Purchases/New Purchase Order/Finalize.tsx";

export default function NewPurchaseOrder({tab}: { tab: string })
{
    document.title = `New Purchase Order - Warehouse`;
    const navigate = useNavigate();
    const nextTab = () =>
    {
        switch (tab)
        {
            case "additional":
                navigate("/app/purchases/new/finalize");
                break;
            case "finalize":
                navigate("/app/purchases/new/finalize");
                break;
            default:
                navigate("/app/purchases/new/additional");
                break;
        }
    };
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
                defaultSelectedKey={tab}
                onSelectionChange={(index) => navigate(`/app/purchases/new/${(index as string) === "general" ? "" : index}`)}
            >
                <Tab
                    key={"general"}
                    title={
                        <div className={"flex flex-row items-center text-start gap-2"}>
                            <InformationIcon size={20} fill={tab === "general" ? "hsl(var(--nextui-primary-L000))" : undefined}/>
                            <div className={"flex flex-col justify-start w-full p-2"}>
                                <p className={"opacity-50 uppercase"}>step 1</p>
                                <p className={"capitalize"} style={{color: tab === "general" ? "hsl(var(--nextui-primary-L000))" : "white"}}>General Information</p>
                            </div>
                        </div>
                    }
                >
                    <GeneralInformation/>
                </Tab>
                <Tab
                    key={"additional"}
                    title={
                        <div className={"flex flex-row items-center text-start gap-2"}>
                            <AddDocumentsIcon size={20} fill={tab === "additional" ? "hsl(var(--nextui-primary-L000))" : undefined}/>
                            <div className={"flex flex-col justify-start w-full p-2"}>
                                <p className={"opacity-50 uppercase"}>step 2</p>
                                <p className={"capitalize"} style={{color: tab === "additional" ? "hsl(var(--nextui-primary-L000))" : "white"}}>Additional Information</p>
                            </div>
                        </div>
                    }
                >
                    <AdditionalInformation/>
                </Tab>
                <Tab
                    key={"finalize"}
                    title={
                        <div className={"flex flex-row items-center text-start gap-2"}>
                            <SaveIcon size={20} fill={tab === "finalize" ? "hsl(var(--nextui-primary-L000))" : undefined}/>
                            <div className={"flex flex-col justify-start w-full p-2"}>
                                <p className={"opacity-50 uppercase w-full"}>step 3</p>
                                <p className={"capitalize w-full"} style={{color: tab === "finalize" ? "hsl(var(--nextui-primary-L000))" : "white"}}>Finalize</p>
                            </div>
                        </div>
                    }
                >
                    <Finalize/>
                </Tab>

            </Tabs>

            <div className={"flex flex-row gap-4 items-center justify-end p-4 pr-8 fixed bottom-0 left-0 right-0 bg-background-L-100 h-[100px] border-t-3 border-t-background-L200 shadow-lg"}>
                <Button variant={"ghost"} color={"primary"} size={"lg"}> Save as Draft </Button>
                <Divider orientation={"vertical"}/>
                <Button color={"primary"} size={"lg"} onClick={nextTab}> {tab !== "finalize" ? "Next" : "Finish"} </Button>
            </div>
        </div>
    );
}