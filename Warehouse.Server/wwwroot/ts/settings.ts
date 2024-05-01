import {themes, changeTheme, currentTheme} from "./theme-switcher.js";

const themeSelector = $(".selector#theme");
const saveButton = $("#save-button");
const resetButton = $("#reset-button")

// Stores the temp variable
let tempTheme: themes = currentTheme();


resetButton.on("click", () => {
    window.location.reload();
})


themeSelector.trigger('change', {value: currentTheme()});
themeSelector.on("change", (e, data) => {
    if (data == null) return;
    tempTheme = data.value as themes
});


saveButton.on("click", () => {
    changeTheme(tempTheme);

    window.location.reload();
});