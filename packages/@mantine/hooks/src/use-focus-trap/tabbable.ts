const TABBABLE_NODES = /input|select|textarea|button|object/;
export const FOCUS_SELECTOR = 'a, input, select, textarea, button, object, [tabindex]';

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

  let parentElement: HTMLElement | null = element;
  while (parentElement) {
    const isDocumentFragment = parentElement.nodeType === 11;
    if (parentElement === document.body || isDocumentFragment) {
      break;
    }

    if (hidden(parentElement)) {
      return false;
    }

    parentElement = parentElement.parentElement;
  }

  return true;
}

function getElementTabIndex(element: HTMLElement) {
  const tabIndex = element.getAttribute('tabindex');
  if (tabIndex === null) {
    return NaN;
  }
  return parseInt(tabIndex, 10);
}

const isTabbableElement = (element: HTMLElement) => {
  const nodeName = element.nodeName.toLowerCase();
  return TABBABLE_NODES.test(nodeName) && !element.hasAttribute('disabled');
};

const isAnchorFocusable = (element: HTMLElement) => {
  return element.hasAttribute('href') || hasExplicitTabIndex(element);
};

const hasExplicitTabIndex = (element: HTMLElement) => {
  return !Number.isNaN(getElementTabIndex(element));
};

const isFocusableElement = (element: HTMLElement) => {
  if (element instanceof HTMLAnchorElement) {
    return isAnchorFocusable(element);
  }
  return hasExplicitTabIndex(element);
};

export function focusable(element: HTMLElement) {
  const isTabbable = isTabbableElement(element);
  const isFocusable = isFocusableElement(element);

  return (isTabbable || isFocusable) && visible(element);
}

function isNegativeTabIndex(element: HTMLElement) {
  const tabIndex = getElementTabIndex(element);
  return !Number.isNaN(tabIndex) && tabIndex < 0;
}

export function tabbable(element: HTMLElement) {
  return !isNegativeTabIndex(element) && focusable(element);
}
