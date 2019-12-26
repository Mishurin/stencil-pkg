'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-debf4271.js');

const AppComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return core.h("div", null, "I am an app");
    }
    static get style() { return ":host{background-color:#90ee90}"; }
};

exports.app_component = AppComponent;
