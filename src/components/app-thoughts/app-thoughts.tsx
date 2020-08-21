import {Component, h, Prop, State, Build} from "@stencil/core";
import {RouterHistory, MatchResults} from "@stencil/router";

import {BlogService} from "../../global/services/blog.service";

import {
  registerViewWithTracking,
  setCanonicalUrl,
} from "../../global/services/helper.utils";
import {devToUrl, fileNotFound} from "../../global/site-structure-utils";

import {
  BlogInterface,
  ErrorInterface,
} from "../../global/definitions/definitions";

@Component({
  tag: "app-thoughts",
  styleUrl: "app-thoughts.css",
  shadow: true,
})
export class AppThoughts {
  private fileNotFound = fileNotFound;
  private urlSlug: string = "";

  @State() articleData: BlogInterface;
  @State() articlesData: BlogInterface[];
  @State() error: ErrorInterface = {} as ErrorInterface;

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  async componentWillLoad() {
    if (Build.isBrowser) {
      let browserTitle: string = ``;

      // Is this a article or articles?
      if (this.match.params && this.match.params.slug) {
        this.urlSlug = this.match.params.slug;
      }

      try {
        // Fetch article(s) and set browser title & canonical url
        if (this.urlSlug) {
          this.articleData = await BlogService.getArticle(
            this.match.params.slug
          );
          browserTitle = `${this.articleData.title} - itsvicki.dev`;
          setCanonicalUrl(this.articleData.url);
        } else {
          this.articlesData = await BlogService.getArticles();
          browserTitle = `Thoughts - itsvicki.dev`;
          setCanonicalUrl();
        }

        // Update title & description
        document.title = browserTitle;
      } catch (err) {
        if (err.code === "NO_MATCH") {
          this.fileNotFound();
        }

        this.error = err;
      }
    }
  }

  componentDidLoad() {
    if (this.history && this.history.location)
      registerViewWithTracking(this.history.location.pathname);
  }

  render() {
    const {errorMessage} = this.error;
    const {articleData, articlesData} = this;

    return (
      <host>
        <h1>Thoughts</h1>
        <p>
          Feed from{" "}
          <a href={devToUrl} target="_blank" rel="noopener noreferrer">
            dev.to
          </a>
        </p>

        {errorMessage && <p>{errorMessage}</p>}

        {articleData && <app-article articleData={articleData}></app-article>}
        {articlesData && (
          <app-articles articleData={articlesData}></app-articles>
        )}
      </host>
    );
  }
}
