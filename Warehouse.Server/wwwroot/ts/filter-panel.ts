﻿let activeFilters = 0;
const resetButton = $("#reset-filters-button");
resetButton.on("click", e => {
    if (activeFilters == 0) return;
    $(".calendar-input").each((i, el) => {
        const target = $(el);
        target.removeAttr("selected-date")
        target.removeAttr("modified");
        target.find(".value").html("")
    });
    $("input").each((i, el) => {
        const target = $(el);
        const type = target.attr("type");
        if (type == "checkbox") {
            target.prop("checked", false);
        }

        target.val("");
        target.removeAttr("modified");
    });
    $(".order-status-filter-item.active")
        .removeClass("active").parent().removeAttr("modified");
    $(".order-status-filter-item")[0].classList.add("active");
    activeFilters = 0;
    updateActiveFilters()
});

$(".calendar-input").on("change", e => {
    if ($(e.target).attr('modified') != null) return;
    $(e.target).attr("modified", "");
    activeFilters++;
    updateActiveFilters()
});
$("input").on("change", e => {
    if ($(e.target).attr('modified') != null) return;
    $(e.target).attr("modified", "");
    activeFilters++;

    updateActiveFilters()
});

$(".order-status-filter-item").on("click", e => {
    const target = $(e.currentTarget);
    const parent = target.parent();
    parent.find(".order-status-filter-item.active").removeClass("active");
    target.addClass("active");
    if (parent.attr('modified') == null) {
        parent.attr('modified', '');
        activeFilters++;
        updateActiveFilters();
    }
});

function updateActiveFilters() {

    if (activeFilters == 0) {
        resetButton.find(".value").html(``);
        resetButton.addClass("disabled");
    } else {
        resetButton.find(".value").html(`${activeFilters.toString()}`);
        resetButton.removeClass("disabled");
    }

}