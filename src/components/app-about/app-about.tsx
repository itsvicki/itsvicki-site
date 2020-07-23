import {Component, h} from "@stencil/core";

import {QAndAInterface} from "../../global/definitions/definitions";

@Component({
  tag: "app-about",
  styleUrl: "app-about.css",
  shadow: true,
})
export class AppAbout {
  // TODO: Fix the quote HTML
  private qAndAData: QAndAInterface = {
    questions: [
      {
        id: 1,
        background: false,
        questionHypertext: [
          "p",
          null,
          ["span", null, "Cuppa tea or coffee?"],
          ["span", {class: "icon tea"}, ""],
          ["span", {class: "icon coffee"}, ""],
        ],
        answerHypertext: ["p", null, "I love you a whole latte."],
      },
      {
        id: 2,
        background: true,
        questionHypertext: [
          "div",
          {
            class: "shout",
          },
          ["span", null, "Action "],
          [
            "span",
            {
              class: "em",
            },
            "or ",
          ],
          ["span", null, "romcom?"],
        ],
        answerHypertext: [
          "div",
          null,
          ["p", null, "Action any day."],
          [
            "p",
            null,
            "I could probably count the romcom's I've seen on one hand.",
          ],
        ],
      },
      {
        id: 3,
        background: false,
        questionHypertext: [
          "span",
          null,
          ["p", null, "Favourite holiday destination?"],
          [
            "ol",
            null,
            ["li", null, "Murcia, Spain"],
            ["li", null, "Reykjavík, Iceland"],
            ["li", null, "Disney World, Florida"],
          ],
        ],
        answerHypertext: [
          "div",
          null,
          [
            "p",
            null,
            ["span", null, "Disney!"],
            ["q", null, "It's kind of fun to do the impossible."],
            ["span", null, "- Walt Disney"],
          ],
        ],
      },
      {
        id: 4,
        background: false,
        questionHypertext: [
          "div",
          null,
          ["span", null, "React"],
          ["span", {class: "em"}, "or"],
          ["span", null, "Anguar?"],
        ],
        answerHypertext: ["div", null, "React."],
      },
      {
        id: 5,
        background: false,
        questionHypertext: [
          "div",
          null,
          ["span", null, "Chad kroeger"],
          ["span", {class: "em"}, "or"],
          ["span", null, "Jason Aldean?"],
        ],
        answerHypertext: [
          "div",
          null,
          "Both, because my music taste is impeccable.",
        ],
      },
      {
        id: 6,
        background: true,
        questionHypertext: [
          "div",
          null,
          ["span", null, "Pepsi"],
          ["span", {class: "em"}, "or"],
          ["span", null, "Coca-Cola?"],
        ],
        answerHypertext: ["p", null, "Pepsi!"],
      },
    ],
    facts: [
      {
        id: 1,
        quote:
          "I'm a big multitasker - more often then not it's when i do both by fastest and best work. So much so that in school I would always have to be doodling in class, without, I wouldn't retrain half as much.",
      },
      {
        id: 2,
        quote:
          "I would say I'm a pretty fast typer - my average speed on typeracer.com is about 100wpm but no hall of fame position yet!",
      },
    ],
  };

  render() {
    const qAndAData = this.qAndAData;

    return (
      <host>
        <h1>GET TO KNOW ME</h1>

        <p>Let's start off with a bit of fun.</p>
        <h2>Take a guess...</h2>

        <div class="tiles">
          <comp-tiles qAndAData={qAndAData}></comp-tiles>
        </div>
      </host>
    );
  }
}
