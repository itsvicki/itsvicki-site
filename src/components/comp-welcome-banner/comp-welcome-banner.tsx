import {Component, h} from "@stencil/core";

import {githubUrl, linkedInUrl} from "../../global/site-structure-utils";

@Component({
  tag: "comp-welcome-banner",
  styleUrl: "comp-welcome-banner.css",
  shadow: true,
})
export class CompWelcomeBanner {
  private refs = new Map();

  componentDidLoad() {
    // Fade in when the image loads
    for (let el of this.refs.values()) {
      el.addEventListener("load", () => {
        el.classList.remove("hide");
        el.classList.add("fadeIn");
      });
    }
  }

  render() {
    const {refs} = this;

    return (
      <section class={{banner: true}}>
        <div class="content">
          <div class="content-inner space-text">
            <h1 class="screen-reader-only">Introduction</h1>
            <div class="introduction">
              <p class="emphasis">Hej hej!</p>
              <p>
                I'm Vicki, a software engineer/manager passionate about
                accessibility whilst creating interactive and creative sites.
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

        {/* Selfie */}
        <div class="moi">
          <picture>
            <source
              srcSet="/assets/img/selfie-new.webp"
              type="image/webp"
              media="(min-width: 600px)"
            />
            <img
              src="/assets/img/selfie-new.jpg"
              alt="A photo of Vicki with a background of Stockholm and its sunset."
              class="hide"
              ref={(el) => refs.set(1, el as HTMLElement)}
            />
          </picture>
        </div>

        {/* Water */}
        <div class="watercolour">
          <picture>
            <source
              srcSet="/assets/icon/watercolour-3-min.webp"
              type="image/webp"
              media="(min-width: 600px)"
            />
            <img
              src="/assets/icon/watercolour-3-min.png"
              alt=""
              class="hide"
              ref={(el) => refs.set(2, el as HTMLElement)}
            />
          </picture>
        </div>
        <div class="watercolour-2">
          <picture>
            <source
              srcSet="/assets/icon/watercolour-2-min.webp"
              type="image/webp"
              media="(max-width: 599px)"
            />
            <source
              srcSet="/assets/icon/watercolour-2-rotated-min.webp"
              type="image/webp"
              media="(min-width: 600px)"
            />
            <img
              src="/assets/icon/watercolour-2-min.png"
              alt=""
              class="hide"
              ref={(el) => refs.set(3, el as HTMLElement)}
            />
          </picture>
        </div>
      </section>
    );
  }
}
