import { Component, h } from "@stencil/core";

@Component({
  tag: "child-component",
  styleUrl: "child-component.scss",
  shadow: false
})
export class ChildComponent {
  render() {
    return (
      <div class="alert alert-light" role="alert">
        A simple light alert—check it out!
      </div>
    );
  }
}
