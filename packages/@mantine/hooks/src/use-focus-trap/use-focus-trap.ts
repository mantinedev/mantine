import { useCallback, useEffect, useRef } from 'react';
import { scopeTab } from './scope-tab';
import { FOCUS_SELECTOR, focusable, tabbable } from './tabbable';

const activeTraps = new Set<React.RefObject<HTMLElement | null>>();

function hasNestedActiveTrap(ref: React.RefObject<HTMLElement | null>, node: HTMLElement) {
  const activeElement = (node.getRootNode() as unknown as DocumentOrShadowRoot).activeElement;
  if (!activeElement) {
    return false;
  }

  for (const trap of activeTraps) {
    const nested = trap.current;
    if (
      trap !== ref &&
      nested &&
      nested !== node &&
      node.contains(nested) &&
      nested.contains(activeElement)
    ) {
      return true;
    }
  }

  return false;
}

export function useFocusTrap(active = true): React.RefCallback<HTMLElement | null> {
  const ref = useRef<HTMLElement>(null);
  const focusTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearFocusTimeout = useCallback(() => {
    if (focusTimeout.current !== null) {
      clearTimeout(focusTimeout.current);
      focusTimeout.current = null;
    }
  }, []);

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
      // oxlint-disable-next-line no-console
      console.warn(
        '[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node',
        node
      );
    }
  };

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      clearFocusTimeout();

      if (!active) {
        return;
      }

      if (node === null) {
        ref.current = null;
        return;
      }

      if (ref.current === node) {
        return;
      }

      // Delay processing the HTML node by a frame. This ensures focus is assigned correctly.
      focusTimeout.current = setTimeout(() => {
        focusTimeout.current = null;
        if (ref.current !== node) {
          return;
        }

        if (node.isConnected) {
          focusNode(node);
        } else if (process.env.NODE_ENV === 'development') {
          // oxlint-disable-next-line no-console
          console.warn('[@mantine/hooks/use-focus-trap] Ref node is not part of the dom', node);
        }
      });

      ref.current = node;
    },
    [active, clearFocusTimeout]
  );

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    if (ref.current) {
      const node = ref.current;
      clearFocusTimeout();
      focusTimeout.current = setTimeout(() => {
        focusTimeout.current = null;
        if (ref.current === node && node.isConnected) {
          focusNode(node);
        }
      });
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key !== 'Tab' ||
        event.defaultPrevented ||
        !ref.current ||
        hasNestedActiveTrap(ref, ref.current)
      ) {
        return;
      }

      scopeTab(ref.current, event);
    };

    activeTraps.add(ref);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      clearFocusTimeout();
      activeTraps.delete(ref);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [active, clearFocusTimeout]);

  return setRef;
}
