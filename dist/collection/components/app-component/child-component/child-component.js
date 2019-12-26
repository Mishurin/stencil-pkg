import { h } from "@stencil/core";
export class ChildComponent {
    render() {
        return (h("div", { class: "alert alert-light", role: "alert" }, "A simple light alert\u2014check it out!"));
    }
    static get is() { return "child-component"; }
    static get originalStyleUrls() { return {
        "$": ["child-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["child-component.css"]
    }; }
}
