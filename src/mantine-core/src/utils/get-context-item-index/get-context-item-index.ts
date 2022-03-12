/* eslint-disable no-cond-assign */

function findAncestor(element: HTMLElement, className: string) {
  let _element = element;
  while ((_element = _element.parentElement) && !_element.classList.contains(className));
  return _element;
}

export function getContextItemIndex(
  options: { elementSelector: string; parentClassName: string },
  node: HTMLElement
) {
  if (!node) {
    return -1;
  }

  return Array.from(
    findAncestor(node, options.parentClassName).querySelectorAll(options.elementSelector)
  ).findIndex((element) => element === node);
}
