import {Component, h} from "@stencil/core";

@Component({
  tag: "app-about",
  styleUrl: "app-about.css",
  shadow: true,
})
export class AppAbout {
  render() {
    return (
      <div class="app-about">
        <h1>About</h1>
      </div>
    );
  }
}
