import { useCallback, useEffect, useRef } from 'react';

interface UseToolbarNavigationOptions {
  orientation: 'horizontal' | 'vertical';
  loop: boolean;
  dir: 'ltr' | 'rtl';
}

export function useToolbarNavigation({ orientation, loop, dir }: UseToolbarNavigationOptions) {
  const toolbarRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLElement | null>(null);

  const getFocusableItems = useCallback((): HTMLElement[] => {
    if (!toolbarRef.current) {
      return [];
    }
    return Array.from(
      toolbarRef.current.querySelectorAll<HTMLElement>('[data-toolbar-toggle]:not([data-disabled])')
    );
  }, []);

  const syncTabIndex = useCallback(() => {
    const items = getFocusableItems();
    const tabStop =
      activeItemRef.current && items.includes(activeItemRef.current)
        ? activeItemRef.current
        : items[0];

    items.forEach((item) => {
      item.setAttribute('tabindex', item === tabStop ? '0' : '-1');
    });
  }, [getFocusableItems]);

  useEffect(() => {
    syncTabIndex();

    const node = toolbarRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new MutationObserver(syncTabIndex);
    observer.observe(node, { childList: true, subtree: true, attributeFilter: ['data-disabled'] });

    return () => observer.disconnect();
  }, [syncTabIndex]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const items = getFocusableItems();
      if (items.length === 0) {
        return;
      }

      const currentIndex = items.findIndex((item) => item === document.activeElement);
      if (currentIndex === -1) {
        return;
      }

      let nextIndex: number | null = null;

      const forwardKey = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
      const backwardKey = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';

      const isForward =
        (orientation === 'horizontal' && event.key === forwardKey) ||
        (orientation === 'vertical' && event.key === 'ArrowDown');

      const isBackward =
        (orientation === 'horizontal' && event.key === backwardKey) ||
        (orientation === 'vertical' && event.key === 'ArrowUp');

      if (isForward) {
        event.preventDefault();
        if (currentIndex < items.length - 1) {
          nextIndex = currentIndex + 1;
        } else if (loop) {
          nextIndex = 0;
        }
      } else if (isBackward) {
        event.preventDefault();
        if (currentIndex > 0) {
          nextIndex = currentIndex - 1;
        } else if (loop) {
          nextIndex = items.length - 1;
        }
      } else if (event.key === 'Home') {
        event.preventDefault();
        nextIndex = 0;
      } else if (event.key === 'End') {
        event.preventDefault();
        nextIndex = items.length - 1;
      }

      if (nextIndex !== null) {
        items[nextIndex].focus();
      }
    },
    [orientation, loop, dir, getFocusableItems]
  );

  const handleItemFocus = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement;
      if (getFocusableItems().includes(target)) {
        activeItemRef.current = target;
        syncTabIndex();
      }
    },
    [getFocusableItems, syncTabIndex]
  );

  return { toolbarRef, handleKeyDown, handleItemFocus };
}
