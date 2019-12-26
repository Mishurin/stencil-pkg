'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-56aee79f.js');

const ButtonComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return core.h("button", null, "I am a button component");
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
