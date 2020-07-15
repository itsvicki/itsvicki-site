import {Component, ComponentInterface, h, Prop, State} from "@stencil/core";

import {FactInterface} from "../../global/definitions/definitions";

@Component({
  tag: "comp-fact-carousel",
  styleUrl: "comp-fact-carousel.css",
  shadow: true,
})
export class CompFactCarousel implements ComponentInterface {
  private slidesLength: number;

  @State() visibleIndex: number = 0;
  @State() announcementText: string = "";

  @Prop({reflect: true}) facts!: FactInterface[];
  @Prop() compTitle: string;
  @Prop() announceItem: boolean;

  constructor() {
    this.slidesLength = this.facts.length;
  }

  announceSlideChange() {
    if (this.announceItem)
      this.announcementText =
        "Item " + (this.visibleIndex + 1) + " of " + this.slidesLength;
  }

  nextSlide() {
    const nextSlideIndex = this.visibleIndex + 1;
    this.selectSlide(nextSlideIndex < this.slidesLength ? nextSlideIndex : 0);
  }

  selectSlide(index) {
    this.visibleIndex = index;

    this.announceSlideChange();
  }

  render() {
    const {
      facts,
      compTitle,
      visibleIndex,
      announceItem,
      announcementText,
    } = this;

    return (
      <host>
        <div class="container">
          {compTitle && (
            <div class="heading">
              <h3>{compTitle}</h3>
            </div>
          )}
          <ul class="slides">
            {facts.map((q, index) => (
              <li aria-hidden={`${index !== visibleIndex}`}>{q.quote}</li>
            ))}
          </ul>

          <button type="button" class="next" onClick={() => this.nextSlide()}>
            <span class="screen-reader-only">Next item</span>
          </button>
        </div>
        <ul class="nav">
          {facts.map((q, index) => (
            <li class={{active: index === visibleIndex}}>
              <button onClick={() => this.selectSlide(index)}>
                <span class="screen-reader-only">Quote</span> {q.id}
              </button>
            </li>
          ))}
        </ul>
        {announceItem && (
          <div aria-live="polite" aria-atomic="true" class="screen-reader-only">
            {announcementText}
          </div>
        )}
      </host>
    );
  }
}
