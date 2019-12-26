import { h } from "@stencil/core";
export class ButtonComponent {
    render() {
        return h("button", null, "I am a button component");
    }
    static get is() { return "button-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["button-component.css"]
    }; }
}
