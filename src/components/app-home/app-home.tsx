import {Component, h} from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <comp-welcome-banner></comp-welcome-banner>
      </div>
    );
  }
}
