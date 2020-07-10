import {h, Build} from "@stencil/core";

/**
 * Format's an array of content into HTML that can be rendered
 *
 * @param data  array of content to render
 * @returns markup to render
 */
const toHypertext = (data: any) => {
  const tagBlacklist: Array<string> = [
    "script",
    "link",
    "meta",
    "object",
    "head",
    "html",
    "body",
  ];

  if (!Array.isArray(data)) {
    console.error("content error, hypertext is undefined");
    return null;
  }

  const args = [];
  for (let i = 0; i < data.length; i++) {
    let arg = data[i];

    if (
      i === 0 &&
      typeof arg === "string" &&
      tagBlacklist.indexOf(arg.toLowerCase().trim()) !== -1
    ) {
      arg = "template";
    } else if (i === 1 && arg) {
      const attrs: any = {};
      Object.keys(arg).forEach((key) => {
        const k = key.toLowerCase();
        if (!k.startsWith("on") && k !== "innerhtml") {
          attrs[key] = arg[key];
        }
      });

      arg = attrs;
    } else if (i > 1) {
      if (Array.isArray(arg)) {
        arg = toHypertext(arg);
      }
    }

    args.push(arg);
  }

  return (h as any).apply(null, args);
};

/**
 * Find & return the first of passed selector, in the active route
 *
 * @param selector  what to search for
 * @returns HTMLElement | null
 */
const findFirstInActiveRoute = (
  selector: string = "h1, h2, h3"
): HTMLElement | null => {
  // Not elegant, but only way i could dynamically find the first heading to focus on
  const activeRoute: HTMLElement = document
    .querySelector("app-root")
    .shadowRoot.querySelector('stencil-route:not([style*="display: none"]');

  if (activeRoute === null) {
    // Wasn't able to find active route
    return null;
  }

  const target: HTMLElement = activeRoute
    .querySelector("*")
    .shadowRoot.querySelector(selector);
  return target;
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

export {toHypertext, moveUserFocusToEl, registerViewWithTracking};
