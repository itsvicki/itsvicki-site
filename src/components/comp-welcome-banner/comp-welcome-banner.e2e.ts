import {newE2EPage} from "@stencil/core/testing";

import {githubUrl, linkedInUrl} from "../../global/site-structure-utils";

describe("comp-welcome-banner", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<comp-welcome-banner></comp-welcome-banner>");

    const element = await page.find("comp-welcome-banner");
    expect(element).not.toBeNull();
    expect(element).toHaveClass("hydrated");
  });

  it("contains a welcome banner with introduction", async () => {
    const page = await newE2EPage();
    await page.setContent("<comp-welcome-banner></comp-welcome-banner>");

    const element = await page.find(
      "comp-welcome-banner >>> .content .introduction"
    );
    expect(element.textContent).toEqual(
      "Hej hej!I'm Vicki, a software engineer/manager passionate about accessibility whilst creating interactive and creative sites."
    );
  });

  it("contains a welcome banner with link to about", async () => {
    const page = await newE2EPage();
    await page.setContent("<comp-welcome-banner></comp-welcome-banner>");

    const element = await page.find("comp-welcome-banner >>> .content .more");
    expect(element.textContent).toEqual("Get to know me");
    expect(element.getAttribute("href")).toEqual("/about");
  });

  it("contains a welcome banner with quick link to github", async () => {
    const page = await newE2EPage();
    await page.setContent("<comp-welcome-banner></comp-welcome-banner>");

    const element = await page.find(
      "comp-welcome-banner >>> .content .quick-links .github"
    );
    expect(element.textContent).toEqual("Vicki's Github page");
    expect(element.getAttribute("href")).toEqual(githubUrl);
  });

  it("contains a welcome banner with quick link to linkedin", async () => {
    const page = await newE2EPage();
    await page.setContent("<comp-welcome-banner></comp-welcome-banner>");

    const element = await page.find(
      "comp-welcome-banner >>> .content .quick-links .linkedin"
    );
    expect(element.textContent).toEqual("Vicki's LinkedIn page");
    expect(element.getAttribute("href")).toEqual(linkedInUrl);
  });
});
