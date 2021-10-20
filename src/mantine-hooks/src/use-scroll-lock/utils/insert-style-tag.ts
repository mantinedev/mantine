export function insertStyleTag(tag) {
  const head = document.head || document.getElementsByTagName('head')[0];

  head.appendChild(tag);
}
