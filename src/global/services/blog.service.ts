import {BlogInterface} from "../definitions/definitions";

export default class BlogServiceController {
  public localCache = new Map<string, Promise<BlogInterface[]>>();

  /**
   * Fetch all articles from a JSON file & store into memory
   *
   * @returns BlogInterface[]
   */
  private async load(): Promise<BlogInterface[]> {
    let cacheCheck = this.localCache.get("articles");

    if (!cacheCheck) {
      try {
        const file = await fetch("/.netlify/functions/dev-to");

        if (file.ok !== true) {
          return Promise.reject({
            code: "FILE_ERROR",
            errorMessage:
              "ERROR: T1. Sorry, there was an issue fetching articles. Please try again later",
          });
        }

        const fileToJson = await file.json();
        this.localCache.set("articles", fileToJson);

        return fileToJson;
      } catch (errors) {
        return Promise.reject({
          code: "GENERAL_ERROR",
          errorMessage:
            "ERROR: T2. Sorry, there was an issue fetching articles. Please try again later",
        });
      }
    }

    return cacheCheck;
  }

  /**
   * Return all articles in the catalogue
   *
   * @returns BlogInterface[]
   */
  public async getArticles(): Promise<BlogInterface[]> {
    const data = await this.load();
    return data;
  }

  /**
   * Search the catalogue for a article based on a key match
   *
   * @param article
   * @param key   What key to match on. By default `slug` is used
   *
   * @returns BlogInterface
   */
  public async getArticle(article, key = `slug`): Promise<BlogInterface> {
    const cachedArticles = await this.load();

    const result = (cachedArticles as BlogInterface[]).find(
      (articles) => articles[key] === article
    );

    if (result) {
      return result;
    }

    return Promise.reject({
      code: "NO_MATCH",
      errorMessage:
        "ERROR: T3. Sorry, we don't seem to recognise that article. Please try again later",
    });
  }
}

export const BlogService = new BlogServiceController();
