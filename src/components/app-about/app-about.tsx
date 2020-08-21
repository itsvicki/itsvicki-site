import {Component, h, Prop} from "@stencil/core";
import {RouterHistory} from "@stencil/router";

import {QAndAInterface} from "../../global/definitions/definitions";

import {
  registerViewWithTracking,
  setCanonicalUrl,
} from "../../global/services/helper.utils";

import {linkedInUrl} from "../../global/site-structure-utils";

@Component({
  tag: "app-about",
  styleUrl: "app-about.css",
  shadow: true,
})
export class AppAbout {
  @Prop() history: RouterHistory;

  private qAndAData: QAndAInterface = {
    questions: [
      {
        id: 1,
        background: false,
        questionHypertext: ["p", null, ["span", null, "Coffee or cuppa tea?"]],
        answerHypertext: ["p", null, "I love you a whole latte."],
      },
      {
        id: 2,
        background: true,
        questionHypertext: [
          "p",
          null,
          ["span", null, "Early bird"],
          ["span", {class: "em"}, "or"],
          ["span", null, "Night owl?"],
        ],
        answerHypertext: [
          "p",
          null,
          "A few years ago it would be early bird all the way. I wouldn't even be able to lie in! But now, night owl.",
        ],
      },
      {
        id: 3,
        background: false,
        questionHypertext: [
          "p",
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
          "p",
          {
            class: "fancy",
          },
          ["span", null, "Light"],
          ["span", {class: "em"}, "or"],
          ["span", null, "Dark mode?"],
        ],
        answerHypertext: [
          "p",
          null,
          "Anyone who knows me will laugh at this - I had light mode everything and it would burn people's eyes but i've come to the dark side now. Woo.",
        ],
      },
      {
        id: 5,
        background: false,
        questionHypertext: [
          "div",
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
          "p",
          null,
          ["span", null, "React"],
          ["span", {class: "em"}, "or"],
          ["span", null, "Anguar?"],
        ],
        answerHypertext: ["p", null, "React."],
      },
    ],
    facts: [
      {
        id: 1,
        quote:
          "I'm a big multitasker - in school I would always be doodling in class. Promise it helps me focus!",
      },
      {
        id: 2,
        quote:
          "Some  would say I'm a pretty fast typist - my average speed on typeracer.com is about 100wpm but no hall of fame position yet!",
      },
      {
        id: 3,
        quote:
          "Admittedly a stickler for things being in position. Good characteristic to have when it comes to pixel perfect design but not so great to share a desk next to. Google, 'Dwight the office pencil ruler' as a bit of an insight!",
      },
    ],
  };

  constructor() {
    document.title = `About - itsvicki.dev`;
    setCanonicalUrl();
  }

  componentDidLoad() {
    registerViewWithTracking(this.history.location.pathname);
  }

  render() {
    const qAndAData = this.qAndAData;

    return (
      <host>
        <h1>GET TO KNOW ME</h1>

        <p>Let's start off with a bit of fun.</p>
        <h2>Take a guess...</h2>

        {/* Tiles/carousel */}
        <div class="tiles">
          <comp-tiles qAndAData={qAndAData}></comp-tiles>
        </div>

        {/* Bio */}
        <div class="bio">
          <h2>The early days</h2>
          <p>
            My interest in accessibility started way back when in my university
            days - so much so that I decided to do my dissertation in Human
            Computer Interaction (HCI) with a focus on disability.
          </p>
          <p>
            From graduation I then went onto a great job which allowed me to
            gain skills in all aspects of development;
            <ul>
              <li>Requirements gathering</li>
              <li>System and UI design</li>
              <li>Development and testing</li>
              <li>Drinking the go live champagne</li>
            </ul>
          </p>
          <br />
          <h2>Now</h2>
          <p>
            Currently I travel between Stockholm, Sweden and UK working for{" "}
            <a
              href="https://www.leighton.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leighton
            </a>
            , mainly on their British Airways account where all work is required
            to meet WCAG 2.0 guidelines by law.
          </p>
          <p>
            I've gained experience as both a software engineer as well as an
            engineering manager - currently working as a senior software
            engineer.
          </p>

          <h3>Experience / Technology</h3>
          <p>
            <ul>
              <li>Angular 8</li>
              <li>
                Using a global experience language written with web components +
                Stencil.js
              </li>
              <li>CSS/SASS</li>
              <li>Javascript/Typescript</li>
              <li>XSLT</li>
              <li>System design</li>
            </ul>
          </p>

          <h3>Project breakdown</h3>
          <p>
            The best place to see what projects i've worked on is on{" "}
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" "}
            &gt; Projects.
          </p>

          <h3>Additional experience / personal projects</h3>
          <p>
            <ul>
              <li>Web Components + Stencil.js</li>
              <li>React</li>
              <li>CSS modules</li>
              <li>Javascript/Typescript</li>
            </ul>
          </p>
        </div>
        <br />
        <br />
      </host>
    );
  }
}
