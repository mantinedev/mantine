import { findElementAncestor } from '../find-element-ancestor/find-element-ancestor';

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

/** Validates that target element is on the same level as sibling, used to filter out children that have the same sibling selector */
function onSameLevel(
  target: HTMLButtonElement,
  sibling: HTMLButtonElement,
  parentSelector: string
) {
  return (
    findElementAncestor(target, parentSelector) === findElementAncestor(sibling, parentSelector)
  );
}

interface GetElementsSiblingsInput {
  /** Selector used to find parent node, e.g. '[role="tablist"]', '.mantine-Text-root' */
  parentSelector: string;

  /** Selector used to find element siblings, e.g. '[data-tab]' */
  siblingSelector: string;

  /** Determines whether next/previous indices should loop */
  loop?: boolean;

  /** Determines which arrow keys will be used */
  orientation: 'vertical' | 'horizontal';

  /** Text direction */
  dir?: 'rtl' | 'ltr';

  /** Determines whether element should be clicked when focused with keyboard event */
  activateOnFocus?: boolean;

  /** External keydown event */
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export function createScopedKeydownHandler({
  parentSelector,
  siblingSelector,
  onKeyDown,
  loop = true,
  activateOnFocus = false,
  dir = 'rtl',
  orientation,
}: GetElementsSiblingsInput) {
  return (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    const elements = Array.from(
      findElementAncestor(event.currentTarget, parentSelector)?.querySelectorAll<HTMLButtonElement>(
        siblingSelector
      ) || []
    ).filter((node) => onSameLevel(event.currentTarget, node, parentSelector));

    const current = elements.findIndex((el) => event.currentTarget === el);
    const _nextIndex = getNextIndex(current, elements, loop);
    const _previousIndex = getPreviousIndex(current, elements, loop);
    const nextIndex = dir === 'rtl' ? _previousIndex : _nextIndex;
    const previousIndex = dir === 'rtl' ? _nextIndex : _previousIndex;

    switch (event.key) {
      case 'ArrowRight': {
        if (orientation === 'horizontal') {
          event.stopPropagation();
          event.preventDefault();
          elements[nextIndex].focus();
          activateOnFocus && elements[nextIndex].click();
        }

        break;
      }

      case 'ArrowLeft': {
        if (orientation === 'horizontal') {
          event.stopPropagation();
          event.preventDefault();
          elements[previousIndex].focus();
          activateOnFocus && elements[previousIndex].click();
        }

        break;
      }

      case 'ArrowUp': {
        if (orientation === 'vertical') {
          event.stopPropagation();
          event.preventDefault();
          elements[_previousIndex].focus();
          activateOnFocus && elements[_previousIndex].click();
        }

        break;
      }

      case 'ArrowDown': {
        if (orientation === 'vertical') {
          event.stopPropagation();
          event.preventDefault();
          elements[_nextIndex].focus();
          activateOnFocus && elements[_nextIndex].click();
        }

        break;
      }

      case 'Home': {
        event.stopPropagation();
        event.preventDefault();
        !elements[0].disabled && elements[0].focus();
        break;
      }

      case 'End': {
        event.stopPropagation();
        event.preventDefault();
        const last = elements.length - 1;
        !elements[last].disabled && elements[last].focus();
        break;
      }
    }
  };
}
