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
      <section class="banner">
        <div class="content">
          <div class="content-inner space-text">
            <h1 class="screen-reader-only">Introduction</h1>
            <div class="introduction">
              <p class="emphasis">Hej hej!</p>
              <p>
                I'm Vicki, a software engineer/manager passionate about
                accessibility.
                <br />
                She/her.
              </p>
            </div>
            <stencil-route-link url="/about" anchorClass="more">
              Get to know me
            </stencil-route-link>
            <p class="quick-links">
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
            </p>
          </div>
        </div>
        <div class="moi">
          {/* TODO: Add alt content & add low res version. Also change this for a more landscape img */}
          <picture>
            <source
              media="(min-width: 600px)"
              srcSet="/assets/img/selfie-new.jpg"
            />
            <img src="/assets/img/selfie-new.jpg" alt="" />
          </picture>
        </div>
        <div class="watercolour"></div>
      </section>
    );
  }
}
