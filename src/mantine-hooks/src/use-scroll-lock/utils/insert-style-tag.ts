export function insertStyleTag(tag: HTMLStyleElement) {
  const head = document.head || document.getElementsByTagName('head')[0];

  head.appendChild(tag);
}
