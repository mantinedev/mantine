import { findElementAncestor } from '../find-element-ancestor/find-element-ancestor';

export function getContextItemIndex(
  elementSelector: string,
  parentSelector: string,
  node: HTMLElement
) {
  if (!node) {
    return null;
  }

  return Array.from(
    findElementAncestor(node, parentSelector)?.querySelectorAll(elementSelector) || []
  ).findIndex((element) => element === node);
}
