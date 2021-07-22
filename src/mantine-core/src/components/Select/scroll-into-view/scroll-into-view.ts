export function scrollIntoView(parent: HTMLElement, child: HTMLElement) {
  if (parent instanceof HTMLElement && child instanceof HTMLElement) {
    const parentRect = parent.getBoundingClientRect();
    const parentViewableArea = {
      height: parent.clientHeight,
      width: parent.clientWidth,
    };

    const childRect = child.getBoundingClientRect();
    const isViewable =
      childRect.top >= parentRect.top &&
      childRect.top <= parentRect.top + parentViewableArea.height;

    if (!isViewable) {
      // eslint-disable-next-line no-param-reassign
      parent.scrollTop = childRect.top + parent.scrollTop - parentRect.top;
    }
  }
}
