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
          ["span", null, "Coffee or cuppa tea?"],
          // ["span", {class: "icon tea"}, ""],
          // ["span", {class: "icon coffee"}, ""],
        ],
        answerHypertext: ["p", null, "I love you a whole latte."],
      },
      {
        id: 2,
        background: true,
        questionHypertext: [
          "div",
          null,
          ["span", null, "Early bird"],
          ["span", {class: "em"}, "or"],
          ["span", null, "Night owl?"],
        ],
        answerHypertext: [
          "div",
          null,
          "A few years ago it would be early bird all the way. I wouldn't even be able to lie in! But now, night owl.",
        ],
      },
      {
        id: 3,
        background: false,
        questionHypertext: [
          "div",
          {
            class: "fancy",
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
        id: 4,
        background: false,
        questionHypertext: [
          "div",
          {
            class: "fancy",
          },
          ["span", null, "Light"],
          ["span", {class: "em"}, "or"],
          ["span", null, "Dark mode?"],
        ],
        answerHypertext: [
          "div",
          null,
          "Anyone who knows me will laugh at this - I had light mode everything and it would burn people's eyes but i've come to the dark side now. Woo.",
        ],
      },
      {
        id: 5,
        background: false,
        questionHypertext: [
          "span",
          null,
          ["p", {class: "small-title"}, "Favourite holiday?"],
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
        id: 6,
        background: true,
        questionHypertext: [
          "div",
          null,
          ["span", null, "React"],
          ["span", {class: "em"}, "or"],
          ["span", null, "Anguar?"],
        ],
        answerHypertext: ["div", null, "React."],
      },
    ],
    facts: [
      {
        id: 1,
        quote:
          "I'm a big multitasker - so much so that in school I would always have to be doodling in class, without, I wouldn't retrain half as much.",
      },
      {
        id: 2,
        quote:
          "Some  would say I'm a pretty fast typist - my average speed on typeracer.com is about 100wpm but no hall of fame position yet!",
      },
      {
        id: 3,
        quote:
          "Admittedly a stickler for things being in position. Good characteristic to have when it comes to pixel perfect design but not so great to share a desk next to. Google, 'Dwight the office pencil ruler' as a bit of an insight! Ha.",
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
