import { useCallback, useRef, useState } from 'react';
import { useId, useIsomorphicEffect, useMergedRef, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { FloatingPosition } from '../../utils/Floating';
import { MenubarContextProvider, type MenubarContextValue } from './Menubar.context';
import { MenubarDropdown, type MenubarDropdownProps } from './MenubarDropdown/MenubarDropdown';
import { MenubarMenu, type MenubarMenuProps } from './MenubarMenu/MenubarMenu';
import { MenubarTarget, type MenubarTargetProps } from './MenubarTarget/MenubarTarget';
import classes from './Menubar.module.css';

export type MenubarStylesNames = 'root' | 'target';

export type MenubarFactory = Factory<{
  props: MenubarProps;
  ref: HTMLDivElement;
  stylesNames: MenubarStylesNames;
  staticComponents: {
    Menu: typeof MenubarMenu;
    Target: typeof MenubarTarget;
    Dropdown: typeof MenubarDropdown;
  };
}>;

export interface MenubarProps
  extends BoxProps, StylesApiProps<MenubarFactory>, ElementProps<'div'> {
  /** `Menubar.Menu` components */
  children?: React.ReactNode;

  /** Index of the controlled opened menu, `null` closes all menus */
  openIndex?: number | null;

  /** Index of the opened menu for uncontrolled component @default `null` */
  defaultOpenIndex?: number | null;

  /** Called when the opened menu changes with its index or `null` when all menus are closed */
  onOpenChange?: (index: number | null) => void;

  /** Event that opens a menu when none of the menus is opened. `'click'` opens a menu on target click and then switches menus on hover (desktop application pattern), `'hover'` opens a menu when the target is hovered @default `'click'` */
  trigger?: 'click' | 'hover';

  /** If set, arrow key navigation wraps from last to first menu and vice versa @default `true` */
  loop?: boolean;

  /** Dropdown position relative to the target element @default `'bottom-start'` */
  position?: FloatingPosition;
}

const defaultProps = {
  trigger: 'click',
  loop: true,
  position: 'bottom-start',
} satisfies Partial<MenubarProps>;

export const Menubar = factory<MenubarFactory>((_props) => {
  const props = useProps('Menubar', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    openIndex,
    defaultOpenIndex,
    onOpenChange,
    trigger,
    loop,
    position,
    attributes,
    mod,
    ref,
    ...others
  } = props;

  const getStyles = useStyles<MenubarFactory>({
    name: 'Menubar',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
  });

  const rootRef = useRef<HTMLDivElement>(null);
  const menubarId = useId();

  const [_openIndex, setOpenIndex] = useUncontrolled<number | null>({
    value: openIndex,
    defaultValue: defaultOpenIndex,
    finalValue: null,
    onChange: onOpenChange,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const openSourceRef = useRef<'click' | 'hover' | null>(null);

  const openMenu = useCallback(
    (index: number, source: 'click' | 'hover') => {
      openSourceRef.current = source;
      setOpenIndex(index);
    },
    [setOpenIndex]
  );

  const closeMenu = useCallback(() => {
    openSourceRef.current = null;
    setOpenIndex(null);
  }, [setOpenIndex]);

  const closeTimeoutRef = useRef(-1);

  const cancelClose = useCallback(() => {
    window.clearTimeout(closeTimeoutRef.current);
  }, []);

  const scheduleClose = useCallback(() => {
    window.clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = window.setTimeout(closeMenu, 120);
  }, [closeMenu]);

  useIsomorphicEffect(() => () => window.clearTimeout(closeTimeoutRef.current), []);

  const getOpenSource = useCallback(() => openSourceRef.current, []);

  const previousOpenIndexRef = useRef<number | null>(_openIndex);
  const getPreviousOpenIndex = useCallback(() => previousOpenIndexRef.current, []);

  useIsomorphicEffect(() => {
    previousOpenIndexRef.current = _openIndex;
  });

  const getTargets = useCallback(
    () =>
      Array.from(
        rootRef.current?.querySelectorAll<HTMLButtonElement>('[data-menubar-target]') ?? []
      ),
    []
  );

  const getMenuIndex = useCallback(
    (id: string) => getTargets().findIndex((node) => node.getAttribute('data-menubar-id') === id),
    [getTargets]
  );

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

  const focusTarget = useCallback(
    (index: number) => {
      getTargets()[index]?.focus();
    },
    [getTargets]
  );

  const focusMenuItem = useCallback(
    (index: number, itemPosition: 'first' | 'last') => {
      window.setTimeout(() => {
        const target = getTargets()[index];
        const controls = target?.getAttribute('aria-controls');
        const dropdown = controls
          ? document.getElementById(controls)
          : document.querySelector<HTMLElement>(`[data-menubar-dropdown="${menubarId}"]`);
        const items = dropdown?.querySelectorAll<HTMLElement>(
          '[data-menu-item]:not([data-disabled])'
        );

        if (items && items.length > 0) {
          const item = itemPosition === 'first' ? items[0] : items[items.length - 1];
          item?.focus();
        }
      }, 40);
    },
    [getTargets]
  );

  const getAdjacentIndex = useCallback(
    (current: number, direction: 1 | -1) => {
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
    },
    [getEnabledIndexes, loop]
  );

  useIsomorphicEffect(() => {
    const enabled = getEnabledIndexes();
    if (enabled.length === 0) {
      return;
    }

    // While a menu is open, the single tab stop must stay on the opened menu's target,
    // including when it was opened programmatically via openIndex/defaultOpenIndex.
    if (_openIndex !== null && enabled.includes(_openIndex)) {
      if (activeIndex !== _openIndex) {
        setActiveIndex(_openIndex);
      }
      return;
    }

    if (!enabled.includes(activeIndex)) {
      setActiveIndex(enabled[0]);
    }
  });

  const contextValue: MenubarContextValue = {
    getStyles,
    id: menubarId,
    openIndex: _openIndex,
    setOpenIndex,
    openMenu,
    closeMenu,
    scheduleClose,
    cancelClose,
    getOpenSource,
    getPreviousOpenIndex,
    activeIndex,
    setActiveIndex,
    trigger: trigger!,
    loop: loop!,
    position: position!,
    unstyled,
    getMenuIndex,
    getTargets,
    getEnabledIndexes,
    getAdjacentIndex,
    focusTarget,
    focusMenuItem,
  };

  return (
    <MenubarContextProvider value={contextValue}>
      <Box
        ref={useMergedRef(ref, rootRef)}
        role="menubar"
        aria-orientation="horizontal"
        mod={mod}
        {...getStyles('root')}
        {...others}
        data-menubar
      >
        {children}
      </Box>
    </MenubarContextProvider>
  );
});

Menubar.classes = classes;
Menubar.displayName = '@mantine/core/Menubar';
Menubar.Menu = MenubarMenu;
Menubar.Target = MenubarTarget;
Menubar.Dropdown = MenubarDropdown;

export namespace Menubar {
  export type Props = MenubarProps;
  export type StylesNames = MenubarStylesNames;
  export type Factory = MenubarFactory;

  export namespace Menu {
    export type Props = MenubarMenuProps;
  }

  export namespace Target {
    export type Props = MenubarTargetProps;
  }

  export namespace Dropdown {
    export type Props = MenubarDropdownProps;
  }
}
