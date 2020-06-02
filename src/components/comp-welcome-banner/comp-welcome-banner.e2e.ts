import {newE2EPage} from "@stencil/core/testing";

describe("comp-welcome-banner", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<comp-welcome-banner></comp-welcome-banner>");

    const element = await page.find("comp-welcome-banner");
    expect(element).toHaveClass("hydrated");
  });

  it("contains a welcome banner with introduction", async () => {
    const page = await newE2EPage();
    await page.setContent("<comp-welcome-banner></comp-welcome-banner>");

    const element = await page.find("comp-welcome-banner >>> .banner-content");
    expect(element.textContent).toEqual(
      "hello,I'm Vicki, a software engineer passionate about accessibility. She/her."
    );
  });
});
