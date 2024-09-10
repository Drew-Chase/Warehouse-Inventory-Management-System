import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content:  [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme:    {
        extend: {
            backgroundImage: theme => ({
                'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
            }),
            colors:          {
                dark: {
                    from: '#031117',
                    to:   '#020A0D',
                },
            },
        },
    },
    variants: {
        extend: {
            backgroundImage: ['dark'],
        },
    },
    darkMode: "class",
    plugins:  [
        nextui({
            themes: {
                light: {
                    "colors": {
                        "white":      "#ffffff",
                        "black":      "#000000",
                        "background": {
                            DEFAULT:    "#ffffff",
                            foreground: "#000000",
                            "L-200":    "#ffffff",
                            "L-100":    "#ffffff",
                            "L000":     "#ffffff",
                            "L100":     "#eaeaea",
                            "L200":     "#e3e3e3",
                            "L300":     "#d3d3d3",
                            "L400":     "#c6c6c6"
                        },
                        "primary":    {
                            DEFAULT:    "#30f28c",
                            foreground: "#000000",
                            "L-200":    "#207946",
                            "L-100":    "#258d52",
                            "L000":     "#39db7d",
                            "L100":     "#3cf388",
                            "L200":     "#52f495"
                        },
                        "warning":    {
                            "L-200": "#ffcc00",
                            "L-100": "#ffc107",
                            "L000":  "#ffeb3b",
                            "L100":  "#fff176",
                            "L200":  "#fff590"
                        },
                        "info":       {
                            "L-200": "#17a2b8",
                            "L-100": "#1ea7d7",
                            "L000":  "#51c4d3",
                            "L100":  "#81d8e3",
                            "L200":  "#95e2ed"
                        },
                        "accent":     {
                            "L-200": "#536b0a",
                            "L-100": "#65820d",
                            "L000":  "#c7ee52",
                            "L100":  "#ceff3c",
                            "L200":  "#d5ff57"
                        },
                        "foreground": {
                            "L-200": "#434343",
                            "L-100": "#4f4f4f",
                            "L000":  "#000000",
                            "L100":  "#222222",
                            "L200":  "#5c5c5c"
                        }
                    },
                },
                dark:  {
                    "colors": {
                        "white":       "#ffffff",
                        "black":       "#000000",
                        "content1":    {DEFAULT: "#1a262d", foreground: "#ffffff"},
                        "default-100": {DEFAULT: "#141e22", foreground: "#ffffff"},
                        "background":  {
                            DEFAULT:    "#141e22",
                            foreground: "#ffffff",
                            "L-200":    "#070b0d",
                            "L-100":    "#0f171a",
                            "L000":     "#141e22",
                            "L100":     "#1a262d",
                            "L200":     "#202e36",
                            "L300":     "#031117",
                            "L400":     "#020A0D"
                        },
                        "primary":     {
                            DEFAULT:    "#30f28c",
                            foreground: "#141e22",
                            "L-300":    "#27423e",
                            "L-200":    "#207946",
                            "L-100":    "#258d52",
                            "L000":     "#39db7d",
                            "L100":     "#3cf388",
                            "L200":     "#52f495",
                        },
                        "warning":     {
                            "L-200": "#ff9105",
                            "L-100": "#ff9d1f",
                            "L000":  "#ffb454",
                            "L100":  "#f0c082",
                            "L200":  "#f3ca96"
                        },
                        "info":        {
                            "L-200": "#1a90d1",
                            "L-100": "#219fe4",
                            "L000":  "#4db2e9",
                            "L100":  "#81c9f1",
                            "L200":  "#95d2f3"
                        },
                        "accent":      {
                            "L-200": "#536b0a",
                            "L-100": "#65820d",
                            "L000":  "#c7ee52",
                            "L100":  "#ceff3c",
                            "L200":  "#d5ff57"
                        },
                        "foreground":  {
                            "L-200": "#afb6b6",
                            "L-100": "#bdc2c2",
                            "L000":  "#ffffff",
                            "L100":  "#ffffff",
                            "L200":  "#ffffff"
                        }
                    },
                },
            }
        })
    ]
}