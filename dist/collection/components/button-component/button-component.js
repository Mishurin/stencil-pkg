import { h } from "@stencil/core";
export class ButtonComponent {
    render() {
        return (h("button", { onClick: () => this.handleBtnClick() }, "I am a button component"));
    }
    handleBtnClick() {
        const appCmp = document.createElement("app-component");
        document.body.appendChild(appCmp);
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
