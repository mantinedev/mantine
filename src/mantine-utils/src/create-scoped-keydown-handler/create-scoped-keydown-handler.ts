function findElementAncestor(element: HTMLElement, selector: string) {
  let _element = element;
  // eslint-disable-next-line no-cond-assign
  while ((_element = _element.parentElement) && !_element.matches(selector));
  return _element;
}

function getPreviousIndex(current: number, elements: HTMLButtonElement[], loop: boolean) {
  for (let i = current - 1; i >= 0; i -= 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }

  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }

  return current;
}

function getNextIndex(current: number, elements: HTMLButtonElement[], loop: boolean) {
  for (let i = current + 1; i < elements.length; i += 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }

  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }

  return current;
}

interface GetElementsSiblingsInput {
  /** Selector used to find parent node, e.g. '[role="tablist"]', '.mantine-Text-root' */
  parentSelector: string;

  /** Selector used to find element siblings, e.g. '[data-tab]' */
  siblingSelector: string;

  /** Determines whether next/previous indices should loop */
  loop?: boolean;

  /** External keydown event */
  onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>): void;
}

export function createScopedKeydownHandler({
  parentSelector,
  siblingSelector,
  onKeyDown,
  loop = true,
}: GetElementsSiblingsInput) {
  return (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    const elements: HTMLButtonElement[] = Array.from(
      findElementAncestor(event.currentTarget, parentSelector).querySelectorAll(siblingSelector)
    );

    const current = elements.findIndex((el) => event.currentTarget === el);

    switch (event.key) {
      case 'ArrowRight': {
        event.preventDefault();
        elements[getNextIndex(current, elements, loop)].focus();
        break;
      }

      case 'ArrowLeft': {
        event.preventDefault();
        elements[getPreviousIndex(current, elements, loop)].focus();
        break;
      }
    }
  };
}
