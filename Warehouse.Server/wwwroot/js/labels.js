// Create a new <div> with the class "label"
const label = $(`<div class="global-label"></div>`);
loadLabels();
let mouseX = 0;
let mouseY = 0;
let currentElement = null;
function init() {
    // When the document is loaded, remove the "title" attribute from all elements and store the value in a "data-title" attribute
    $(document).off("load");
    $(document).on("load", loadLabels);
    // When the mouse is moved, check if the element being hovered over has a "title" attribute.
    $(document).off("mousemove");
    $(document).on("mousemove", (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
        const hoverElement = $(e.target);
        if (hoverElement.attr('data-title')) {
            show(hoverElement);
        }
        else {
            hide();
        }
    });
    if ($('.global-label').length === 0) {
        // Append the create "label" <div> to the <body> of the document
        $('body').append(label);
    }
}
/**
 * Removes the "title" attribute from all elements and stores the value in a "data-title" attribute
 * to prevent the default browser tooltip from showing.
 *
 * @return {void} Returns nothing.
 */
function loadLabels() {
    if ($('.global-label').length === 0)
        init();
    // Remove the "title" attribute from all elements and store the value in a "data-title" attribute
    // This is done to prevent the default browser tooltip from showing.
    $(`[title]`).each((i, element) => {
        var _a;
        const el = $(element);
        el.attr('data-title', (_a = el.attr('title')) !== null && _a !== void 0 ? _a : "");
        el.removeAttr('title');
    });
}
/**
 * Update and display a label with the "title" attribute of the given element.
 *
 * @param {JQuery<Node>} element - The element to be shown with its "title" attribute.
 */
function show(element) {
    var _a, _b, _c, _d, _e;
    if (currentElement != null && currentElement[0] == element[0])
        return;
    currentElement = element;
    // Get the "title" attribute of the element which is moused over.
    const title = element.attr('data-title');
    if (title == null)
        return;
    // Set the text of the "label" to the "title" of the element
    label.html(title);
    // Calculate the initial x and y coordinates for the "label",
    // the location is calculated to be just below the element.
    if (element.offset() == null || element.width() == null || label.width() == null || element.height() == null)
        return;
    const offset = (_a = element.offset()) !== null && _a !== void 0 ? _a : { top: 0, left: 0 };
    const width = (_b = element.width()) !== null && _b !== void 0 ? _b : 0;
    const height = (_c = element.outerHeight(true)) !== null && _c !== void 0 ? _c : 0;
    const labelWidth = ((_d = label.width()) !== null && _d !== void 0 ? _d : 0) + 32; // 32 is the horizontal padding of the label
    const labelHeight = ((_e = label.height()) !== null && _e !== void 0 ? _e : 0) + 16; // 16 is the vertical padding of the label
    const scrollY = window.scrollY;
    let x = width <= labelWidth * 2 ? offset.left + width / 2 - labelWidth / 2 : mouseX - (labelWidth / 2);
    let y = (offset.top + height + 16) - scrollY;
    // Check if the "label" would exceed the right boundary of the window, if so adjust the x position.
    // console.log(labelWidth, x, x + labelWidth, window.innerWidth)
    if (x + labelWidth >= window.innerWidth) {
        x = window.innerWidth - labelWidth - 10;
    }
    // Check if the "label" would exceed the bottom boundary of the window, if so adjust the y position.
    if (y + labelHeight + 16 >= window.innerHeight) {
        // place above the element
        y = offset.top - labelHeight - 20;
    }
    // Apply the calculated x and y as well as set the "label" to visible.
    label.css({
        top: y,
        left: x,
        opacity: 1
    });
}
function hide() {
    currentElement = null;
    label.css({
        opacity: 0,
        pointerEvents: 'none'
    });
}
/**
 * Sets the label of the given element.
 *
 * @param {string} label - The label to set.
 * @param {JQuery<HTMLElement>} element - The element to set the label on.
 *
 * @return {void}
 */
function setLabel(label, element) {
    element.attr('title', label);
    loadLabels();
}
$(document).on('scroll', () => {
    hide();
});
export { show, hide, loadLabels, setLabel };
//# sourceMappingURL=labels.js.map