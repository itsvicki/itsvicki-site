import {Component, ComponentInterface, h, Prop} from "@stencil/core";

import {FactInterface} from "../../global/definitions/definitions";

@Component({
  tag: "comp-fact-carousel",
  styleUrl: "comp-fact-carousel.css",
  shadow: true,
})
export class CompFactCarousel implements ComponentInterface {
  @Prop({reflect: true}) facts!: FactInterface[];
  @Prop() compTitle: string;

  render() {
    const {facts, compTitle} = this;

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
              <li aria-hidden={`${index !== 0}`}>{q.quote}</li>
            ))}
          </ul>

          <button type="button" class="next">
            Next item
          </button>
        </div>

        <ul class="nav">
          {facts.map((q, index) => (
            <li class={{active: index === 0}}>
              <button>
                <span class="screen-reader-only">Quote</span> {q.id}
              </button>
            </li>
          ))}
        </ul>
      </host>
    );
  }
}
