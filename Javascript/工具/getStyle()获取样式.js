function getStyle(elements, style) {
    if (window.getComputedStyle) {
        return getComputedStyle(elements, null)[style];
    } else {
        return elements.currentStyle[style];
    }
}