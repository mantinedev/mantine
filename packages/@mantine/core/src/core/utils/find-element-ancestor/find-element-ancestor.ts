/* eslint-disable no-empty */
export function findElementAncestor(element: HTMLElement, selector: string) {
  let _element: HTMLElement | null = element;
  while ((_element = _element.parentElement) && !_element.matches(selector)) {}
  return _element;
}
