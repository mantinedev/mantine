function isScrollable(element: HTMLElement) {
  const { overflow, overflowX, overflowY } = getComputedStyle(element);
  return /(auto|scroll|hidden)/.test(`${overflow} ${overflowX} ${overflowY}`);
}

export function isElementInView(element: HTMLElement) {
  const rect = element.getBoundingClientRect();

  if (rect.width === 0 && rect.height === 0) {
    return false;
  }

  const top = rect.top;
  const left = rect.left;
  const bottom = rect.top + rect.height;
  const right = rect.left + rect.width;

  if (top < 0 || left < 0 || bottom > window.innerHeight || right > window.innerWidth) {
    return false;
  }

  let parent = element.parentElement;

  while (parent && parent !== document.body) {
    if (isScrollable(parent)) {
      const parentRect = parent.getBoundingClientRect();
      const clientTop = parentRect.top + parent.clientTop;
      const clientLeft = parentRect.left + parent.clientLeft;

      if (
        top < clientTop ||
        left < clientLeft ||
        bottom > clientTop + parent.clientHeight ||
        right > clientLeft + parent.clientWidth
      ) {
        return false;
      }
    }

    parent = parent.parentElement;
  }

  return true;
}
