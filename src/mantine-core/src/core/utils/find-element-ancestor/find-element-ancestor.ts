export function findElementAncestor(element: HTMLElement, selector: string) {
  let _element: HTMLElement | null = element;
  // eslint-disable-next-line no-cond-assign
  while ((_element = _element.parentElement) && !_element.matches(selector));
  return _element;
}
