'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-debf4271.js');

const ButtonComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return core.h("button", null, "I am a button component");
    }
    static get style() { return ":host{background-color:green}"; }
};

exports.button_component = ButtonComponent;
