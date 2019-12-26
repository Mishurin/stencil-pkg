'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-97143d4d.js');

const AppComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return core.h("div", { class: "app-container" }, "I am an app");
    }
    static get style() { return ".app-container{background-color:#90ee90}"; }
};

exports.app_component = AppComponent;
