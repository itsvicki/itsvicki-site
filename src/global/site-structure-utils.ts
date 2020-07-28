export const defaultPageMetaDescription =
  "itsvicki.dev is a personal website for Vicki, software engineer/manager working across Stockholm, Sweden and UK";

export const githubUrl = "https://github.com/itsvicki";
export const linkedInUrl = "https://www.linkedin.com/in/itsvicki";
export const devToUrl = "https://dev.to/itsvicki";

export const fileNotFound = () => {
  const metaTag = document.createElement("meta");
  metaTag.setAttribute("http-equiv", "status");
  metaTag.setAttribute("content", "404");
  document.head.appendChild(metaTag);
};
