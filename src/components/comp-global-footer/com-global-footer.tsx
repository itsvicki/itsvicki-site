import {Component, h, ComponentInterface} from "@stencil/core";

import {linkedInUrl, githubUrl} from "../../global/site-structure-utils";

@Component({
  tag: "comp-global-footer",
  styleUrl: "comp-global-footer.css",
  shadow: true,
})
export class CompGlobalFooter implements ComponentInterface {
  render() {
    return (
      <host>
        <footer>
          <h3>Some other things...</h3>
          <p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              hop to the code.
            </a>
            {/* <span aria-hidden="true">|</span> */}
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              best place to chat.
            </a>
          </p>
        </footer>
      </host>
    );
  }
}
