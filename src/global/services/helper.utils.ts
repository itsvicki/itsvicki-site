import {Build} from "@stencil/core";

/**
 * Find & return the first of passed selector, in the active route
 *
 * @param selector  what to search for
 * @returns HTMLElement | null
 */
const findFirstInActiveRoute = (
  selector: string = "h1, h2, h3"
): HTMLElement | null => {
  const recursivelyFindSelector = (
    selector: string,
    el: HTMLElement
  ): HTMLElement | null => {
    const shadowRoot: ShadowRoot = el.querySelector("*").shadowRoot;

    if (!shadowRoot) return null;

    const target: HTMLElement = shadowRoot.querySelector(selector);

    if (target) return target;

    return recursivelyFindSelector(selector, shadowRoot.querySelector("*"));
  };

  // Not elegant, but only way i could dynamically find the first heading to focus on
  const activeRoute: HTMLElement = document
    .querySelector("app-root")
    .shadowRoot.querySelector('stencil-route:not([style*="display: none"]');

  if (activeRoute === null) {
    // Wasn't able to find active route
    return null;
  }

  return recursivelyFindSelector(selector, activeRoute);
};

/**
 * Focus user on passed el
 *
 * @param selector  what to search for
 */
const moveUserFocusToEl = (selector: string = "h1, h2, h3"): void => {
  const target: HTMLElement | null = findFirstInActiveRoute(selector);

  if (target) {
    target.setAttribute("tabindex", "-1");
    target.focus();
  }
};

/**
 * Register the specified page with tracking mechanisms. All must be checked to see if
 * User has approved the cookie usage before writing
 * - Google Analytics
 *
 * @param page
 */
const registerViewWithTracking = (page: string): void => {
  // Google analytics
  if (Build.isBrowser && typeof (window as any).ga === "function") {
    (window as any).ga("send", "pageview", page);
  }
};

/**
 * Set canonical url or remove el if no URL specified
 *
 * @param url
 */
const setCanonicalUrl = (url: string = ""): void => {
  let canonicalEl = document.querySelector("link[rel='canonical']");
  console.log(canonicalEl);

  // If no URL, ensure the canonical el does not exist any more
  if (url === "") {
    if (canonicalEl) canonicalEl.remove();

    return;
  }

  // If URL supplied, ensure the el is updated
  if (!canonicalEl) canonicalEl = document.createElement("link");

  canonicalEl.setAttribute("rel", "canonical");
  canonicalEl.setAttribute("href", url);

  document.head.appendChild(canonicalEl);
};

export {moveUserFocusToEl, registerViewWithTracking, setCanonicalUrl};
