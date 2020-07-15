import {Component, ComponentInterface, h, Prop} from "@stencil/core";

import {QAndAInterface} from "../../global/definitions/definitions";

import {toHypertext} from "../../global/services/helper.utils";

@Component({
  tag: "comp-tiles",
  styleUrl: "comp-tiles.css",
  shadow: true,
})
export class CompTiles implements ComponentInterface {
  @Prop({reflect: true}) qAndAData!: QAndAInterface;

  private toggleTile = (env) => {
    env.preventDefault();
    const el = env.currentTarget;

    // Hide the question
    el.setAttribute("aria-hidden", true);

    // Show the answer
    if (el.nextSibling) el.nextSibling.setAttribute("aria-hidden", false);
  };

  render() {
    const {qAndAData} = this;

    return (
      <host>
        <div class="container">
          {qAndAData.questions.map((d) => (
            <div class={{tile: true, background: d.background}}>
              <a
                class="question trigger front"
                href=""
                onClick={this.toggleTile.bind(this)}
              >
                {toHypertext(d.questionHypertext)}
              </a>
              <div class="answer back tile-modal" aria-hidden="true">
                {toHypertext(d.answerHypertext)}
              </div>
            </div>
          ))}
        </div>

        {qAndAData.facts && (
          <comp-fact-carousel
            compTitle="Facts"
            facts={qAndAData.facts}
            announceItem={true}
          ></comp-fact-carousel>
        )}
      </host>
    );
  }
}
