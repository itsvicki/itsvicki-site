import {Component, h} from "@stencil/core";

@Component({
  tag: "comp-welcome-banner",
  styleUrl: "comp-welcome-banner.css",
  shadow: true,
})
export class CompWelcomeBanner {
  render() {
    return (
      <div class="banner-wrapper">
        <div class="banner">
          <div class="banner-content-before"></div>
          <div class="banner-content">
            <h2>hello,</h2>
            <h3>
              I'm Vicki, a software engineer passionate about accessibility.
              She/her.
            </h3>
          </div>
          <div class="banner-content-spacer"></div>
          <div class="banner-profile-background"></div>
          <div class="banner-profile"></div>
        </div>
      </div>
    );
  }
}
