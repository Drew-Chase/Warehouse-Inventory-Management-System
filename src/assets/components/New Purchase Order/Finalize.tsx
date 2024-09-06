import PageForm from "../PageForm.tsx";
import VendorCard from "../VendorCard.tsx";
import InformationIcon from "../../images/icons/InformationIcon.svg.tsx";
import {Textarea} from "@nextui-org/react";

export default function Finalize()
{
    return (
        <PageForm title={"Add New Purchase Order"} subtitle={"Finalize"}>
            <p>Please verify that all of the information that you provided is correct.</p>
            <div className={"flex flex-row items-end"}>
                <span className={"text-4xl font-bold"}>PO Name</span>
                <span className={"text-3xl font-light opacity-50"}>#123456</span>
            </div>
            <p className={"opacity-50 text-small"}>Flooring, Food, General</p>
            <span className={"text-4xl font-bold"}>Vendor</span>
            <VendorCard shortName={"ABC"} vendorTotalPayments={1_500_000} vendor={"ABC Company"} location={"123 Vender Way. Enterprise, AL 36330"} date={"12/04/21"}/>
            <span className={"text-4xl font-bold"}>Additional Information</span>
            <div className={"flex flex-row border-b-2 border-b-foreground-L000/20 pb-1"}>
                <p className={"w-full opacity-50"}>Ship To</p>
                <p className={"w-full text-end"}>123 Warehouse Lane, Company Town, USA</p>
            </div>
            <div className={"flex flex-row border-b-2 border-b-foreground-L000/20 pb-1"}>
                <p className={"w-full opacity-50"}>Ship Via</p>
                <p className={"w-full text-end"}>123 Main Street, Vendor Town, USA</p>
            </div>
            <p>Files</p>
            <div className={"flex flex-row gap-4 max-w-full overflow-y-auto flex-wrap border-2 border-foreground-L-200/20 rounded-2xl p-4 min-h-[140px] grow"}>
                {Array.from({length: 45}, (_, i) => (
                    <div className={"bg-background-L200 text-foreground-L000 p-2 px-4 flex flex-row flex-nowrap gap-4 rounded-xl items-center"}>
                        <InformationIcon/>
                        <span>File {i}.xsl</span>
                    </div>
                ))}
            </div>
            <Textarea
                label={"Notes"}
                placeholder={"Enter any notes or special instructions here"}
                description={"These are any additional notes or instructions that you would like to include with the purchase order. These will only be visible to you and your team."}
                size={"lg"}
                readOnly
                value={`Lorem ipsum dolor sit amet consectetur. Nunc adipiscing nulla nullam consectetur eget sed. Ut amet enim dolor odio consectetur vel neque ligula. Non vitae ipsum volutpat eleifend risus odio adipiscing magna amet. Leo fermentum elementum sed et risus suspendisse gravida. Tortor ullamcorper sagittis lectus egestas quam aliquam auctor eu ultrices. Proin pretium sed elit malesuada facilisis sed aliquam. Tortor cras quam urna purus et in imperdiet. Pulvinar justo eget lacus arcu et justo porttitor. Nec aliquet amet adipiscing facilisis eget duis ut maecenas integer. Sed fringilla ut sociis cursus enim sit. Maecenas sed sem tempus ut porttitor aliquet vel. Orci nec morbi sit nunc duis.`}
            />
        </PageForm>
    );
}