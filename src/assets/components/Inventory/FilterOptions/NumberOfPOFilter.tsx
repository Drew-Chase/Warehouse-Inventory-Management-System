import {Slider} from "@nextui-org/react";

export default function NumberOfPOFilter()
{
    return (
        <div className={"p-4 bg-background-L-100 rounded-lg w-full"}>
            <Slider
                label={"Purchase Orders"}
                minValue={0}
                maxValue={100_000}
                step={1}
                defaultValue={[0, 100_000]}
            />
        </div>
    );
}