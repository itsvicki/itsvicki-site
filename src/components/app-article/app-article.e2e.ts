import {newE2EPage} from "@stencil/core/testing";

describe("app-article", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<app-article></app-article>");

    const element = await page.find("app-article");
    expect(element).not.toBeNull();
    expect(element).toHaveClass("hydrated");
  });
});
