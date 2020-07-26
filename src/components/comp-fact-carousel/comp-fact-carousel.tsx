import {
  Component,
  ComponentInterface,
  h,
  Prop,
  State,
  Listen,
  Build,
} from "@stencil/core";

import {FactInterface} from "../../global/definitions/definitions";

@Component({
  tag: "comp-fact-carousel",
  styleUrl: "comp-fact-carousel.css",
  shadow: true,
})
export class CompFactCarousel implements ComponentInterface {
  private timeoutID: number;
  private slidesLength: number;
  private prevVisibleIndex: number | null = null;
  private slideRefs = new Map();

  @State() visibleIndex: number = 0;
  @State() announcementText: string = "";

  @Prop({reflect: true}) facts!: FactInterface[];
  @Prop() compTitle: string;
  @Prop() announceItem: boolean;

  @Listen("keydown")
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === "Enter" || ev.key === " " || ev.key === "ArrowRight") {
      this.updateTabIndex();
    }
  }

  componentWillLoad() {
    if (!Build.isBrowser) {
      if (this.facts) this.slidesLength = this.facts.length;
    }
  }

  disconnectedCallback() {
    window.clearTimeout(this.timeoutID);
  }

  announceSlideChange() {
    if (this.announceItem)
      this.announcementText =
        "Item " + (this.visibleIndex + 1) + " of " + this.slidesLength;
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
      this.announceSlideChange();

      newSlide.setAttribute("tabindex", "-1");
      newSlide.focus();
    }, 500);
  }

  displaySlide(index = null) {
    if (index === null) {
      this.prevVisibleIndex = this.visibleIndex;

      const nextSlideIndex = this.visibleIndex + 1;
      index = nextSlideIndex < this.slidesLength ? nextSlideIndex : 0;
    }

    this.visibleIndex = index;
  }

  render() {
    if (!Build.isBrowser || !this.facts) {
      return;
    }

    const {
      slideRefs,
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
              <li
                aria-hidden={`${index !== visibleIndex}`}
                ref={(el) => slideRefs.set(index, el as HTMLElement)}
              >
                {q.quote}
              </li>
            ))}
          </ul>

          <button
            type="button"
            class="next"
            onClick={() => this.displaySlide()}
          >
            <span class="screen-reader-only">Next item</span>
          </button>
        </div>
        <ul class="nav">
          {facts.map((q, index) => (
            <li class={{active: index === visibleIndex}}>
              <button onClick={() => this.displaySlide(index)}>
                <span class="screen-reader-only">Quote</span> {q.id}
                {index === visibleIndex && (
                  <span class="screen-reader-only">(Current)</span>
                )}
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
