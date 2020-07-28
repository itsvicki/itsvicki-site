import {h} from "@stencil/core";
import marked from "marked";
import frontMatter from "front-matter";

/**
 * Format's markdown content into HTML that can be rendered
 *
 * @param data  markdown of content to render
 * @returns HTML to render
 */
const markdownToHtml = (markdownContents: any): string => {
  let htmlContents: string = "";

  try {
    let parsedMarkdown = frontMatter<any>(markdownContents);

    const renderer = new marked.Renderer();

    htmlContents = marked(parsedMarkdown.body, {
      renderer,
      headerIds: true,
    }).trim();

    return htmlContents;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

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

export {markdownToHtml, toHypertext};
