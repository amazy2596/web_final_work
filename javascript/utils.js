
export function setStyle(element, styles) {

    if (element) {
        console.log(`Setting styles for element:`, element, styles);
        for (let property in styles) {
            element.style[property] = styles[property];
        }
    } else {
        console.error('Element not found for setting styles');
    }

}