import {Button, Card, CardBody, CardHeader, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip} from "@nextui-org/react";
import {Line, LineChart, Tooltip as ChartTooltip, YAxis} from "recharts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faEye} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Footer from "../components/Footer.tsx";

export default function Dashboard()
{

    /**
     * Calculate the width of the chart based on the window width
     * This takes the 95% of the window width, then divides it by 2, then subtracts 48px for the gap between the two charts
     * 95% is the width of the main content container and the gap is 24px on each side of the chart.
     * The chart width is then set to 50% of the main content container width minus the gap between the two charts
     * @returns {number}
     */
    const calculateChartWidth = (): number => ((window.innerWidth * 0.95) * 0.5) - 48;
    const navigate = useNavigate();
    const [chartWidth, setChartWidth] = useState(calculateChartWidth);

    useEffect(() =>
    {
        const handleResize = () => setChartWidth(calculateChartWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>
            <div className={"flex flex-col my-8 gap-8 w-[95%] mx-auto"}>
                <div className={"flex flex-row gap-8 items-center justify-center flex-wrap"}>
                    <Card className={"w-[calc(50%_-_1rem)]"}>
                        <CardHeader>
                            <h5>Purchase Orders: <span>5,891</span></h5>
                        </CardHeader>
                        <CardBody>
                            <LineChart
                                width={chartWidth}
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
                    <Card className={"w-[calc(50%_-_1rem)]"}>
                        <CardHeader>
                            <h5>Revenue: <span>$5,891</span></h5>
                        </CardHeader>
                        <CardBody>
                            <LineChart
                                width={chartWidth}
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
                </div>
                <div className={"flex flex-row gap-8 items-start justify-center flex-wrap"}>
                    <Card className={"w-[calc(50%_-_1rem)]"}>
                        <CardHeader><h5>Latest Purchase Orders</h5></CardHeader>
                        <CardBody>
                            <Table
                                classNames={{
                                    wrapper: "bg-background-L000 rounded-2xl shadow-none",
                                    th: "bg-background-L100"
                                }}

                                bottomContent={
                                    <Pagination
                                        className={"mx-auto"}
                                        isCompact
                                        showControls
                                        showShadow
                                        total={100}
                                        page={0}
                                        onChange={(page) => console.log(page)}

                                        classNames={{
                                            item: "hover:!bg-background-L200 !rounded-medium",
                                            next: "hover:!bg-background-L200 !rounded-medium",
                                            prev: "hover:!bg-background-L200 !rounded-medium"
                                        }}
                                    />
                                }

                            >
                                <TableHeader>
                                    <TableColumn>PO#</TableColumn>
                                    <TableColumn>Revenue</TableColumn>
                                    <TableColumn>Date</TableColumn>
                                    <TableColumn>Actions</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    {Array.from({length: 10}, (_, i) => (
                                        <TableRow key={i}>
                                            <TableCell>{i}</TableCell>
                                            <TableCell>{Math.floor(Math.random() * 10_000)}</TableCell>
                                            <TableCell>{new Date().toLocaleDateString()}</TableCell>
                                            <TableCell>
                                                <Tooltip content={"View Purchase Order"}>
                                                    <Button className={"w-8 min-w-8 opacity-50 hover:opacity-100 transition-[color,opacity]"} size={"sm"} variant={"light"} onClick={() => navigate(`/app/purchases?search=${i}`)}><FontAwesomeIcon icon={faEye}/></Button>
                                                </Tooltip>
                                                <Tooltip content={"Edit Purchase Order"}>
                                                    <Button className={"w-8 min-w-8 opacity-50 hover:opacity-100 transition-[color,opacity]"} size={"sm"} variant={"light"} onClick={() => navigate(`/app/purchases/edit/${i}`)}><FontAwesomeIcon icon={faEdit}/></Button>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>

                    <Card className={"w-[calc(50%_-_1rem)]"}>
                        <CardHeader><h5>Latest Inventory Updates</h5></CardHeader>
                        <CardBody>
                            <Table
                                classNames={{
                                    wrapper: "bg-background-L000 rounded-2xl shadow-none",
                                    th: "bg-background-L100"
                                }}


                                bottomContent={
                                    <Pagination
                                        className={"mx-auto"}
                                        isCompact
                                        showControls
                                        showShadow
                                        total={100}
                                        page={0}
                                        onChange={(page) => console.log(page)}

                                        classNames={{
                                            item: "hover:!bg-background-L200 !rounded-medium",
                                            next: "hover:!bg-background-L200 !rounded-medium",
                                            prev: "hover:!bg-background-L200 !rounded-medium"
                                        }}
                                    />
                                }

                            >
                                <TableHeader>
                                    <TableColumn>Name</TableColumn>
                                    <TableColumn>PO#</TableColumn>
                                    <TableColumn>Quantity</TableColumn>
                                    <TableColumn>Date</TableColumn>
                                    <TableColumn>Actions</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    {Array.from({length: 10}, (_, i) => (
                                        <TableRow key={i}>
                                            <TableCell>Apples</TableCell>
                                            <TableCell>{i}</TableCell>
                                            <TableCell>{Math.floor(Math.random() * 10_000)}</TableCell>
                                            <TableCell>{new Date().toLocaleDateString()}</TableCell>
                                            <TableCell>
                                                <Tooltip content={"View Purchase Order"}>
                                                    <Button className={"w-8 min-w-8 opacity-50 hover:opacity-100 transition-[color,opacity]"} size={"sm"} variant={"light"} onClick={() => navigate(`/app/purchases?search=${i}`)}><FontAwesomeIcon icon={faEye}/></Button>
                                                </Tooltip>
                                                <Tooltip content={"Edit Purchase Order"}>
                                                    <Button className={"w-8 min-w-8 opacity-50 hover:opacity-100 transition-[color,opacity]"} size={"sm"} variant={"light"} onClick={() => navigate(`/app/purchases/edit/${i}`)}><FontAwesomeIcon icon={faEdit}/></Button>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>

            </div>
            <Footer/>
        </>
    );
}
