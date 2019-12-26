import { r as registerInstance, h } from './core-66a77161.js';

const ChildComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "alert alert-light", role: "alert" }, "A simple light alert\u2014check it out!"));
    }
    static get style() { return ""; }
};

export { ChildComponent as child_component };
