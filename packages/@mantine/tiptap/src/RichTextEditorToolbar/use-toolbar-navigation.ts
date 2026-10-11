import { useCallback, useEffect, useRef } from 'react';

const CONTROL_SELECTOR = '[data-rich-text-editor-control][data-interactive]';
const ITEM_SELECTOR = `${CONTROL_SELECTOR}:not(:disabled)`;

export function useToolbarNavigation(dir: 'ltr' | 'rtl') {
  const toolbarRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLElement | null>(null);

  const getItems = useCallback((selector = ITEM_SELECTOR): HTMLElement[] => {
    if (!toolbarRef.current) {
      return [];
    }

    return Array.from(toolbarRef.current.querySelectorAll<HTMLElement>(selector));
  }, []);

  const syncTabIndex = useCallback(() => {
    const items = getItems();
    const tabStop =
      activeItemRef.current && items.includes(activeItemRef.current)
        ? activeItemRef.current
        : items[0];

    getItems(CONTROL_SELECTOR).forEach((item) => {
      const tabIndex = item === tabStop ? '0' : '-1';
      if (item.getAttribute('tabindex') !== tabIndex) {
        item.setAttribute('tabindex', tabIndex);
      }
    });
  }, [getItems]);

  useEffect(() => {
    syncTabIndex();

    const node = toolbarRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new MutationObserver(syncTabIndex);
    observer.observe(node, {
      childList: true,
      subtree: true,
      attributeFilter: ['disabled', 'data-interactive'],
    });

    return () => observer.disconnect();
  }, [syncTabIndex]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const items = getItems();
      const currentIndex = items.findIndex((item) => item === event.target);
      if (currentIndex === -1) {
        return;
      }

      const forwardKey = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
      const backwardKey = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
      let nextIndex: number | null = null;

      if (event.key === forwardKey) {
        nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      } else if (event.key === backwardKey) {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      } else if (event.key === 'Home') {
        nextIndex = 0;
      } else if (event.key === 'End') {
        nextIndex = items.length - 1;
      }

      if (nextIndex !== null) {
        event.preventDefault();
        items[nextIndex].focus();
      }
    },
    [dir, getItems]
  );

  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement;
      if (getItems().includes(target)) {
        activeItemRef.current = target;
        syncTabIndex();
      }
    },
    [getItems, syncTabIndex]
  );

  return { toolbarRef, handleKeyDown, handleFocus };
}
