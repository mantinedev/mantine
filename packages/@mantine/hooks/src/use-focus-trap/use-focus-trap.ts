import { useCallback } from 'react';
import { scopeTab } from './scope-tab';
import { FOCUS_SELECTOR, focusable, tabbable } from './tabbable';

const focusNode = (node: HTMLElement) => {
  let focusElement: HTMLElement | null = node.querySelector('[data-autofocus]');

  if (!focusElement) {
    const children = Array.from<HTMLElement>(node.querySelectorAll(FOCUS_SELECTOR));
    focusElement = children.find(tabbable) || children.find(focusable) || null;
    if (!focusElement && focusable(node)) {
      focusElement = node;
    }
  }

  if (focusElement) {
    focusElement.focus({ preventScroll: true });
  } else if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(
      '[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node',
      node
    );
  }
};

export function useFocusTrap(active = true): React.RefCallback<HTMLElement | null> {
  return useCallback(
    (node: HTMLElement | null) => {
      if (!active) {
        return;
      }

      if (node === null) {
        return;
      }

      // Delay processing the HTML node by a frame. This ensures focus is assigned correctly.
      setTimeout(() => {
        if (node.getRootNode()) {
          focusNode(node);
        } else if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn('[@mantine/hooks/use-focus-trap] Ref node is not part of the dom', node);
        }
      });

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          scopeTab(node, event);
        }
      };
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    },
    [active]
  );
}
