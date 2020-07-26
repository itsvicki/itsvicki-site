import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Listen,
  State,
} from "@stencil/core";

import {QAndAInterface} from "../../global/definitions/definitions";

import {toHypertext} from "../../global/services/helper.utils";

@Component({
  tag: "comp-tiles",
  styleUrl: "comp-tiles.css",
  shadow: true,
})
export class CompTiles implements ComponentInterface {
  private timeoutID: number;
  private prevVisibleIndex: number | null = null;
  private slideRefs = new Map();

  @State() visibleIndex: number | null = null;

  @Prop({reflect: true}) qAndAData!: QAndAInterface;

  @Listen("keydown")
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === "Enter" || ev.key === " ") {
      this.updateTabIndex();
    }
  }

  disconnectedCallback() {
    window.clearTimeout(this.timeoutID);
  }

  updateTabIndex() {
    this.timeoutID = window.setTimeout(() => {
      // Remove tabindex from currently visible slide
      if (this.prevVisibleIndex !== null) {
        const currentSlide = this.slideRefs.get(this.prevVisibleIndex);
        currentSlide.removeAttribute("tabindex", "");
      }

      // Add tabindex to the new
      const newSlide = this.slideRefs.get(this.visibleIndex);

      newSlide.setAttribute("tabindex", "-1");
      newSlide.focus();
    }, 500);
  }

  private toggleTile = (el, index) => {
    el.preventDefault();

    this.prevVisibleIndex = this.visibleIndex;
    this.visibleIndex = this.visibleIndex === index ? null : index;
  };

  render() {
    const {qAndAData, visibleIndex, slideRefs} = this;

    return (
      <host>
        <div class="container">
          {qAndAData.questions.map((d, index) => (
            <div
              class="tile"
              ref={(el) => slideRefs.set(index, el as HTMLElement)}
              onClick={(el) => this.toggleTile(el, index)}
            >
              <span class={{background: d.background}}>
                <a
                  class="question trigger front"
                  href=""
                  aria-hidden={`${index === visibleIndex}`}
                >
                  {toHypertext(d.questionHypertext)}
                </a>
                <div
                  class="answer back tile-modal"
                  aria-hidden={`${index !== visibleIndex}`}
                >
                  {toHypertext(d.answerHypertext)}
                </div>
              </span>
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
