import { useCallback, useMemo, useRef, useState } from 'react';
import { useCallbackRef, useId, useUncontrolled } from '@mantine/hooks';

export type MenubarOpenSource = 'click' | 'hover';

export interface MenubarControllerOptions {
  /** Index of the controlled opened menu, `null` closes all menus */
  openIndex?: number | null;

  /** Index of the opened menu for uncontrolled component @default `null` */
  defaultOpenIndex?: number | null;

  /** Called when the opened menu changes with its index or `null` when all menus are closed */
  onOpenChange?: (index: number | null) => void;

  /** If set, menu navigation wraps from last to first menu and vice versa @default `true` */
  loop?: boolean;
}

export interface MenubarController {
  /** DOM order index of the opened menu, `null` when all menus are closed */
  openIndex: number | null;

  /** Sets the opened menu index directly, `null` closes all menus */
  setOpenIndex: (index: number | null) => void;

  /** DOM order index of the menu that holds the single menubar tab stop */
  activeIndex: number;

  /** Moves the menubar tab stop to the given menu without moving DOM focus */
  setActiveIndex: (index: number) => void;

  /** Resolved `loop` option, controls whether menu navigation wraps around */
  loop: boolean;

  /** Opens the menu at the given index and moves the tab stop to it. `source` records whether the menu was opened by click or hover: it decides whether dropdown transitions play and whether the next click on the target closes the menu. */
  openMenu: (index: number, source?: MenubarOpenSource) => void;

  /** Closes the opened menu, keeps the tab stop where it is */
  closeMenu: () => void;

  /** Closes the menu at the given index if it is opened, opens it otherwise */
  toggleMenu: (index: number, source?: MenubarOpenSource) => void;

  /** Moves the tab stop to the given menu and focuses its target, no-op when no `Menubar` is mounted with the controller */
  focusMenu: (index: number) => void;

  /** Focuses the next enabled menu relative to `activeIndex`, respects `loop` */
  focusNextMenu: () => void;

  /** Focuses the previous enabled menu relative to `activeIndex`, respects `loop` */
  focusPreviousMenu: () => void;

  /** Focuses the first enabled menu */
  focusFirstMenu: () => void;

  /** Focuses the last enabled menu */
  focusLastMenu: () => void;

  /** Focuses the first or last item of the menu at the given index once its dropdown is rendered. Call it after `openMenu`: it is a no-op if the menu is not opened by the time the dropdown renders. @default 'first' */
  focusMenuItem: (index: number, position?: 'first' | 'last') => void;

  /** Returns `true` if the menu at the given index is opened */
  isMenuOpen: (index: number) => boolean;

  /** Returns the number of `Menubar.Menu` components rendered by the associated `Menubar` */
  getMenuCount: () => number;

  /** Returns the indexes of the menus that are not disabled, in DOM order */
  getEnabledIndexes: () => number[];

  /** Returns how the opened menu was opened, `null` when all menus are closed */
  getOpenSource: () => MenubarOpenSource | null;

  /** Unique id of the menubar instance, used by `Menubar.Dropdown` to scope dropdown lookups */
  id: string;

  /** Registers the root element of the associated `Menubar`, used internally by `Menubar` as a ref callback */
  registerRoot: (node: HTMLDivElement | null) => () => void;

  /** Returns all top-level target buttons in DOM order, used internally by `Menubar.Target` */
  getTargets: () => HTMLButtonElement[];

  /** Returns the DOM order index of a `Menubar.Menu` by its id, used internally by `Menubar.Menu` */
  getMenuIndex: (id: string) => number;

  /** Returns the index of the next/previous enabled menu relative to `current`, used internally by `Menubar.Target` and `Menubar.Dropdown` */
  getAdjacentIndex: (current: number, direction: 1 | -1) => number;

  /** Focuses the target at the given index without moving the tab stop, used internally by `Menubar.Dropdown` */
  focusTarget: (index: number) => void;
}

const FOCUS_MENU_ITEM_DELAY = 40;

export function useMenubar(options: MenubarControllerOptions = {}): MenubarController {
  const { openIndex: openIndexProp, defaultOpenIndex, onOpenChange, loop = true } = options;

  const id = useId();

  const [openIndex, setOpenIndexState] = useUncontrolled<number | null>({
    value: openIndexProp,
    defaultValue: defaultOpenIndex,
    finalValue: null,
    onChange: onOpenChange,
  });

  const [activeIndex, setActiveIndexState] = useState(0);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const openSourceRef = useRef<MenubarOpenSource | null>(null);

  const openIndexRef = useRef(openIndex);
  openIndexRef.current = openIndex;

  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  const registerRoot = useCallback((node: HTMLDivElement | null) => {
    rootRef.current = node;

    return () => {
      if (rootRef.current === node) {
        rootRef.current = null;
      }
    };
  }, []);

  const getTargets = useCallback(
    () =>
      Array.from(
        rootRef.current?.querySelectorAll<HTMLButtonElement>('[data-menubar-target]') ?? []
      ),
    []
  );

  const getMenuIndex = useCallback(
    (menuId: string) =>
      getTargets().findIndex((node) => node.getAttribute('data-menubar-id') === menuId),
    [getTargets]
  );

  const getMenuCount = useCallback(() => getTargets().length, [getTargets]);

  const getEnabledIndexes = useCallback(
    () =>
      getTargets().reduce<number[]>((acc, node, index) => {
        if (!node.disabled && !node.hasAttribute('data-disabled')) {
          acc.push(index);
        }

        return acc;
      }, []),
    [getTargets]
  );

  const getOpenSource = useCallback(() => openSourceRef.current, []);

  const isMenuOpen = useCallback((index: number) => openIndexRef.current === index, []);

  const focusTarget = useCallback(
    (index: number) => {
      getTargets()[index]?.focus();
    },
    [getTargets]
  );

  const writeOpenIndex = useCallbackRef(
    (index: number | null, source: MenubarOpenSource | null) => {
      openSourceRef.current = source;

      if (openIndexProp === undefined) {
        openIndexRef.current = index;
      }

      setOpenIndexState(index);
    }
  );

  const setOpenIndex = useCallbackRef((index: number | null) => {
    writeOpenIndex(index, index === null ? null : 'click');
  });

  const setActiveIndex = useCallbackRef((index: number) => {
    activeIndexRef.current = index;
    setActiveIndexState(index);
  });

  const openMenu = useCallbackRef((index: number, source: MenubarOpenSource = 'click') => {
    setActiveIndex(index);
    writeOpenIndex(index, source);
  });

  const closeMenu = useCallbackRef(() => {
    writeOpenIndex(null, null);
  });

  const toggleMenu = useCallbackRef((index: number, source: MenubarOpenSource = 'click') => {
    if (openIndexRef.current === index) {
      closeMenu();
    } else {
      openMenu(index, source);
    }
  });

  const getAdjacentIndex = useCallbackRef((current: number, direction: 1 | -1) => {
    const enabled = getEnabledIndexes();

    if (enabled.length === 0) {
      return current;
    }

    const currentPosition = enabled.indexOf(current);
    let nextPosition = currentPosition === -1 ? 0 : currentPosition + direction;

    if (loop) {
      nextPosition = (nextPosition + enabled.length) % enabled.length;
    } else {
      nextPosition = Math.max(0, Math.min(enabled.length - 1, nextPosition));
    }

    return enabled[nextPosition] ?? current;
  });

  const focusMenu = useCallbackRef((index: number) => {
    setActiveIndex(index);
    focusTarget(index);
  });

  const focusAdjacentMenu = useCallbackRef((direction: 1 | -1) => {
    const next = getAdjacentIndex(activeIndexRef.current, direction);
    focusMenu(next);

    if (openIndexRef.current !== null) {
      openMenu(next, 'click');
    }
  });

  const focusNextMenu = useCallbackRef(() => focusAdjacentMenu(1));

  const focusPreviousMenu = useCallbackRef(() => focusAdjacentMenu(-1));

  const focusEdgeMenu = useCallbackRef((edge: 'first' | 'last') => {
    const enabled = getEnabledIndexes();

    if (enabled.length === 0) {
      return;
    }

    focusMenu(edge === 'first' ? enabled[0] : enabled[enabled.length - 1]);
  });

  const focusFirstMenu = useCallbackRef(() => focusEdgeMenu('first'));

  const focusLastMenu = useCallbackRef(() => focusEdgeMenu('last'));

  const focusMenuItem = useCallbackRef((index: number, position: 'first' | 'last' = 'first') => {
    window.setTimeout(() => {
      if (openIndexRef.current !== index) {
        return;
      }

      const target = getTargets()[index];
      const controls = target?.getAttribute('aria-controls');
      const dropdown = controls
        ? document.getElementById(controls)
        : document.querySelector<HTMLElement>(`[data-menubar-dropdown="${id}"]`);
      const items = dropdown?.querySelectorAll<HTMLElement>(
        '[data-menu-item]:not([data-disabled])'
      );

      if (items && items.length > 0) {
        const item = position === 'first' ? items[0] : items[items.length - 1];
        item?.focus();
      }
    }, FOCUS_MENU_ITEM_DELAY);
  });

  return useMemo(
    () => ({
      openIndex,
      setOpenIndex,
      activeIndex,
      setActiveIndex,
      loop,
      openMenu,
      closeMenu,
      toggleMenu,
      focusMenu,
      focusNextMenu,
      focusPreviousMenu,
      focusFirstMenu,
      focusLastMenu,
      focusMenuItem,
      isMenuOpen,
      getMenuCount,
      getEnabledIndexes,
      getOpenSource,
      id,
      registerRoot,
      getTargets,
      getMenuIndex,
      getAdjacentIndex,
      focusTarget,
    }),
    [openIndex, activeIndex, loop, id]
  );
}
