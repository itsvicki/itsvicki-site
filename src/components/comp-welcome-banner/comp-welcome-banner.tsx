import {Component, h} from "@stencil/core";

@Component({
  tag: "comp-welcome-banner",
  styleUrl: "comp-welcome-banner.css",
  shadow: true,
})
export class CompWelcomeBanner {
  render() {
    return (
      <div class="banner">
        <div class="banner-background"></div>
        <div class="banner-content">
          <div class="title">hello,</div>
          <h2>
            I'm Vicki, a software engineer passionate about accessibility.
            She/her.
          </h2>
        </div>
        <div class="banner-profile-background"></div>
        <div class="banner-profile"></div>
      </div>
    );
  }
}
