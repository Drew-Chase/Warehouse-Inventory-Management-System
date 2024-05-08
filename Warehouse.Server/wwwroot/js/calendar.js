/**
 * Enum representing the months of the year.
 * @enum {number}
 */
var months;
(function (months) {
    months[months["January"] = 1] = "January";
    months[months["February"] = 2] = "February";
    months[months["March"] = 3] = "March";
    months[months["April"] = 4] = "April";
    months[months["May"] = 5] = "May";
    months[months["June"] = 6] = "June";
    months[months["July"] = 7] = "July";
    months[months["August"] = 8] = "August";
    months[months["September"] = 9] = "September";
    months[months["October"] = 10] = "October";
    months[months["November"] = 11] = "November";
    months[months["December"] = 12] = "December";
})(months || (months = {}));
/**
 * Enum representing the days of the week.
 * @enum {number}
 */
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
$(".calendar-input").on('click', e => {
    var _a, _b, _c, _d, _e, _f;
    const input = $(e.currentTarget);
    const x = (_b = (_a = input.offset()) === null || _a === void 0 ? void 0 : _a.left) !== null && _b !== void 0 ? _b : e.clientX;
    let y = ((_d = (_c = input.offset()) === null || _c === void 0 ? void 0 : _c.top) !== null && _d !== void 0 ? _d : -1) + ((_e = input.height()) !== null && _e !== void 0 ? _e : -1);
    if (y <= 0)
        y = e.clientY;
    else
        y += 16; // Add some padding to the top of the calendar
    const calendar = openCalendar(x, y);
    const selectedDateAttribute = Number.parseInt((_f = input.attr('selected-date')) !== null && _f !== void 0 ? _f : '-1');
    const selectedDate = selectedDateAttribute && selectedDateAttribute > 0 ? new Date(selectedDateAttribute) : new Date();
    selectMonthYear(calendar, selectedDate.getMonth() + 1, selectedDate.getFullYear(), selectedDate.getDate());
    calendar.on('change', (_, date) => {
        input.attr('selected-date', date.getTime());
        input.find('.value').html(buildDateString(date));
        input.trigger('change', date);
    });
});
function buildDateString(date) {
    var _a, _b;
    const dayOfWeekString = (_a = days[date.getDay()]) !== null && _a !== void 0 ? _a : "Unknown";
    const monthString = (_b = months[date.getMonth() + 1]) !== null && _b !== void 0 ? _b : "Unknown";
    const dayModifier = date.getDate() === 1 ? "st" : date.getDate() === 2 ? "nd" : date.getDate() === 3 ? "rd" : "th";
    const dayString = `${date.getDate()}${dayModifier}`;
    return `${dayOfWeekString}, ${monthString} ${dayString}, ${date.getFullYear()}`;
}
/**
 * Opens a calendar at the specified coordinates.
 *
 * @param {number} x - The x-coordinate to position the calendar.
 * @param {number} y - The y-coordinate to position the calendar.
 * @returns {JQuery<HTMLElement>} The jQuery element representing the calendar.
 */
function openCalendar(x, y) {
    const calendar = $(`
        <div class="calendar" tabindex="-1">
            <div class="calendar-month-selector row">
                <button class="prev-button">
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(90deg)">
                        <path opacity="0.5" d="M6.23417 7.17236C5.83686 7.61446 5.14392 7.61447 4.74661 7.17236L0.249658 2.16842C-0.328812 1.52473 0.128016 0.5 0.993442 0.5L9.98734 0.5C10.8528 0.5 11.3096 1.52473 10.7311 2.16842L6.23417 7.17236Z" fill="#D9D9D9"/>
                    </svg>
                </button>
                <div class="current fill">
                    <p class="4 current-month">MONTH</p>
                    <p class="4 current-year">YEAR</p>
                </div>
                <button class="next-button">
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(-90deg)">
                        <path opacity="0.5" d="M6.23417 7.17236C5.83686 7.61446 5.14392 7.61447 4.74661 7.17236L0.249658 2.16842C-0.328812 1.52473 0.128016 0.5 0.993442 0.5L9.98734 0.5C10.8528 0.5 11.3096 1.52473 10.7311 2.16842L6.23417 7.17236Z" fill="#D9D9D9"/>
                    </svg>
                </button>
            </div>
            <div class="calendar-month-grid grid">
                <div class="calendar-month" month="1">Jan</div>
                <div class="calendar-month" month="2">Feb</div>
                <div class="calendar-month" month="3">Mar</div>
                <div class="calendar-month" month="4">Apr</div>
                <div class="calendar-month" month="5">May</div>
                <div class="calendar-month" month="6">Jun</div>
                <div class="calendar-month" month="7">Jul</div>
                <div class="calendar-month" month="8">Aug</div>
                <div class="calendar-month" month="9">Sep</div>
                <div class="calendar-month" month="10">Oct</div>
                <div class="calendar-month" month="11">Nov</div>
                <div class="calendar-month" month="12">Dec</div>
            </div>
            <div class="calendar-year-grid">
            </div>
            <div class="calendar-header row fill center horizontal">
                <div class="calendar-header-item fill">Sun</div>
                <div class="calendar-header-item fill">Mon</div>
                <div class="calendar-header-item fill">Tue</div>
                <div class="calendar-header-item fill">Wed</div>
                <div class="calendar-header-item fill">Thu</div>
                <div class="calendar-header-item fill">Fri</div>
                <div class="calendar-header-item fill">Sat</div>
            </div>
            <div class="calendar-body">
            </div>
        </div>
    `);
    calendar.css({ left: x, top: y, position: 'absolute' });
    selectMonthYear(calendar, new Date().getMonth() + 1, new Date().getFullYear());
    calendar.on('blur', e => {
        const newTarget = e.relatedTarget;
        if (newTarget == null) {
            calendar.addClass('hide');
            setTimeout(() => {
                calendar.remove();
            }, 300);
            return;
        }
        const isChildOfCalendar = $(newTarget).closest('.calendar').length > 0;
        if (!isChildOfCalendar) {
            calendar.addClass('hide');
            setTimeout(() => {
                calendar.remove();
            }, 300);
            return;
        }
        setTimeout(() => {
            calendar.trigger("focus");
        }, 0);
    });
    calendar.find('.prev-button').on('click', () => {
        var _a;
        const currentMonth = calendar.find('.calendar-month-selector .current-month').text();
        const currentYear = new Date().getFullYear();
        const month = Number.parseInt((_a = Object.keys(months).find(key => months[Number.parseInt(key)] === currentMonth)) !== null && _a !== void 0 ? _a : "1");
        if (month === 1) {
            selectMonthYear(calendar, 12, currentYear - 1);
            return;
        }
        selectMonthYear(calendar, month - 1, currentYear);
    });
    calendar.find('.next-button').on('click', () => {
        var _a;
        const currentMonth = calendar.find('.calendar-month-selector .current-month').text();
        const currentYear = new Date().getFullYear();
        const month = Number.parseInt((_a = Object.keys(months).find(key => months[Number.parseInt(key)] === currentMonth)) !== null && _a !== void 0 ? _a : "1");
        if (month === 12) {
            selectMonthYear(calendar, 1, currentYear + 1);
            return;
        }
        selectMonthYear(calendar, month + 1, currentYear);
    });
    calendar.find('.current-month').on('click', () => {
        toggleMonthSelector(calendar);
    });
    calendar.find('.current-year').on('click', () => {
        toggleYearSelector(calendar);
    });
    $('body').append(calendar);
    calendar.trigger("focus");
    calendar.find('.calendar-month').on('click', e => {
        var _a;
        const month = $(e.target).attr('month');
        if (month == null)
            return;
        selectMonthYear(calendar, Number.parseInt(month), Number.parseInt((_a = calendar.attr("year")) !== null && _a !== void 0 ? _a : new Date().getFullYear().toString()));
        hideMonthSelector(calendar);
    });
    calendar.find('.calendar-year').on('click', e => {
        var _a;
        const year = $(e.target).attr('year');
        if (year == null)
            return;
        selectMonthYear(calendar, Number.parseInt((_a = calendar.attr("month")) !== null && _a !== void 0 ? _a : "1"), Number.parseInt(year));
        hideYearSelector(calendar);
    });
    return calendar;
}
/**
 * Populates the calendar month with the specified month and year.
 *
 * @param {JQuery<HTMLElement>} calendar - The calendar element.
 * @param {months} month - The month to populate (1-12).
 * @param {number} year - The year to populate.
 * @param {number} selectedDay - The day to select.
 *
 * @return {void}
 */
function selectMonthYear(calendar, month, year, selectedDay = -1) {
    const LastCentury = new Date().getFullYear() - 100;
    const NextCentury = new Date().getFullYear() + 100;
    if (year < LastCentury || year > NextCentury) {
        console.error(`Year must be between ${LastCentury} and ${NextCentury}. Provided year: ${year}`);
        year = new Date().getFullYear();
    }
    calendar.attr('year', year.toString());
    calendar.attr('month', month.toString());
    calendar.find('.calendar-month-grid .calendar-month.selected').removeClass('selected');
    calendar.find(`.calendar-month-grid .calendar-month[month=${month}]`).addClass('selected');
    calendar.find(`.calendar-month-grid .calendar-month[month=${new Date().getMonth() + 1}]`).addClass('current-month');
    const monthName = months[month];
    calendar.find('.calendar-month-selector .current-month').text(monthName);
    calendar.find('.calendar-month-selector .current-year').text(year);
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();
    const body = calendar.find('.calendar-body');
    body.empty();
    let day = 1;
    for (let i = 0; i < 6; i++) {
        const row = $('<div class="calendar-row row fill"></div>');
        for (let j = 0; j < 7; j++) {
            const isWeekend = j === 0 || j === 6;
            const isToday = day === new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear();
            let dayItem = $('<div class="calendar-day"></div>');
            if ((i === 0 && j < firstDay) || (day > daysInMonth)) {
                // Empty day
                dayItem.addClass('empty').addClass("disabled");
            }
            else {
                dayItem.text(day);
                if (isWeekend) {
                    dayItem.addClass('weekend');
                }
                if (isToday) {
                    dayItem.addClass('current-day');
                }
                if (day === selectedDay) {
                    dayItem.addClass('selected-day');
                }
                let currentDate = new Date();
                currentDate.setFullYear(year, month - 1, day);
                dayItem.attr('date', currentDate.getTime().toString());
                $(dayItem).on('click', e => {
                    var _a;
                    const dateString = Number.parseInt((_a = $(e.target).attr('date')) !== null && _a !== void 0 ? _a : '0');
                    calendar.attr("selected-date", dateString);
                    calendar.attr("day", day.toString());
                    calendar.trigger('change', new Date(dateString));
                    calendar.find('.selected-day').removeClass('selected-day');
                    dayItem.addClass('selected-day');
                    calendar.trigger('blur');
                });
                day++;
            }
            row.append(dayItem);
        }
        body.append(row);
    }
}
/**
 * Displays the month selector in the calendar.
 *
 * @param {JQuery<HTMLElement>} calendar - The calendar element.
 *
 * @return {void}
 */
function showMonthSelector(calendar) {
    hideYearSelector(calendar);
    const monthSelector = calendar.find('.calendar-month-grid');
    monthSelector.addClass('show');
}
/**
 * Hides the month selector in the calendar.
 *
 * @param {JQuery<HTMLElement>} calendar - The calendar element to hide the month selector for.
 *
 * @return {void}
 */
function hideMonthSelector(calendar) {
    const monthSelector = calendar.find('.calendar-month-grid');
    monthSelector.removeClass('show');
}
/**
 * Toggles the visibility of the month selector in the calendar.
 *
 * @param {JQuery<HTMLElement>} calendar - The calendar element.
 * @return {void}
 */
function toggleMonthSelector(calendar) {
    if (calendar.find('.calendar-month-grid').hasClass('show')) {
        hideMonthSelector(calendar);
    }
    else {
        showMonthSelector(calendar);
    }
}
/**
 * Displays the year selector for the calendar.
 *
 * @param {JQuery<HTMLElement>} calendar - The jQuery object representing the calendar.
 * @return {void}
 */
function showYearSelector(calendar) {
    hideMonthSelector(calendar);
    const yearSelector = calendar.find('.calendar-year-grid');
    yearSelector.addClass('show');
    yearSelector.empty();
    const selectedYear = Number.parseInt(calendar.find('.current-year').text());
    for (let i = selectedYear - 12; i <= selectedYear + 11; i++) {
        const item = $(`<div class="calendar-year" year="${i}">${i}</div>`);
        if (i === selectedYear)
            item.addClass('selected');
        if (i === new Date().getFullYear())
            item.addClass('current-year');
        item.on('click', e => {
            var _a;
            const year = $(e.target).attr('year');
            if (year == null)
                return;
            selectMonthYear(calendar, Number.parseInt((_a = calendar.attr('month')) !== null && _a !== void 0 ? _a : '1'), Number.parseInt(year));
            hideYearSelector(calendar);
        });
        yearSelector.append(item);
    }
}
/**
 * Hides the year selector in the given calendar.
 *
 * @param {JQuery<HTMLElement>} calendar - The calendar element to hide the year selector in.
 * @return {void}
 */
function hideYearSelector(calendar) {
    const yearSelector = calendar.find('.calendar-year-grid');
    yearSelector.removeClass('show');
}
/**
 * Toggles the visibility of the year selector in the calendar.
 *
 * @param {JQuery<HTMLElement>} calendar - The jQuery object representing the calendar element.
 * @return {void}
 */
function toggleYearSelector(calendar) {
    if (calendar.find('.calendar-year-grid').hasClass('show')) {
        hideYearSelector(calendar);
    }
    else {
        showYearSelector(calendar);
    }
}
export { openCalendar, selectMonthYear, buildDateString };
//# sourceMappingURL=calendar.js.map