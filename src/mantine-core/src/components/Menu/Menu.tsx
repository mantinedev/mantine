import React from 'react';
import { useDidUpdate, useUncontrolled } from '@mantine/hooks';
import {
  getContextItemIndex,
  useHovered,
  StylesApiProps,
  useProps,
  Factory,
  useStyles,
  useResolvedStylesApi,
  ExtendComponent,
} from '../../core';
import { useDelayedHover } from '../Floating';
import { Popover, __PopoverProps, PopoverStylesNames } from '../Popover';
import { MenuDivider } from './MenuDivider/MenuDivider';
import { MenuDropdown } from './MenuDropdown/MenuDropdown';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuLabel } from './MenuLabel/MenuLabel';
import { MenuTarget } from './MenuTarget/MenuTarget';
import { MenuContextProvider } from './Menu.context';
import classes from './Menu.module.css';

export type MenuStylesNames =
  | 'item'
  | 'itemLabel'
  | 'itemSection'
  | 'label'
  | 'divider'
  | PopoverStylesNames;

export type MenuFactory = Factory<{
  props: MenuProps;
  ref: HTMLDivElement;
  stylesNames: MenuStylesNames;
}>;

export interface MenuProps extends __PopoverProps, StylesApiProps<MenuFactory> {
  variant?: string;

  /** Menu content */
  children?: React.ReactNode;

  /** Controlled menu opened state */
  opened?: boolean;

  /** Uncontrolled menu initial opened state */
  defaultOpened?: boolean;

  /** Called when menu opened state changes */
  onChange?(opened: boolean): void;

  /** Called when Menu is opened */
  onOpen?(): void;

  /** Called when Menu is closed */
  onClose?(): void;

  /** Determines whether Menu should be closed when item is clicked */
  closeOnItemClick?: boolean;

  /** Determines whether arrow key presses should loop though items (first to last and last to first) */
  loop?: boolean;

  /** Determines whether dropdown should be closed when Escape key is pressed, defaults to true */
  closeOnEscape?: boolean;

  /** Event which should open menu */
  trigger?: 'click' | 'hover';

  /** Open delay in ms, applicable only to trigger="hover" variant */
  openDelay?: number;

  /** Close delay in ms, applicable only to trigger="hover" variant */
  closeDelay?: number;

  /** Determines whether dropdown should be closed on outside clicks, default to true */
  closeOnClickOutside?: boolean;

  /** Events that trigger outside clicks */
  clickOutsideEvents?: string[];

  /** id base to create accessibility connections */
  id?: string;
}

const defaultProps: Partial<MenuProps> = {
  closeOnItemClick: true,
  loop: true,
  trigger: 'click',
  openDelay: 0,
  closeDelay: 100,
};

export function Menu(_props: MenuProps) {
  const props = useProps('Menu', defaultProps, _props);
  const {
    children,
    onOpen,
    onClose,
    opened,
    defaultOpened,
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
    ...others
  } = props;

  const getStyles = useStyles<MenuFactory>({
    name: 'Menu',
    classes,
    props,
    classNames,
    styles,
    unstyled,
  });

  const [hovered, { setHovered, resetHovered }] = useHovered();
  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange,
  });

  const close = () => {
    setOpened(false);
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

  const getItemIndex = (node: HTMLButtonElement) =>
    getContextItemIndex('[data-menu-item]', '[data-menu-dropdown]', node);

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MenuFactory>({
    classNames,
    styles,
    props,
  });

  useDidUpdate(() => {
    resetHovered();
  }, [_opened]);

  return (
    <MenuContextProvider
      value={{
        getStyles,
        opened: _opened,
        toggleDropdown,
        getItemIndex,
        hovered,
        setHovered,
        closeOnItemClick,
        closeDropdown: trigger === 'click' ? close : closeDropdown,
        openDropdown: trigger === 'click' ? open : openDropdown,
        closeDropdownImmediately: close,
        loop,
        trigger,
        unstyled,
      }}
    >
      <Popover
        {...others}
        opened={_opened}
        onChange={toggleDropdown}
        defaultOpened={defaultOpened}
        trapFocus={trigger === 'click'}
        closeOnEscape={closeOnEscape && trigger === 'click'}
        __staticSelector="Menu"
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        variant={variant}
      >
        {children}
      </Popover>
    </MenuContextProvider>
  );
}

Menu.extend = (input: ExtendComponent<MenuFactory>) => input;
Menu.classes = classes as Record<string, string>;
Menu.displayName = '@mantine/core/Menu';
Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Dropdown = MenuDropdown;
Menu.Target = MenuTarget;
Menu.Divider = MenuDivider;
