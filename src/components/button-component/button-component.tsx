import { Component, h } from "@stencil/core";

@Component({
  tag: "button-component",
  styleUrl: "button-component.css",
  shadow: true
})
export class ButtonComponent {
  render() {
    return (
      <button onClick={() => this.handleBtnClick()}>
        I am a button component
      </button>
    );
  }
  handleBtnClick() {
    const appCmp = document.createElement("app-component");
    document.body.appendChild(appCmp);
  }
}
