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

  /** Text direction */
  dir?: 'rtl' | 'ltr';

  /** External keydown event */
  onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>): void;
}

export function createScopedKeydownHandler({
  parentSelector,
  siblingSelector,
  onKeyDown,
  loop = true,
  dir = 'rtl',
}: GetElementsSiblingsInput) {
  return (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    const elements: HTMLButtonElement[] = Array.from(
      findElementAncestor(event.currentTarget, parentSelector).querySelectorAll(siblingSelector)
    );

    const current = elements.findIndex((el) => event.currentTarget === el);
    const _nextIndex = getNextIndex(current, elements, loop);
    const _previousIndex = getPreviousIndex(current, elements, loop);
    const nextIndex = dir === 'rtl' ? _previousIndex : _nextIndex;
    const previousIndex = dir === 'rtl' ? _nextIndex : _previousIndex;

    switch (event.key) {
      case 'ArrowRight': {
        event.preventDefault();
        elements[nextIndex].focus();
        break;
      }

      case 'ArrowLeft': {
        event.preventDefault();
        elements[previousIndex].focus();
        break;
      }

      case 'Home': {
        event.preventDefault();
        !elements[0].disabled && elements[0].focus();
        break;
      }

      case 'End': {
        event.preventDefault();
        const last = elements.length - 1;
        !elements[last].disabled && elements[last].focus();
        break;
      }
    }
  };
}
