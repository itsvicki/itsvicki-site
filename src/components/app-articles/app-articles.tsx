import {Component, h, Prop} from "@stencil/core";
import {RouterHistory} from "@stencil/router";

import {BlogService} from "../../global/services/blog.service";

import {registerViewWithTracking} from "../../global/services/helper.utils";
import {devToUrl} from "../../global/site-structure-utils";

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
  private articles: BlogInterface[] = [];
  private error: ErrorInterface = {} as ErrorInterface;

  @Prop() history: RouterHistory;

  async componentWillLoad() {
    try {
      const articles: BlogInterface[] = await BlogService.getArticles();
      this.articles = articles;

      // Update title & description
      document.title = `Thoughts - itsvicki.dev`;
    } catch (err) {
      this.error = err;
    }
  }

  componentDidLoad() {
    registerViewWithTracking(this.history.location.pathname);
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
