import { Component, h } from "@stencil/core";

@Component({
  tag: "app-component",
  styleUrl: "app-component.scss",
  shadow: true
})
export class AppComponent {
  render() {
    return (
      <div class="alert alert-primary" role="alert">
        I am an app
        <child-component></child-component>
      </div>
    );
  }
}
