import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content:  [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme:    {
        extend: {},
    },
    darkMode: "class",
    plugins:  [
        nextui({
            themes: {
                light: {
                    colors: {
                        primary:    {
                            DEFAULT:    "#30f28c",
                            foreground: "#fff",
                        },
                        secondary:  "#141e22",
                        background: "#e3e3ea",

                    }
                },
                dark:  {
                    "colors": {
                        "white":      "#ffffff",
                        "black":      "#000000",
                        "background": {
                            "L-200": "#070b0d",
                            "L-100": "#0f171a",
                            "L000":  "#141e22",
                            "L100":  "#1a262d",
                            "L200":  "#202e36"
                        },
                        "primary":    {
                            "L-200": "#207946",
                            "L-100": "#258d52",
                            "L000":  "#39db7d",
                            "L100":  "#3cf388",
                            "L200":  "#52f495"
                        },
                        "warning":    {
                            "L-200": "#ff9105",
                            "L-100": "#ff9d1f",
                            "L000":  "#ffb454",
                            "L100":  "#f0c082",
                            "L200":  "#f3ca96"
                        },
                        "info":       {
                            "L-200": "#1a90d1",
                            "L-100": "#219fe4",
                            "L000":  "#4db2e9",
                            "L100":  "#81c9f1",
                            "L200":  "#95d2f3"
                        },
                        "accent":     {
                            "L-200": "#536b0a",
                            "L-100": "#65820d",
                            "L000":  "#c7ee52",
                            "L100":  "#ceff3c",
                            "L200":  "#d5ff57"
                        },
                        "foreground": {
                            "L-200": "#afb6b6",
                            "L-100": "#bdc2c2",
                            "L000":  "#ffffff",
                            "L100":  "#ffffff",
                            "L200":  "#ffffff"
                        }
                    }
                },
            }
        })
    ]
}