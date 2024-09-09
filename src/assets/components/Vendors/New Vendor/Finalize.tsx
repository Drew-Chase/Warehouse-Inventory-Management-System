import {Image, Textarea} from "@nextui-org/react";
import PageForm from "../../PageForm.tsx";
import FileChip from "../../FileChip.tsx";
import testUser from "../../../images/test-user.svg";

export default function Finalize()
{
    return (
        <PageForm title={"Add New Purchase Order"} subtitle={"Finalize"}>
            <p>Please verify that all of the information that you provided is correct.</p>
            <div className={"flex flex-row gap-8"}>
                <Image src={testUser} width={70} height={70}/>
                <div className={"flex flex-col"}>
                    <div className={"flex flex-row items-end gap-2"}>
                        <span className={"text-4xl font-bold"}>ABC Company</span>
                        <span className={"text-3xl font-light opacity-50"}>- ABC</span>
                    </div>
                    <p className={"text-small opacity-50"}>Flooring, Food, General</p>
                </div>

            </div>
            <h5>Contact</h5>
            <div className={"flex flex-row border-b-2 border-b-foreground-L000/20 pb-1"}>
                <p className={"w-full opacity-50"}>First Name</p>
                <p className={"w-full text-end"}>John</p>
            </div>
            <div className={"flex flex-row border-b-2 border-b-foreground-L000/20 pb-1"}>
                <p className={"w-full opacity-50"}>Last Name</p>
                <p className={"w-full text-end"}>Doe</p>
            </div>
            <div className={"flex flex-row border-b-2 border-b-foreground-L000/20 pb-1"}>
                <p className={"w-full opacity-50"}>Email</p>
                <p className={"w-full text-end"}>johndoe@example.com</p>
            </div>
            <div className={"flex flex-row border-b-2 border-b-foreground-L000/20 pb-1"}>
                <p className={"w-full opacity-50"}>Phone</p>
                <p className={"w-full text-end"}>+1 234 567 8901</p>
            </div>
            <div className={"flex flex-row border-b-2 border-b-foreground-L000/20 pb-1"}>
                <p className={"w-full opacity-50"}>Phone Extension</p>
                <p className={"w-full text-end"}>1234</p>
            </div>
            <div className={"flex flex-row border-b-2 border-b-foreground-L000/20 pb-1"}>
                <p className={"w-full opacity-50"}>Country</p>
                <p className={"w-full text-end"}>USA</p>
            </div>
            <div className={"flex flex-row border-b-2 border-b-foreground-L000/20 pb-1"}>
                <p className={"w-full opacity-50"}>City</p>
                <p className={"w-full text-end"}>New York</p>
            </div>
            <div className={"flex flex-row border-b-2 border-b-foreground-L000/20 pb-1"}>
                <p className={"w-full opacity-50"}>Street Address</p>
                <p className={"w-full text-end"}>123 4th Avenue</p>
            </div>
            <div className={"flex flex-row border-b-2 border-b-foreground-L000/20 pb-1"}>
                <p className={"w-full opacity-50"}>State/Province</p>
                <p className={"w-full text-end"}>NY</p>
            </div>


            <h5>Additional Information</h5>
            <p>Files</p>
            <div className={"flex flex-row gap-4 max-w-full overflow-y-auto flex-wrap border-2 border-foreground-L-200/20 rounded-2xl p-4 min-h-[140px] grow"}>
                {Array.from({length: 45}, (_, i) => (
                    <FileChip name={`File ${i}.xsl`} content={"Hello World"}/>
                ))}
            </div>


            <Textarea
                label={"Terms"}
                placeholder={"Enter any terms or conditions here"}
                description={""}
                size={"lg"}
                readOnly
                value={`Lorem ipsum dolor sit amet consectetur. Nunc adipiscing nulla nullam consectetur eget sed. Ut amet enim dolor odio consectetur vel neque ligula. Non vitae ipsum volutpat eleifend risus odio adipiscing magna amet. Leo fermentum elementum sed et risus suspendisse gravida. Tortor ullamcorper sagittis lectus egestas quam aliquam auctor eu ultrices. Proin pretium sed elit malesuada facilisis sed aliquam. Tortor cras quam urna purus et in imperdiet. Pulvinar justo eget lacus arcu et justo porttitor. Nec aliquet amet adipiscing facilisis eget duis ut maecenas integer. Sed fringilla ut sociis cursus enim sit. Maecenas sed sem tempus ut porttitor aliquet vel. Orci nec morbi sit nunc duis.`}
            />
            <Textarea
                label={"Notes"}
                placeholder={"Enter any notes or special instructions here"}
                description={"These are any additional notes or instructions that you would like to include about the vendor. These will only be visible to you and your team."}
                size={"lg"}
                readOnly
                value={`Lorem ipsum dolor sit amet consectetur. Nunc adipiscing nulla nullam consectetur eget sed. Ut amet enim dolor odio consectetur vel neque ligula. Non vitae ipsum volutpat eleifend risus odio adipiscing magna amet. Leo fermentum elementum sed et risus suspendisse gravida. Tortor ullamcorper sagittis lectus egestas quam aliquam auctor eu ultrices. Proin pretium sed elit malesuada facilisis sed aliquam. Tortor cras quam urna purus et in imperdiet. Pulvinar justo eget lacus arcu et justo porttitor. Nec aliquet amet adipiscing facilisis eget duis ut maecenas integer. Sed fringilla ut sociis cursus enim sit. Maecenas sed sem tempus ut porttitor aliquet vel. Orci nec morbi sit nunc duis.`}
            />
        </PageForm>
    );
}