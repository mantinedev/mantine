const TABBABLE_NODES = /input|select|textarea|button|object|summary|iframe/;
export const FOCUS_SELECTOR =
  'a, input, select, textarea, button, object, summary, iframe, audio[controls], video[controls], [contenteditable], [tabindex]';

function isContentEditable(element: HTMLElement) {
  const value = element.getAttribute('contenteditable');
  return value !== null && value !== 'false';
}

function hasMediaControls(element: HTMLElement) {
  const nodeName = element.nodeName.toLowerCase();
  return (nodeName === 'audio' || nodeName === 'video') && element.hasAttribute('controls');
}

function hidden(element: HTMLElement) {
  if (process.env.NODE_ENV === 'test') {
    return false;
  }

  return element.style.display === 'none';
}

function visible(element: HTMLElement) {
  const isHidden =
    element.getAttribute('aria-hidden') ||
    element.getAttribute('hidden') ||
    element.getAttribute('type') === 'hidden';

  if (isHidden) {
    return false;
  }

  let parentElement: HTMLElement = element;
  while (parentElement) {
    if (parentElement === document.body || parentElement.nodeType === 11) {
      break;
    }

    if (hidden(parentElement)) {
      return false;
    }

    parentElement = parentElement.parentNode as HTMLElement;
  }

  return true;
}

function getElementTabIndex(element: HTMLElement) {
  let tabIndex: string | null | undefined = element.getAttribute('tabindex');
  if (tabIndex === null) {
    tabIndex = undefined;
  }
  return parseInt(tabIndex as string, 10);
}

export function focusable(element: HTMLElement) {
  const nodeName = element.nodeName.toLowerCase();
  const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
  const res =
    // @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition
    (TABBABLE_NODES.test(nodeName) && !element.disabled) ||
    isContentEditable(element) ||
    hasMediaControls(element) ||
    (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);

  return res && visible(element);
}

export function tabbable(element: HTMLElement) {
  const tabIndex = getElementTabIndex(element);
  const isTabIndexNaN = Number.isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
}

export function findTabbableDescendants(element: HTMLElement): HTMLElement[] {
  const elements = Array.from(element.querySelectorAll<HTMLElement>(FOCUS_SELECTOR)).filter(
    tabbable
  );
  const positive = elements
    .filter((item) => getElementTabIndex(item) > 0)
    .sort((a, b) => getElementTabIndex(a) - getElementTabIndex(b));
  const regular = elements.filter((item) => !(getElementTabIndex(item) > 0));
  return [...positive, ...regular];
}
