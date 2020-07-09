import {newE2EPage} from "@stencil/core/testing";

describe("comp-global-header", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<comp-global-header></comp-global-header>");

    const element = await page.find("comp-global-header");
    expect(element).not.toBeNull();
    expect(element).toHaveClass("hydrated");
  });
});
