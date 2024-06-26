﻿import {buildDateString} from "./calendar.js";

let activeFilters: { [key: string]: any } = {};
const resetButton = $("#reset-filters-button");
resetButton.on("click", e => {
    if (Object.keys(activeFilters).length == 0) return;
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
        } else {
            target.val("");
        }
        target.removeAttr("modified");
    });
    $(".order-status-filter-item.active")
        .removeClass("active").parent().removeAttr("modified");
    $(".order-status-filter-item")[0].classList.add("active");
    activeFilters = {};
    updateActiveFilters()
});

$(".calendar-input").on("change", e => {
    const target = $(e.target);
    const name = target.attr('name');
    const value = target.attr('selected-date');
    if (name == null || value == null) return;
    activeFilters[name] = value;

    updateActiveFilters()
});
$("input").on("change", e => {
    const target = $(e.target);
    const name = target.attr('name');
    const value = target.val();
    if (name == null || value == null) return;

    if (target.attr("type") == "checkbox") {
        const isChecked = target.prop("checked");
        if (isChecked) {
            if (activeFilters[name] == null)
                activeFilters[name] = value;
            else
                activeFilters[name] += `,${value}`;
        } else {
            if (activeFilters[name] != null) {
                activeFilters[name] = activeFilters[name].split(',').filter((x: any) => x != value).join(',');
                if (activeFilters[name].length == 0)
                    delete activeFilters[name];
            }
        }
        updateActiveFilters()
        return;
    }
    activeFilters[name] = value;

    updateActiveFilters()
});

$(".order-status-filter-item").on("click", e => {
    const target = $(e.currentTarget);
    const parent = target.parent();
    parent.find(".order-status-filter-item.active").removeClass("active");
    target.addClass("active");
    if (parent.attr('modified') == null) {
        parent.attr('modified', '');
    }
    activeFilters["OrderStatus"] = target.attr("status");
    updateActiveFilters();
});

function loadFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
        const target = $(`[name="${key}"]`);
        if (target.attr("type") == "checkbox") {
            const values = value.split(',');
            values.forEach((v: any) => {
                target.filter(`[value="${v}"]`).prop("checked", true);
            });
        } else {
            target.val(value);
        }
        if (target.hasClass("calendar-input")) {
            target.attr("selected-date", value);
            target.find(".value").html(buildDateString(new Date(Number.parseInt(value))));
        }
        if (target.hasClass("order-status-filter-item")) {
            target.addClass("active");
            target.parent().attr("modified", "");
        }
        activeFilters[key] = value;
    });
    updateActiveFilters();

}

function updateActiveFilters() {
    if (Object.keys(activeFilters).length == 0) {
        resetButton.find(".value").html(``);
        resetButton.addClass("disabled");
        window.history.replaceState("", "", window.location.pathname);
    } else {
        resetButton.find(".value").html(`${Object.keys(activeFilters).length}`);
        resetButton.removeClass("disabled");
        window.history.replaceState("", "", `?${$.param(activeFilters)}`);
    }
}

window.onload = () => loadFilters()