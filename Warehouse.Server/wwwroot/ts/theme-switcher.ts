enum themes {
    dark = "dark",
    light = "light"
}

const link:JQuery<HTMLLinkElement> = $("link#color-theme")

function changeTheme(theme: themes) {
    link.attr("href", `/css/${theme}.css`)
    localStorage.setItem("theme", theme)
}

function reloadTheme() {
    const theme = localStorage.getItem("theme") as themes
    if (theme) {
        changeTheme(theme)
    } else {
        changeTheme(themes.light)
    }
}

window.onload = reloadTheme

export {themes, changeTheme, reloadTheme}