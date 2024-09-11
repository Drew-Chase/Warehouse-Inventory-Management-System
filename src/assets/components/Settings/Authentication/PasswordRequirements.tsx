import {Autocomplete, AutocompleteItem, Checkbox, CheckboxGroup} from "@nextui-org/react";
import {useState} from "react";

export default function PasswordRequirements()
{
    const [passwordRequirements, setPasswordRequirements] = useState<string[]>(["uppercase", "lowercase", "number", "special", "length"]);
    return (
        <>
            <CheckboxGroup
            label={"Password Requirements"}
            defaultValue={passwordRequirements}
            onChange={(values) => setPasswordRequirements(values)}
        >
            <Checkbox value={"uppercase"}>Require uppercase letters</Checkbox>
            <Checkbox value={"lowercase"}>Require lowercase letters</Checkbox>
            <Checkbox value={"number"}>Require numbers</Checkbox>
            <Checkbox value={"special"}>Require special characters</Checkbox>
            <Checkbox value={"length"}>Require a minimum password length</Checkbox>
        </CheckboxGroup>
            {passwordRequirements.includes("length") && (
                <Autocomplete
                    label={"Minimum Password Length"}
                    placeholder={"Please select the minimum password length."}

                    description={"The minimum number of characters required for a password."}
                    allowsCustomValue
                >
                    <AutocompleteItem key={"8"} value={8}>8</AutocompleteItem>
                    <AutocompleteItem key={"10"} value={10}>10</AutocompleteItem>
                    <AutocompleteItem key={"14"} value={14}>14</AutocompleteItem>
                    <AutocompleteItem key={"16"} value={16}>16</AutocompleteItem>
                    <AutocompleteItem key={"18"} value={18}>18</AutocompleteItem>
                    <AutocompleteItem key={"21"} value={21}>21</AutocompleteItem>
                    <AutocompleteItem key={"24"} value={24}>24</AutocompleteItem>
                </Autocomplete>
            )}
        </>
    );
}