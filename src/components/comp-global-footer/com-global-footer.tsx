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
          <p class="quick-links">
            <a href={githubUrl} class="github" target="_blank" rel="noopener">
              <span class="screen-reader-only">Vicki's Github page</span>
            </a>
            <a
              href={linkedInUrl}
              class="linkedin"
              target="_blank"
              rel="noopener"
            >
              <span class="screen-reader-only">Vicki's LinkedIn page</span>
            </a>
          </p>
        </footer>
      </host>
    );
  }
}
