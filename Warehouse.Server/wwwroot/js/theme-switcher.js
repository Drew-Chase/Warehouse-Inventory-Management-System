var themes;
(function (themes) {
    themes["dark"] = "dark";
    themes["light"] = "light";
})(themes || (themes = {}));
const link = $("link#color-theme");
function changeTheme(theme) {
    link.attr("href", `/css/${theme}.css`);
    localStorage.setItem("theme", theme);
}
function reloadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme) {
        changeTheme(theme);
    }
    else {
        changeTheme(themes.light);
    }
}
window.onload = reloadTheme;
export { themes, changeTheme, reloadTheme };
//# sourceMappingURL=theme-switcher.js.map