import { r as registerInstance, h } from './core-743b0916.js';

const AppComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", { class: "app-container" }, "I am an app");
    }
    static get style() { return ".app-container{background-color:#90ee90}"; }
};

export { AppComponent as app_component };
