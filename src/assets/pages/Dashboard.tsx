import {Card, CardBody, CardHeader} from "@nextui-org/react";
import {Line, LineChart, Tooltip as ChartTooltip, YAxis} from "recharts";

export default function Dashboard()
{
    return (
        <div className={"flex flex-col my-8"}>
            <div className={"flex flex-row gap-4 items-center justify-center"}>
                <Card>
                    <CardHeader>
                        <h5>Purchase Orders</h5>
                    </CardHeader>
                    <CardBody>
                        <LineChart
                            width={600}
                            height={260}
                            data={Array.from({length: 30}, (_, i) => ({name: i, po: Math.floor(Math.random() * 10)}))}
                            className={"bg-background-L000 p-2 rounded-2xl"}
                        >
                            <Line type="monotone" dataKey="po" stroke="hsl(var(--nextui-primary-L000)" strokeWidth={4}/>
                            <YAxis width={20}/>
                            <ChartTooltip contentStyle={{
                                backgroundColor: "hsl(var(--nextui-background-L200)",
                                border: "none",
                                borderRadius: "5px",
                                boxShadow: "0 5px 10px 0 rgba(0,0,0,.5)"
                            }}/>
                        </LineChart>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <h5>Revenue</h5>
                    </CardHeader>
                    <CardBody>
                        <LineChart
                            width={600}
                            height={260}
                            data={Array.from({length: 30}, (_) => ({amount: Math.floor(Math.random() * 10_000)}))}
                            className={"bg-background-L000 p-2 rounded-2xl"}
                        >
                            <Line type="monotone" dataKey="amount" stroke="hsl(var(--nextui-primary-L000)" strokeWidth={4}/>
                            <YAxis width={50}/>
                            <ChartTooltip
                                formatter={value =>
                                {
                                    value = value as number;
                                    return Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(value);
                                }}
                                contentStyle={{
                                    backgroundColor: "hsl(var(--nextui-background-L200)",
                                    border: "none",
                                    borderRadius: "5px",
                                    boxShadow: "0 5px 10px 0 rgba(0,0,0,.5)"
                                }}/>
                        </LineChart>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <h5>Something Else</h5>
                    </CardHeader>
                    <CardBody>
                        <LineChart
                            width={600}
                            height={260}
                            data={Array.from({length: 30}, (_) => ({amount: Math.floor(Math.random() * 10)}))}
                            className={"bg-background-L000 p-2 rounded-2xl"}
                        >
                            <Line type="monotone" dataKey="amount" stroke="hsl(var(--nextui-primary-L000)" strokeWidth={4}/>
                            <YAxis width={50}/>
                            <ChartTooltip
                                formatter={value =>
                                {
                                    value = value as number;
                                    return Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(value);
                                }}
                                contentStyle={{
                                    backgroundColor: "hsl(var(--nextui-background-L200)",
                                    border: "none",
                                    borderRadius: "5px",
                                    boxShadow: "0 5px 10px 0 rgba(0,0,0,.5)"
                                }}/>
                        </LineChart>
                    </CardBody>
                </Card>
            </div>

        </div>
    );
}