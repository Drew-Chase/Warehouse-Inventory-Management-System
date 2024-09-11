import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import ReactDOM from "react-dom/client";
import $ from "jquery";
import {NextUIProvider} from "@nextui-org/react";

import "./assets/scss/index.scss";
import Dashboard from "./assets/pages/Dashboard.tsx";
import Navigation from "./assets/components/Navigation.tsx";
import {applyTheme, getCurrentTheme} from "./assets/ts/Theme.ts";
import Login from "./assets/pages/Login.tsx";
import Authentication from "./assets/ts/Authentication.ts";
import Purchases from "./assets/pages/Purchases.tsx";
import NewPurchaseOrder from "./assets/pages/AddPages/NewPurchaseOrder.tsx";
import Vendors from "./assets/pages/Vendors.tsx";
import NewVendor from "./assets/pages/AddPages/NewVendor.tsx";
import Inventory from "./assets/pages/Inventory.tsx";
import Settings from "./assets/pages/Settings.tsx";

export const debug_mode = true;

export const api_domain = "http://localhost:1420";

ReactDOM.createRoot($("#root")[0]!).render(
    <React.StrictMode>
        <BrowserRouter>
            <MainContentRenderer/>
        </BrowserRouter>
    </React.StrictMode>
);

export function MainContentRenderer()
{
    applyTheme(getCurrentTheme());
    const navigate = useNavigate();
    if (!debug_mode)
    {
        useEffect(() =>
        {
            Authentication.getInstance().login_with_cookies().then(res =>
            {
                if (res.token)
                {
                    console.log("Logged in with cookies", res);
                    if (!window.location.pathname.startsWith("/app/"))
                    {
                        navigate("/app/");
                    }
                } else
                {
                    console.log("No token found in cookies");
                    if (window.location.pathname.startsWith("/app/")) navigate("/");
                }
            });
        }, []);
    }
    return (
        <NextUIProvider navigate={navigate}>
            <Navigation/>
            <Routes>
                <Route>
                    <Route path="/" element={<Login/>}/>
                    {/*  Dashboards   */}
                    <Route path="/app/" element={<Dashboard/>}/>
                    <Route path="/app/me/dashboard" element={<Dashboard user={"me"}/>}/>
                    {/*  Purchases   */}
                    <Route path={"/app/purchases"} element={<Purchases/>}/>
                    <Route path={"/app/purchases/new"} element={<NewPurchaseOrder tab={"general"}/>}/>
                    <Route path={"/app/purchases/new/additional"} element={<NewPurchaseOrder tab={"additional"}/>}/>
                    <Route path={"/app/purchases/new/finalize"} element={<NewPurchaseOrder tab={"finalize"}/>}/>
                    {/*  Vendors   */}
                    <Route path={"/app/vendors"} element={<Vendors/>}/>
                    <Route path={"/app/vendors/new"} element={<NewVendor tab={"general"}/>}/>
                    <Route path={"/app/vendors/new/contact"} element={<NewVendor tab={"contact"}/>}/>
                    <Route path={"/app/vendors/new/additional"} element={<NewVendor tab={"additional"}/>}/>
                    <Route path={"/app/vendors/new/finalize"} element={<NewVendor tab={"finalize"}/>}/>
                    {/*  Inventory   */}
                    <Route path={"/app/inventory"} element={<Inventory/>}/>
                    {/*  Application Settings   */}
                    <Route path="/app/settings" element={<Settings tab={"general"}/>}/>
                    <Route path="/app/settings/networking" element={<Settings tab={"networking"}/>}/>
                    <Route path="/app/settings/authentication" element={<Settings tab={"authentication"}/>}/>
                    <Route path="/app/settings/database" element={<Settings tab={"database"}/>}/>
                    {/*  User Settings  */}
                    <Route path="/app/settings/profile" element={<Settings tab={"profile"}/>}/>

                </Route>
            </Routes>
        </NextUIProvider>
    );
}
