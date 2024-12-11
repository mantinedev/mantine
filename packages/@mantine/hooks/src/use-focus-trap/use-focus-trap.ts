import { useCallback, useEffect, useRef } from 'react';
import { scopeTab } from './scope-tab';
import { FOCUS_SELECTOR, focusable, tabbable } from './tabbable';

export function useFocusTrap(active = true): (instance: HTMLElement | null) => void {
  const ref = useRef<HTMLElement>(null);

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

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      if (!active) {
        return;
      }

      if (node === null) {
        return;
      }

      if (ref.current === node) {
        return;
      }

      if (node) {
        // Delay processing the HTML node by a frame. This ensures focus is assigned correctly.
        setTimeout(() => {
          if (node.getRootNode()) {
            focusNode(node);
          } else if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.warn('[@mantine/hooks/use-focus-trap] Ref node is not part of the dom', node);
          }
        });

        ref.current = node;
      } else {
        ref.current = null;
      }
    },
    [active]
  );

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    ref.current && setTimeout(() => focusNode(ref.current!));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && ref.current) {
        scopeTab(ref.current, event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [active]);

  return setRef;
}
