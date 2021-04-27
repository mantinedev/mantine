import { useCallback, useEffect, useRef } from 'react';
import {
  markForFocusLater,
  returnFocus,
  setupScopedFocus,
  teardownScopedFocus,
} from './focus-manager';
import { FOCUS_SELECTOR, focusable, tabbable } from './tabbable';
import { scopeTab } from './scope-tab';
import { createAriaHider } from './create-aria-hider';

export function useFocusTrap(active = true): (instance: HTMLElement) => void {
  const ref = useRef<HTMLElement | null>();
  const restoreAria = useRef<Function | null>(null);

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      if (restoreAria.current) {
        restoreAria.current();
      }
      if (ref.current) {
        returnFocus();
        teardownScopedFocus();
      }
      if (active && node) {
        setupScopedFocus(node);
        markForFocusLater();

        const processNode = (_node: HTMLElement) => {
          restoreAria.current = createAriaHider(_node);

          let focusElement: HTMLElement | null = null;

          if (!focusElement) {
            const children = Array.from<HTMLElement>(node.querySelectorAll(FOCUS_SELECTOR));
            focusElement = children.find(tabbable) || children.find(focusable) || null;
            if (!focusElement && focusable(node)) focusElement = node;
          }

          if (focusElement) {
            focusElement.focus();
          } else if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.warn(
              '[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node',
              node
            );
          }
        };

        // Delay processing the HTML node by a frame. This ensures focus is assigned correctly.
        setTimeout(() => {
          if (node.ownerDocument) {
            processNode(node);
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
    if (!active) return undefined;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && ref.current) {
        scopeTab(ref.current, event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);

  return setRef;
}
