import {Button, Divider, Tab, Tabs} from "@nextui-org/react";
import AddDocumentsIcon from "../../images/icons/AddDocumentsIcon.svg.tsx";
import SaveIcon from "../../images/icons/SaveIcon.svg.tsx";
import InformationIcon from "../../images/icons/InformationIcon.svg.tsx";
import {useState} from "react";

export default function NewPurchaseOrder()
{
    const [activeTab, setActiveTab] = useState<string>("general");
    return (
        <div className={"flex flex-row h-screen w-screen"}>

            <Tabs
                placement={"start"}
                classNames={{
                    tabList: "bg-transparent",
                    tab: "h-16 w-full",
                    cursor: "!bg-background-L200",
                    tabContent: "w-full"
                }}
                selectedKey={activeTab}
                onSelectionChange={(index) => setActiveTab(index as string)}
            >
                <Tab
                    key={"general"}
                    title={
                        <div className={"flex flex-row items-center text-start"}>
                            <InformationIcon size={20} fill={activeTab === "general" ? "hsl(var(--nextui-primary-L000))" : undefined}/>
                            <div className={"flex flex-col justify-start w-full p-2"}>
                                <p className={"opacity-50 uppercase"}>step 1</p>
                                <p className={"capitalize"}>General Information</p>
                            </div>
                        </div>
                    }
                />
                <Tab
                    key={"additional"}
                    title={
                        <div className={"flex flex-row items-center text-start w-full"}>
                            <AddDocumentsIcon size={20} fill={activeTab === "additional" ? "hsl(var(--nextui-primary-L000))" : undefined}/>
                            <div className={"flex flex-col justify-start w-full p-2"}>
                                <p className={"opacity-50 uppercase"}>step 2</p>
                                <p className={"capitalize"}>Additional Information</p>
                            </div>
                        </div>
                    }
                />
                <Tab
                    key={"finalize"}
                    title={
                        <div className={"flex flex-row items-center text-start w-full"}>
                            <SaveIcon size={20} fill={activeTab === "finalize" ? "hsl(var(--nextui-primary-L000))" : undefined}/>
                            <div className={"flex flex-col justify-start w-full p-2"}>
                                <p className={"opacity-50 uppercase w-full"}>step 3</p>
                                <p className={"capitalize w-full"}>Finalize</p>
                            </div>
                        </div>
                    }
                />

            </Tabs>

            <div className={"flex flex-row gap-4 items-center justify-end p-4 pr-8 fixed bottom-0 left-0 right-0 bg-background-L-100 h-[100px] border-t-3 border-t-background-L200 shadow-lg"}>
                <Button variant={"ghost"} color={"primary"} size={"lg"}> Save as Draft </Button>
                <Divider orientation={"vertical"}/>
                <Button color={"primary"} size={"lg"}> Next </Button>
            </div>
        </div>
    );
}