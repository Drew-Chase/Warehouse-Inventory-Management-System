var themes;
(function (themes) {
    themes["dark"] = "dark";
    themes["light"] = "light";
})(themes || (themes = {}));
const link = $("link#color-theme");
/**
 * Changes the theme of the application.
 *
 * @param {themes} theme - The theme to be applied.
 * @return {void}
 */
function changeTheme(theme) {
    link.attr("href", `/css/${theme}.css`);
    localStorage.setItem("theme", theme);
}
/**
 * Reloads the theme according to the value stored in localStorage.
 * If no theme is stored, the default theme (light) will be applied.
 * @return {void}
 */
function reloadTheme() {
    changeTheme(currentTheme());
}
/**
 * Retrieve the current theme from local storage.
 *
 * @returns {themes} The current theme. If not found in local storage, the default theme will be returned.
 */
function currentTheme() {
    return localStorage.getItem("theme") || themes.dark;
}
window.onload = reloadTheme;
export { themes, changeTheme, reloadTheme, currentTheme };
//# sourceMappingURL=theme-switcher.js.map