import {Component, Host, Prop, h} from "@stencil/core";

import {BlogInterface} from "../../global/definitions/definitions";

@Component({
  tag: "app-article",
  styleUrl: "app-article.css",
  shadow: true,
})
export class AppArticle {
  private refs = new Map();

  @Prop() articleData: BlogInterface = {} as BlogInterface;

  componentDidLoad() {
    // Fade in when the image loads
    for (let el of this.refs.values()) {
      el.addEventListener("load", () => {
        el.classList.remove("hide");
        el.classList.add("fade-in");
      });
    }
  }

  render() {
    const {articleData, refs} = this;

    if (!articleData) return;

    return (
      <Host>
        <article>
          <header>
            <h1>{articleData.title}</h1>

            {articleData.cover_image && (
              <img
                src={articleData.cover_image}
                alt=""
                ref={(el) => refs.set(1, el as HTMLElement)}
              />
            )}

            <div innerHTML={articleData.html}></div>
          </header>
        </article>
      </Host>
    );
  }
}
