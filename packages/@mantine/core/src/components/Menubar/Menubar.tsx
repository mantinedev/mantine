import { useCallback, useRef } from 'react';
import { useIsomorphicEffect, useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createEventHandler,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useController,
  useProps,
  useStyles,
} from '../../core';
import { FloatingPosition } from '../../utils/Floating';
import { MenubarContextProvider, MenubarContextValue } from './Menubar.context';
import { MenubarDropdown, MenubarDropdownProps } from './MenubarDropdown/MenubarDropdown';
import { MenubarMenu, MenubarMenuProps } from './MenubarMenu/MenubarMenu';
import { MenubarTarget, MenubarTargetProps } from './MenubarTarget/MenubarTarget';
import { useMenubar, MenubarController } from './use-menubar/use-menubar';
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

  /** Controller returned by the `useMenubar` hook. When provided, the state is owned by the controller and `openIndex`, `defaultOpenIndex`, `onOpenChange` and `loop` props are ignored */
  controller?: MenubarController;

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
    controller,
    openIndex,
    defaultOpenIndex,
    onOpenChange,
    trigger,
    loop,
    position,
    attributes,
    mod,
    ref,
    onKeyDownCapture,
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

  const menubar = useController(useMenubar, controller, {
    openIndex,
    defaultOpenIndex,
    onOpenChange,
    loop,
  });

  const closeTimeoutRef = useRef(-1);

  const cancelClose = useCallback(() => {
    window.clearTimeout(closeTimeoutRef.current);
  }, []);

  const scheduleClose = useCallback(() => {
    window.clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = window.setTimeout(menubar.closeMenu, 120);
  }, [menubar.closeMenu]);

  useIsomorphicEffect(() => () => window.clearTimeout(closeTimeoutRef.current), []);

  const previousOpenIndexRef = useRef<number | null>(menubar.openIndex);
  const getPreviousOpenIndex = useCallback(() => previousOpenIndexRef.current, []);

  useIsomorphicEffect(() => {
    previousOpenIndexRef.current = menubar.openIndex;
  });

  useIsomorphicEffect(() => {
    const enabled = menubar.getEnabledIndexes();
    if (enabled.length === 0) {
      return;
    }

    if (menubar.openIndex !== null && enabled.includes(menubar.openIndex)) {
      if (menubar.activeIndex !== menubar.openIndex) {
        menubar.setActiveIndex(menubar.openIndex);
      }
      return;
    }

    if (!enabled.includes(menubar.activeIndex)) {
      menubar.setActiveIndex(enabled[0]);
    }
  });

  const handleKeyDownCapture = createEventHandler<any>(onKeyDownCapture, (event) => {
    if (event.key !== 'Escape') {
      return;
    }

    const dropdown = (event.target as HTMLElement).closest('[data-menubar-dropdown]');
    const index = menubar.getOpenIndex();
    if (dropdown?.getAttribute('data-menubar-dropdown') !== menubar.id || index === null) {
      return;
    }

    menubar.setActiveIndex(index);
    window.setTimeout(() => menubar.focusTarget(index), 0);
  });

  const contextValue: MenubarContextValue = {
    getStyles,
    controller: menubar,
    scheduleClose,
    cancelClose,
    getPreviousOpenIndex,
    trigger: trigger!,
    position: position!,
    unstyled,
  };

  return (
    <MenubarContextProvider value={contextValue}>
      <Box
        ref={useMergedRef(ref, menubar.registerRoot)}
        role="menubar"
        aria-orientation="horizontal"
        mod={mod}
        {...getStyles('root')}
        {...others}
        onKeyDownCapture={handleKeyDownCapture}
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
