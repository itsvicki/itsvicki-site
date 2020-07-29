import {Component, h, Prop} from "@stencil/core";
import {BlogInterface} from "../../global/definitions/definitions";

@Component({
  tag: "app-articles",
  styleUrl: "app-articles.css",
  shadow: true,
})
export class AppArticles {
  @Prop() articleData: BlogInterface[] = {} as BlogInterface[];

  render() {
    const {articleData} = this;

    if (!articleData) return;

    return (
      <host>
        {articleData ? (
          <div class="articles">
            {articleData.map((data) => (
              <article>
                <h2>
                  <stencil-route-link url={`/thoughts/${data.slug}`}>
                    {data.title}
                  </stencil-route-link>
                </h2>
              </article>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </host>
    );
  }
}
