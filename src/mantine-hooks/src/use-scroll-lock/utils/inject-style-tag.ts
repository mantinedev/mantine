export function injectStyles(tag, css): void {
  if (tag.styleSheet) {
    // eslint-disable-next-line no-param-reassign
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
