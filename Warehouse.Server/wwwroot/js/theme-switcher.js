const themes = {
    dark: "dark",
    light: "light"
}

const link = $("link#color-theme")

function changeTheme(theme) {
    link.attr("href", `/css/${theme}.css`)
    localStorage.setItem("theme", theme)
}

function reloadTheme() {
    const theme = localStorage.getItem("theme")
    if (theme) {
        changeTheme(theme)
    } else {
        changeTheme(themes.light)
    }
}

window.onload = reloadTheme
window.changeTheme = changeTheme;
window.reloadTheme = reloadTheme;
window.themes = themes;

export {themes, changeTheme, reloadTheme}