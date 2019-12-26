import { h } from "@stencil/core";
export class AppComponent {
    render() {
        return h("div", { class: "app-container" }, "I am an app");
    }
    static get is() { return "app-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["app-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["app-component.css"]
    }; }
}
