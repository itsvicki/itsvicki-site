import {Component, h, ComponentInterface} from "@stencil/core";

import {moveUserFocusToEl} from "../../global/services/helper.utils";

@Component({
  tag: "comp-global-header",
  styleUrl: "comp-global-header.css",
  shadow: true,
})
export class CompGlobalHeader implements ComponentInterface {
  handleSkipToContentClick(env) {
    env.preventDefault();
    moveUserFocusToEl();
  }

  render() {
    return (
      <host>
        <a
          class="skip-main"
          href="#body"
          onClick={this.handleSkipToContentClick.bind(this)}
        >
          Skip to main content
        </a>

        <header>
          <nav class="space-text" role="navigation">
            <stencil-route-link url="/" activeClass="active" exact={true}>
              01. Home
            </stencil-route-link>
            <stencil-route-link url="/about" activeClass="active" exact={true}>
              02. About
            </stencil-route-link>
            <stencil-route-link
              url="/projects"
              activeClass="active"
              exact={true}
            >
              03. Projects
            </stencil-route-link>
            <stencil-route-link
              url="/thoughts"
              activeClass="active"
              exact={true}
            >
              04. Thoughts
            </stencil-route-link>
          </nav>
        </header>
      </host>
    );
  }
}