import { r as registerInstance, h } from './core-2c1eaee6.js';

const AppComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", null, "I am an app");
    }
    static get style() { return ":host{background-color:#90ee90}"; }
};

export { AppComponent as app_component };
