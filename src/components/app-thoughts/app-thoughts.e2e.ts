import {newE2EPage} from "@stencil/core/testing";

describe("app-thoughts", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<app-thoughts></app-thoughts>");

    const element = await page.find("app-thoughts");
    expect(element).not.toBeNull();
    expect(element).toHaveClass("hydrated");
  });
});
