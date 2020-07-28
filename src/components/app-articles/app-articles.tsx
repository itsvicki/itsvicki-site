import {Component, h} from "@stencil/core";

import {BlogService} from "../../global/services/blog.service";

import {
  defaultPageMetaDescription,
  devToUrl,
} from "../../global/site-structure-utils";

import {
  BlogInterface,
  ErrorInterface,
} from "../../global/definitions/definitions";

@Component({
  tag: "app-articles",
  styleUrl: "app-articles.css",
  shadow: true,
})
export class AppArticles {
  private pageMetaDescription = defaultPageMetaDescription;
  private articles: BlogInterface[] = [];
  private error: ErrorInterface = {} as ErrorInterface;

  async componentWillLoad() {
    try {
      const articles: BlogInterface[] = await BlogService.getArticles();
      this.articles = articles;

      // Update title & description
      document.title = `Thoughts - itsvicki.dev`;
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", this.pageMetaDescription);
    } catch (err) {
      this.error = err;
    }
  }

  render() {
    const {errorMessage} = this.error;
    const {articles} = this;

    return (
      <host>
        <h1>Thoughts</h1>
        <p>
          Feed from{" "}
          <a href={devToUrl} target="_blank" rel="noopener noreferrer">
            dev.to
          </a>
        </p>

        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <div class="articles">
            {articles.map((article) => (
              <article>
                <h2>
                  <stencil-route-link url={`/thoughts/${article.slug}`}>
                    {article.title}
                  </stencil-route-link>
                </h2>
              </article>
            ))}
          </div>
        )}
      </host>
    );
  }
}
