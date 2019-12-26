'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-97143d4d.js');

const ButtonComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("button", { onClick: () => this.handleBtnClick() }, "I am a button component"));
    }
    handleBtnClick() {
        const appCmp = document.createElement("app-component");
        document.body.appendChild(appCmp);
    }
    static get style() { return "button{background-color:green}"; }
};

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const MyComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return core.h("div", null, "Hello, World! I'm ", this.getText());
    }
    static get style() { return ""; }
};

exports.button_component = ButtonComponent;
exports.my_component = MyComponent;
