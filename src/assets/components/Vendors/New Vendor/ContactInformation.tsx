import PageForm from "../../PageForm.tsx";
import {Autocomplete, AutocompleteItem, Button, Input, Tooltip} from "@nextui-org/react";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";



export default function ContactInformation()
{
    const [numberOfContacts, setNumberOfContacts] = useState(0);
    return (

        <PageForm title={"Add New Vendor"} subtitle={"Contact Information"}>
            <h5 className={"font-bold"}>Primary Contact Personal</h5>
            <PersonalContactForm/>
            {Array.from({length: numberOfContacts}, (_, i) => (
                <>
                    <div className={"flex flex-row items-center"}>
                        <h5 className={"text-xl font-bold mr-auto"}>Additional Contact Personal #{i + 1}</h5>
                        <Tooltip color={"danger"} content={"Remove contact personal"}>
                            <Button variant={"light"} color={"danger"} onClick={() => setNumberOfContacts(prev => prev - 1)}><FontAwesomeIcon icon={faTrash}/></Button>
                        </Tooltip>
                    </div>
                    <PersonalContactForm/>
                </>
            ))}
            <Button className={"min-h-[50px]"} onClick={() => setNumberOfContacts(prev => prev + 1)} color={"primary"} variant={"ghost"}>Add another Contact</Button>
            <h5 className={"font-bold"}>Location</h5>
            <Autocomplete
                label={"Country"}
                placeholder={"Select the country"}
                description={"The country of the vendor/company"}
            >
                {Array.from({length: 10}, (_, i) => (
                    <AutocompleteItem key={i} value={`Country ${i}`}>Country {i}</AutocompleteItem>
                ))}
            </Autocomplete>
            <Input
                label={"Address"}
                placeholder={"Enter the address"}
                description={"The address of the vendor/company"}
            />
            <div className={"flex flex-row gap-4"}>
                <Input
                    label={"City"}
                    placeholder={"Enter the city"}
                    description={"The city of the vendor/company"}
                />
                <Input
                    label={"State"}
                    placeholder={"Enter the state"}
                    description={"The state of the vendor/company"}
                />
                <Input
                    label={"Zip Code"}
                    placeholder={"Enter the zip code"}
                    description={"The zip code of the vendor/company"}
                />
            </div>

        </PageForm>
    );
}

function PersonalContactForm()
{
    return (
        <>
            <div className={"flex flex-row gap-4"}>
                <Input
                    label={"First Name"}
                    placeholder={"Enter the first name"}
                    description={"The first name of the primary contact for the vendor/company"}
                    isRequired
                />
                <Input
                    label={"Last Name"}
                    placeholder={"Enter the last name"}
                    description={"The last name of the primary contact for the vendor/company"}
                    isRequired
                />
            </div>
            <Input
                label={"Email Address"}
                placeholder={"Enter the email address"}
                description={"The email address of the primary contact for the vendor/company"}
                type={"email"}
            />
            <div className={"flex flex-row gap-4"}>
                <Input
                    label={"Phone Number"}
                    placeholder={"Enter the phone number"}
                    description={"The phone number of the primary contact for the vendor/company"}
                    type={"tel"}
                    className={"w-full"}
                />
                <Input
                    label={"Extension"}
                    placeholder={"Enter the extension"}
                    description={"The extension of the primary contact for the vendor/company"}
                    type={"number"}
                    className={"min-w-[300px] w-[300px]"}
                />
            </div>

            <Input
                label={"Job Title"}
                placeholder={"Enter the job title"}
                description={"The job title of the primary contact for the vendor/company"}
            />
        </>
    );
}