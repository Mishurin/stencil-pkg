import { h } from "@stencil/core";
export class AppComponent {
    render() {
        return (h("div", { class: "alert alert-primary", role: "alert" }, "I am an app"));
    }
    static get is() { return "app-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["app-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["app-component.css"]
    }; }
}
