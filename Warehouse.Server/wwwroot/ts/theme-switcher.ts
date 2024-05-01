enum themes {
    dark = "dark",
    light = "light"
}

const link: JQuery<HTMLLinkElement> = $("link#color-theme")

/**
 * Changes the theme of the application.
 *
 * @param {themes} theme - The theme to be applied.
 * @return {void}
 */
function changeTheme(theme: themes): void {
    link.attr("href", `/css/${theme}.css`)
    localStorage.setItem("theme", theme)
}

/**
 * Reloads the theme according to the value stored in localStorage.
 * If no theme is stored, the default theme (light) will be applied.
 * @return {void}
 */
function reloadTheme(): void {
    changeTheme(currentTheme())
}

/**
 * Retrieve the current theme from local storage.
 *
 * @returns {themes} The current theme. If not found in local storage, the default theme will be returned.
 */
function currentTheme(): themes {
    return localStorage.getItem("theme") as themes || themes.dark
}

window.onload = reloadTheme

export {themes, changeTheme, reloadTheme, currentTheme}