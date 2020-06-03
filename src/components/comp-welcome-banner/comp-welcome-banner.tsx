import {Component, h} from "@stencil/core";

import {githubUrl, linkedInUrl} from "../../global/site-structure-utils";

@Component({
  tag: "comp-welcome-banner",
  styleUrl: "comp-welcome-banner.css",
  shadow: true,
})
export class CompWelcomeBanner {
  render() {
    return (
      <div class="banner">
        <div class="content">
          <div class="content-inner">
            <div class="title">Oh Hey!</div>
            <h2 class="introduction">
              I'm Vicki, a software engineer passionate about accessibility.
              <br />
              She/her.
            </h2>
            <stencil-route-link url="/about" anchorClass="more">
              Get to know me
            </stencil-route-link>
            <div class="quick-links">
              <span>Quick links:</span>
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
            </div>
          </div>
        </div>
        <div class="selfie">
          {/* TODO: Add alt content */}
          <picture>
            <source
              media="(min-width: 600px)"
              srcSet="/assets/img/selfie.jpg"
            />
            <img src="/assets/img/selfie-small.jpg" alt="" />
          </picture>
        </div>
        <div class="watercolour-1"></div>
        <div class="watercolour-2"></div>
      </div>
    );
  }
}
