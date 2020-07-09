import {Component, h} from "@stencil/core";

@Component({
  tag: "app-about",
  styleUrl: "app-about.css",
  shadow: true,
})
export class AppAbout {
  private toggleTile = (env) => {
    env.preventDefault();
    const el = env.currentTarget;

    // Hide the question
    el.setAttribute("aria-hidden", true);

    // Show the answer
    if (el.nextSibling) el.nextSibling.setAttribute("aria-hidden", false);
  };

  render() {
    return (
      <host>
        <h1>Get to know me</h1>

        <p>Let's start off with a bit of fun.</p>
        <h2>Take a guess...</h2>

        <div class="fun-facts">
          <div class="fact fact-one">
            <a
              class="question tile-trigger"
              href=""
              onClick={this.toggleTile.bind(this)}
            >
              Cuppa tea <br />
              or coffee?
              <span class="icon tea"></span>
              <span class="icon coffee"></span>
            </a>
            <div class="answer tile-modal" aria-hidden="true">
              I love you a whole latte. <br />
              &hearts;
            </div>
          </div>
          <div class="fact fact-two background">
            <a
              class="question tile-trigger"
              href=""
              onClick={this.toggleTile.bind(this)}
            >
              <span class="action">Action</span>
              <span class="em">or</span>
              <span class="romcom">romcom?</span>
            </a>
            <div class="answer" aria-hidden="true">
              Action any day.
              <br />
              <br />I could probably count the romcom's I've seen on one hand.
            </div>
          </div>
          <div class="fact fact-three">
            <a
              class="question tile-trigger"
              href=""
              onClick={this.toggleTile.bind(this)}
            >
              Favourite holiday destination?
              <ol>
                <li>Murcia, Spain</li>
                <li>Reykjavík, Iceland</li>
                <li>Disney World, Florida</li>
              </ol>
            </a>
            <div class="answer" aria-hidden="true">
              Disney!
              <quote>
                It's kind of fun to do the impossible.
                <cite>- Walt Disney</cite>
              </quote>
            </div>
          </div>
          <div class="fact fact-four">
            <div class="question">
              white wine <br />
              <span class="em">or</span>
              disaronno... on the rocks?
            </div>
            <div class="answer" aria-hidden="true">
              Disaronno, although I won't say no to wine either if you're
              buying.
            </div>
          </div>
          <div class="fact fact-five">
            <div class="question">
              Chad kroeger
              <span class="em">or</span>
              Jason Aldean?
            </div>
            <div class="answer" aria-hidden="true">
              Both! <br />
              Because my music taste is impeccable.
            </div>
          </div>
          <div class="fact fact-six">
            <div class="question">fact six?</div>
            <div class="answer" aria-hidden="true">
              Answer 6
            </div>
          </div>
        </div>
      </host>
    );
  }
}
