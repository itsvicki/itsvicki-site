import {Component, Host, Prop, h} from "@stencil/core";
import {MatchResults} from "@stencil/router";

import {BlogService} from "../../global/services/blog.service";

import {
  BlogInterface,
  ErrorInterface,
} from "../../global/definitions/definitions";

@Component({
  tag: "app-article",
  styleUrl: "app-article.css",
  shadow: true,
})
export class AppArticle {
  // private fileNotFound = fileNotFound;
  private article: BlogInterface = {} as BlogInterface;
  private error: ErrorInterface = {} as ErrorInterface;

  @Prop() match: MatchResults;
  // @Prop() history: RouterHistory;

  async componentWillRender() {
    try {
      const article = await BlogService.getArticle(this.match.params.slug);
      this.article = article;
      console.log(article);

      // Update browser title & description
      document.title = `${article.title} - itsvicki.dev`;
      // document
      //   .querySelector('meta[name="description"]')
      //   .setAttribute("content", product.browserDescription);
    } catch (err) {
      // if (err.code === "NO_MATCH") {
      //   this.fileNotFound();
      // }

      this.error = err;
      console.log(this.error);
    }
  }

  render() {
    const {errorMessage} = this.error;
    const {article} = this;

    return (
      <Host>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <article>
            <header>
              <h1>{article.title}</h1>
            </header>
          </article>
        )}
      </Host>
    );
  }
}
