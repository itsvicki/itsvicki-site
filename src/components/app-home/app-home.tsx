import {Component, h, Prop} from "@stencil/core";

import {registerViewWithTracking} from "../../global/services/helper.utils";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true,
})
export class AppHome {
  @Prop() history: RouterHistory;

  constructor() {
    document.title = `Home - itsvicki.dev`;
  }

  componentDidLoad() {
    registerViewWithTracking(this.history.location.pathname);
  }

  render() {
    return (
      <div class="app-home">
        <comp-welcome-banner></comp-welcome-banner>
      </div>
    );
  }
}
