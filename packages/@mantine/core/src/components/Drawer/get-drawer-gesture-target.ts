import { DrawerAxis, DrawerPosition } from './use-drawer-transform';

const INTERACTIVE_TAGS = ['input', 'textarea', 'select', 'button', 'a'];

const GESTURE_OWNER_SELECTOR =
  '[role="slider"], [role="scrollbar"], [role="separator"], [draggable="true"], [data-drawer-no-swipe]';

function claimsAxisGesture(element: HTMLElement, axis: DrawerAxis): boolean {
  const touchAction = window.getComputedStyle(element).touchAction;

  if (!touchAction || touchAction === 'auto' || touchAction === 'manipulation') {
    return false;
  }

  return !(axis === 'x' ? /pan-(x|left|right)/ : /pan-(y|up|down)/).test(touchAction);
}

export function ownsGesture(
  target: HTMLElement | null,
  boundary: HTMLElement | null,
  axis: DrawerAxis
): boolean {
  let current: HTMLElement | null = target;

  while (current && current !== boundary) {
    const tagName = current.tagName?.toLowerCase();

    if (
      INTERACTIVE_TAGS.includes(tagName) ||
      current.isContentEditable ||
      current.hasAttribute('contenteditable') ||
      current.matches(GESTURE_OWNER_SELECTOR) ||
      claimsAxisGesture(current, axis)
    ) {
      return true;
    }

    current = current.parentElement;
  }

  return false;
}

export function isScrollAtEdge(element: HTMLElement | null, position: DrawerPosition): boolean {
  if (!element) {
    return true;
  }

  switch (position) {
    case 'bottom':
      return element.scrollTop <= 0;
    case 'top':
      return element.scrollTop + element.clientHeight >= element.scrollHeight;
    case 'left':
      return element.scrollLeft + element.clientWidth >= element.scrollWidth;
    case 'right':
    default:
      return element.scrollLeft <= 0;
  }
}

function isScrollableAlongAxis(element: HTMLElement, axis: DrawerAxis): boolean {
  const style = window.getComputedStyle(element);
  const overflow = axis === 'y' ? style.overflowY : style.overflowX;

  if (overflow !== 'auto' && overflow !== 'scroll') {
    return false;
  }

  return axis === 'y'
    ? element.scrollHeight > element.clientHeight
    : element.scrollWidth > element.clientWidth;
}

export function resolveScrollContainer(
  target: HTMLElement | null,
  boundary: HTMLElement | null,
  axis: DrawerAxis
): HTMLElement | null {
  let current: HTMLElement | null = target;

  while (current) {
    if (isScrollableAlongAxis(current, axis)) {
      return current;
    }

    if (current === boundary) {
      break;
    }

    current = current.parentElement;
  }

  return null;
}
