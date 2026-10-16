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
      setTimeout(() => {
        if (node.getRootNode()) {
          focusNode(node);
        } else if (process.env.NODE_ENV === 'development') {
          // oxlint-disable-next-line no-console
          console.warn('[@mantine/hooks/use-focus-trap] Ref node is not part of the dom', node);
        }
      });

      ref.current = node;
    },
    [active]
  );

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    if (ref.current) {
      setTimeout(() => {
        if (ref.current) {
          focusNode(ref.current);
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
      activeTraps.delete(ref);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);

  return setRef;
}
