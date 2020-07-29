import {newE2EPage} from "@stencil/core/testing";

import {BlogService} from "../../global/services/blog.service";

describe("blog-service", () => {
  it("fetchArticles", async () => {
    const blog = BlogService.getArticles;
    console.log(blog);
  });
});

describe("app-articles", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<app-articles></app-articles>");

    const element = await page.find("app-articles");
    expect(element).not.toBeNull();
    expect(element).toHaveClass("hydrated");
  });
});
