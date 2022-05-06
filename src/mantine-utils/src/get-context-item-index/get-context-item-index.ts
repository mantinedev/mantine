import { findElementAncestor } from '../find-element-ancestor/find-element-ancestor';

export function getContextItemIndex(
  elementSelector: string,
  parentSelector: string,
  node: HTMLElement
) {
  if (!node) {
    return -1;
  }

  return Array.from(
    findElementAncestor(node, parentSelector).querySelectorAll(elementSelector)
  ).findIndex((element) => element === node);
}
