import { r as registerInstance, h } from './core-2c1eaee6.js';

const ButtonComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("button", null, "I am a button component");
    }
    static get style() { return ":host{background-color:green}"; }
};

export { ButtonComponent as button_component };
