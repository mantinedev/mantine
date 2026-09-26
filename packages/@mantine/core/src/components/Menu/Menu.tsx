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
import { MenuContextProvider, MenuContextValue } from './Menu.context';
import { MenuCheckboxGroup, MenuCheckboxGroupProps } from './MenuCheckboxGroup/MenuCheckboxGroup';
import { MenuCheckboxItem, MenuCheckboxItemProps } from './MenuCheckboxItem/MenuCheckboxItem';
import { MenuContextMenu, MenuContextMenuProps } from './MenuContextMenu/MenuContextMenu';
import { MenuDivider, MenuDividerProps } from './MenuDivider/MenuDivider';
import { MenuDropdown, MenuDropdownProps } from './MenuDropdown/MenuDropdown';
import { MenuItem, MenuItemProps } from './MenuItem/MenuItem';
import { MenuLabel, MenuLabelProps } from './MenuLabel/MenuLabel';
import { MenuRadioGroup, MenuRadioGroupProps } from './MenuRadioGroup/MenuRadioGroup';
import { MenuRadioItem, MenuRadioItemProps } from './MenuRadioItem/MenuRadioItem';
import { MenuSearch, MenuSearchProps } from './MenuSearch/MenuSearch';
import { MenuSub, MenuSubProps } from './MenuSub/MenuSub';
import type { MenuSubDropdownProps } from './MenuSubDropdown/MenuSubDropdown';
import type { MenuSubItemProps } from './MenuSubItem/MenuSubItem';
import type { MenuSubTargetProps } from './MenuSubTarget/MenuSubTarget';
import { MenuTarget, MenuTargetProps } from './MenuTarget/MenuTarget';
import classes from './Menu.module.css';

export type MenuVariant = 'default' | 'filled';

export type MenuStylesNames =
  | 'item'
  | 'itemLabel'
  | 'itemBody'
  | 'itemDescription'
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
    CheckboxGroup: typeof MenuCheckboxGroup;
    RadioItem: typeof MenuRadioItem;
    RadioGroup: typeof MenuRadioGroup;
    ContextMenu: typeof MenuContextMenu;
  };
}>;

export interface MenuProps extends __PopoverProps, StylesApiProps<MenuFactory> {
  /** Controls colors of hovered and keyboard-active items, `default` – neutral background, `filled` – primary color background @default 'default' */
  variant?: MenuVariant;

  /** Menu children @category appearance */
  children?: React.ReactNode;

  /** Controlled menu opened state @category state */
  opened?: boolean;

  /** Uncontrolled menu initial opened state @category state */
  defaultOpened?: boolean;

  /** If set, focus is trapped within the menu dropdown when it is opened @category behavior */
  trapFocus?: boolean;

  /** Called when menu opened state changes @category state */
  onChange?: (opened: boolean) => void;

  /** Called when Menu is opened @category behavior */
  onOpen?: () => void;

  /** Called when Menu is closed @category behavior */
  onClose?: () => void;

  /** If set, the Menu is closed when one of the items is clicked. Can be overridden per item with `closeMenuOnClick` prop @category behavior */
  closeOnItemClick?: boolean;

  /** If set, arrow key presses wrap around from last item to first and vice versa @category behavior */
  loop?: boolean;

  /** If set, the dropdown is closed when the `Escape` key is pressed @default true @category behavior */
  closeOnEscape?: boolean;

  /** Event trigger to open menu. Note: 'hover' is not keyboard accessible; prefer 'click-hover' for accessible hover menus @category behavior */
  trigger?: 'click' | 'hover' | 'click-hover';

  /** Open delay in ms, applicable only to `trigger="hover"` variant @category behavior */
  openDelay?: number;

  /** Close delay in ms, applicable only to `trigger="hover"` variant @category behavior */
  closeDelay?: number;

  /** If set, the dropdown is closed on outside clicks @category behavior */
  closeOnClickOutside?: boolean;

  /** Events that trigger outside click detection. Includes mousedown for desktop clicks, touchstart for mobile, and keydown for Escape key handling @default ['mousedown', 'touchstart', 'keydown'] @category behavior */
  clickOutsideEvents?: string[];

  /** Id base to create accessibility connections */
  id?: string;

  /** Set the `tabindex` on all menu items. Use `0` to allow Tab key navigation through menu items (required for navigation menus following WAI-ARIA disclosure pattern). @default -1 @category behavior */
  menuItemTabIndex?: -1 | 0;

  /** Adds a hidden focusable element at the start of the dropdown to prevent unexpected focus jumps when opening with keyboard. Set to false if you need custom focus management. @default true @category behavior */
  withInitialFocusPlaceholder?: boolean;

  /** Determines whether focus should be automatically returned to control when dropdown closes @default `true` @category behavior */
  returnFocus?: boolean;

  /** Controls how indicator slot space is reserved on menu items for label alignment. `'all'` reserves space on every `Menu.Item`, `'with-indicators'` reserves space only on `Menu.CheckboxItem` and `Menu.RadioItem`, `'none'` reserves space only on items that currently display an indicator. @default 'with-indicators' @category appearance */
  alignItemsLabels?: 'all' | 'with-indicators' | 'none';

  /** Custom icon rendered as the indicator of checked `Menu.CheckboxItem` and selected `Menu.RadioItem`. Can be overridden per item with the `checkIcon` prop. @category appearance */
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
        variant,
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
Menu.CheckboxGroup = MenuCheckboxGroup;
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

  export namespace CheckboxGroup {
    export type Props = MenuCheckboxGroupProps;
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
