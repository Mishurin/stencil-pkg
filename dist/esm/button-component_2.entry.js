import { r as registerInstance, h } from './core-66a77161.js';

const ButtonComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("button", { onClick: () => this.handleBtnClick() }, "I am a button component"));
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
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", null, "Hello, World! I'm ", this.getText());
    }
    static get style() { return ""; }
};

export { ButtonComponent as button_component, MyComponent as my_component };
