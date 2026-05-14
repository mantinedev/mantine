import { useCallback, useRef, useState } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  factory,
  Factory,
  getContextItemIndex,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { useDelayedHover } from '../../utils/Floating';
import { __PopoverProps, Popover, PopoverStylesNames } from '../Popover';
import { MenuContextProvider, type MenuContextValue } from './Menu.context';
import { MenuCheckboxItem, type MenuCheckboxItemProps } from './MenuCheckboxItem/MenuCheckboxItem';
import { MenuContextMenu, type MenuContextMenuProps } from './MenuContextMenu/MenuContextMenu';
import { MenuDivider, type MenuDividerProps } from './MenuDivider/MenuDivider';
import { MenuDropdown, type MenuDropdownProps } from './MenuDropdown/MenuDropdown';
import { MenuItem, type MenuItemProps } from './MenuItem/MenuItem';
import { MenuLabel, type MenuLabelProps } from './MenuLabel/MenuLabel';
import { MenuRadioGroup, type MenuRadioGroupProps } from './MenuRadioGroup/MenuRadioGroup';
import { MenuRadioItem, type MenuRadioItemProps } from './MenuRadioItem/MenuRadioItem';
import { MenuSearch, type MenuSearchProps } from './MenuSearch/MenuSearch';
import { MenuSub, type MenuSubProps } from './MenuSub/MenuSub';
import { MenuTarget, type MenuTargetProps } from './MenuTarget/MenuTarget';
import classes from './Menu.module.css';
import type { MenuSubDropdownProps } from './MenuSubDropdown/MenuSubDropdown';
import type { MenuSubItemProps } from './MenuSubItem/MenuSubItem';
import type { MenuSubTargetProps } from './MenuSubTarget/MenuSubTarget';

export type MenuStylesNames =
  | 'item'
  | 'itemLabel'
  | 'itemSection'
  | 'itemIndicator'
  | 'label'
  | 'divider'
  | 'chevron'
  | 'search'
  | PopoverStylesNames;

export type MenuFactory = Factory<{
  props: MenuProps;
  stylesNames: MenuStylesNames;
  staticComponents: {
    Item: typeof MenuItem;
    Label: typeof MenuLabel;
    Dropdown: typeof MenuDropdown;
    Target: typeof MenuTarget;
    Divider: typeof MenuDivider;
    Search: typeof MenuSearch;
    Sub: typeof MenuSub;
    CheckboxItem: typeof MenuCheckboxItem;
    RadioItem: typeof MenuRadioItem;
    RadioGroup: typeof MenuRadioGroup;
    ContextMenu: typeof MenuContextMenu;
  };
}>;

export interface MenuProps extends __PopoverProps, StylesApiProps<MenuFactory> {
  variant?: string;

  /** Menu children */
  children?: React.ReactNode;

  /** Controlled menu opened state */
  opened?: boolean;

  /** Uncontrolled menu initial opened state */
  defaultOpened?: boolean;

  /** If set, focus is trapped within the menu dropdown when it is opened */
  trapFocus?: boolean;

  /** Called when menu opened state changes */
  onChange?: (opened: boolean) => void;

  /** Called when Menu is opened */
  onOpen?: () => void;

  /** Called when Menu is closed */
  onClose?: () => void;

  /** If set, the Menu is closed when one of the items is clicked. Can be overridden per item with `closeMenuOnClick` prop */
  closeOnItemClick?: boolean;

  /** If set, arrow key presses wrap around from last item to first and vice versa */
  loop?: boolean;

  /** If set, the dropdown is closed when the `Escape` key is pressed @default true */
  closeOnEscape?: boolean;

  /** Event trigger to open menu. Note: 'hover' is not keyboard accessible; prefer 'click-hover' for accessible hover menus */
  trigger?: 'click' | 'hover' | 'click-hover';

  /** Open delay in ms, applicable only to `trigger="hover"` variant */
  openDelay?: number;

  /** Close delay in ms, applicable only to `trigger="hover"` variant */
  closeDelay?: number;

  /** If set, the dropdown is closed on outside clicks */
  closeOnClickOutside?: boolean;

  /** Events that trigger outside click detection. Includes mousedown for desktop clicks, touchstart for mobile, and keydown for Escape key handling @default ['mousedown', 'touchstart', 'keydown'] */
  clickOutsideEvents?: string[];

  /** Id base to create accessibility connections */
  id?: string;

  /** Set the `tabindex` on all menu items. Use `0` to allow Tab key navigation through menu items (required for navigation menus following WAI-ARIA disclosure pattern). @default -1 */
  menuItemTabIndex?: -1 | 0;

  /** Adds a hidden focusable element at the start of the dropdown to prevent unexpected focus jumps when opening with keyboard. Set to false if you need custom focus management. @default true */
  withInitialFocusPlaceholder?: boolean;

  /** Determines whether focus should be automatically returned to control when dropdown closes @default `true` */
  returnFocus?: boolean;

  /** Controls how indicator slot space is reserved on menu items for label alignment. `'all'` reserves space on every `Menu.Item`, `'with-indicators'` reserves space only on `Menu.CheckboxItem` and `Menu.RadioItem`, `'none'` reserves space only on items that currently display an indicator. @default 'with-indicators' */
  alignItemsLabels?: 'all' | 'with-indicators' | 'none';

  /** Custom icon rendered as the indicator of checked `Menu.CheckboxItem` and selected `Menu.RadioItem`. Can be overridden per item with the `checkIcon` prop. */
  checkIcon?: React.ReactNode;
}

const defaultProps = {
  trapFocus: true,
  closeOnItemClick: true,
  withInitialFocusPlaceholder: true,
  clickOutsideEvents: ['mousedown', 'touchstart', 'keydown'],
  loop: true,
  trigger: 'click',
  openDelay: 0,
  closeDelay: 100,
  menuItemTabIndex: -1,
  alignItemsLabels: 'with-indicators',
} satisfies Partial<MenuProps>;

export const Menu = factory<MenuFactory>((_props) => {
  const props = useProps('Menu', defaultProps, _props);
  const {
    children,
    onOpen,
    onClose,
    opened,
    defaultOpened,
    trapFocus,
    onChange,
    closeOnItemClick,
    loop,
    closeOnEscape,
    trigger,
    openDelay,
    closeDelay,
    classNames,
    styles,
    unstyled,
    variant,
    vars,
    menuItemTabIndex,
    keepMounted,
    withInitialFocusPlaceholder,
    attributes,
    onExitTransitionEnd,
    alignItemsLabels,
    checkIcon,
    ...others
  } = props;

  const getStyles = useStyles<MenuFactory>({
    name: 'Menu',
    classes,
    props,
    classNames,
    styles,
    unstyled,
    attributes,
  });

  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange,
  });
  const [openedViaClick, setOpenedViaClick] = useState(false);

  const close = () => {
    setOpened(false);
    setOpenedViaClick(false);
    _opened && onClose?.();
  };

  const open = () => {
    setOpened(true);
    !_opened && onOpen?.();
  };

  const toggleDropdown = () => {
    _opened ? close() : open();
  };

  const { openDropdown, closeDropdown } = useDelayedHover({ open, close, closeDelay, openDelay });

  const activeSubCloseRef = useRef<(() => void) | null>(null);
  const registerOpenSub = useCallback((closeFn: () => void) => {
    const prev = activeSubCloseRef.current;
    if (prev && prev !== closeFn) {
      prev();
    }
    activeSubCloseRef.current = closeFn;
    return () => {
      if (activeSubCloseRef.current === closeFn) {
        activeSubCloseRef.current = null;
      }
    };
  }, []);

  const searchCountRef = useRef(0);
  const [hasSearch, setHasSearch] = useState(false);
  const registerSearch = useCallback(() => {
    searchCountRef.current += 1;
    if (searchCountRef.current === 1) {
      setHasSearch(true);
    }
    return () => {
      searchCountRef.current -= 1;
      if (searchCountRef.current === 0) {
        setHasSearch(false);
      }
    };
  }, []);

  const searchExitClearRef = useRef<(() => void) | null>(null);
  const handleExitTransitionEnd = () => {
    searchExitClearRef.current?.();
    onExitTransitionEnd?.();
  };

  const getItemIndex = (node: HTMLButtonElement) =>
    getContextItemIndex('[data-menu-item]', '[data-menu-dropdown]', node);

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MenuFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <MenuContextProvider
      value={{
        getStyles,
        opened: _opened,
        toggleDropdown,
        getItemIndex,
        openedViaClick,
        setOpenedViaClick,
        closeOnItemClick,
        closeDropdown: trigger === 'click' ? close : closeDropdown,
        openDropdown: trigger === 'click' ? open : openDropdown,
        closeDropdownImmediately: close,
        loop,
        trigger,
        unstyled,
        menuItemTabIndex,
        withInitialFocusPlaceholder,
        registerOpenSub,
        hasSearch,
        registerSearch,
        searchExitClearRef,
        alignItemsLabels: alignItemsLabels!,
        checkIcon,
      }}
    >
      <Popover
        returnFocus
        {...others}
        opened={_opened}
        onChange={toggleDropdown}
        defaultOpened={defaultOpened}
        trapFocus={keepMounted ? false : trapFocus}
        closeOnEscape={closeOnEscape}
        __staticSelector="Menu"
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        variant={variant}
        keepMounted={keepMounted}
        onExitTransitionEnd={handleExitTransitionEnd}
      >
        {children}
      </Popover>
    </MenuContextProvider>
  );
});

Menu.displayName = '@mantine/core/Menu';
Menu.classes = classes;
Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Dropdown = MenuDropdown;
Menu.Target = MenuTarget;
Menu.Divider = MenuDivider;
Menu.Search = MenuSearch;
Menu.Sub = MenuSub;
Menu.CheckboxItem = MenuCheckboxItem;
Menu.RadioItem = MenuRadioItem;
Menu.RadioGroup = MenuRadioGroup;
Menu.ContextMenu = MenuContextMenu;

export namespace Menu {
  export type Props = MenuProps;
  export type StylesNames = MenuStylesNames;
  export type Factory = MenuFactory;
  export type ContextValue = MenuContextValue;

  export namespace Item {
    export type Props = MenuItemProps;
  }

  export namespace Label {
    export type Props = MenuLabelProps;
  }

  export namespace Divider {
    export type Props = MenuDividerProps;
  }

  export namespace Dropdown {
    export type Props = MenuDropdownProps;
  }

  export namespace Target {
    export type Props = MenuTargetProps;
  }

  export namespace Search {
    export type Props = MenuSearchProps;
  }

  export namespace Sub {
    export type Props = MenuSubProps;
  }

  export namespace CheckboxItem {
    export type Props = MenuCheckboxItemProps;
  }

  export namespace RadioItem {
    export type Props = MenuRadioItemProps;
  }

  export namespace RadioGroup {
    export type Props = MenuRadioGroupProps;
  }

  export namespace ContextMenu {
    export type Props = MenuContextMenuProps;
  }

  export namespace SubDropdown {
    export type Props = MenuSubDropdownProps;
  }

  export namespace SubItem {
    export type Props = MenuSubItemProps;
  }

  export namespace SubTarget {
    export type Props = MenuSubTargetProps;
  }
}
