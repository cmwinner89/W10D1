const DomNodeCollection = require("./dom_node_collection.js")

const elements = [];

const $l = (arg) => {
    if (arg instanceof HTMLElement) {
        elements.push(arg);
        return new DomNodeCollection([elements])
    } else if (arg instanceof String) {
        elements.push(arg);
        return new DomNodeCollection([elements])
    }


}

window.$l = $l

elementList = parentNode.querySelectorAll(selectors);