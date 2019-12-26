'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-97143d4d.js');

const ChildComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("div", { class: "alert alert-light", role: "alert" }, "A simple light alert\u2014check it out!"));
    }
    static get style() { return ""; }
};

exports.child_component = ChildComponent;
