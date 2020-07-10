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
        answerHypertext: ["p", null, "I love you a whole latte. &hearts;"],
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
          "div",
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
          "Both! Because my music taste is impeccable.",
        ],
      },
      {
        id: 6,
        background: true,
        questionHypertext: ["div", null, "fact six?"],
        answerHypertext: ["div", null, "Answer 6"],
      },
    ],
    facts: [
      {
        id: 1,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie consectetur nisi eu gravida. Fusce vulputate ante vitae diam luctus pretium. Nulla tortor mauris, dictum id consectetur et, vehicula eget mauris. Duis in mollis tellus. Donec vitae orci quam. Nunc quis dolor vel risus efficitur suscipit quis quis diam.",
      },
      {
        id: 2,
        quote:
          "Cras vel dolor non velit egestas congue. Etiam sed dignissim metus. Nulla vitae dolor eget augue gravida euismod. Maecenas vehicula nec nisi ut finibus. Etiam fermentum lorem nec mauris molestie, sed suscipit ligula ultrices. Donec luctus neque urna, id luctus justo finibus ac. Sed interdum dapibus felis, in posuere lorem imperdiet auctor.",
      },
    ],
  };

  render() {
    const qAndAData = this.qAndAData;

    return (
      <host>
        <h1>Get to know me</h1>

        <p>Let's start off with a bit of fun.</p>
        <h2>Take a guess...</h2>

        <comp-tiles qAndAData={qAndAData}></comp-tiles>
      </host>
    );
  }
}
