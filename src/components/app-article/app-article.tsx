import {Component, Host, Prop, h} from "@stencil/core";

import {BlogInterface} from "../../global/definitions/definitions";

@Component({
  tag: "app-article",
  styleUrl: "app-article.css",
  shadow: true,
})
export class AppArticle {
  @Prop() articleData: BlogInterface = {} as BlogInterface;

  render() {
    const {articleData} = this;

    if (!articleData) return;

    return (
      <Host>
        <article>
          <header>
            <h1>{articleData.title}</h1>

            <div innerHTML={articleData.html}></div>
          </header>
        </article>
      </Host>
    );
  }
}
