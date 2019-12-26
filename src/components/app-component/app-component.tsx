import { Component, h } from "@stencil/core";

@Component({
  tag: "app-component",
  styleUrl: "app-component.css",
  shadow: true
})
export class AppComponent {
  render() {
    return <div class="app-container">I am an app</div>;
  }
}
