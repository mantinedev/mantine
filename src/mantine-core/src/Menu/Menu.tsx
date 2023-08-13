import React from 'react';
import { getContextItemIndex, useHovered } from '@mantine/utils';
import { useDidUpdate, useUncontrolled } from '@mantine/hooks';
import { ClassNames, Styles, useComponentDefaultProps } from '@mantine/styles';
import { useDelayedHover } from '../Floating';
import { Popover, PopoverBaseProps, PopoverStylesNames } from '../Popover';
import { MenuDivider, MenuDividerStylesNames } from './MenuDivider/MenuDivider';
import { MenuDropdown } from './MenuDropdown/MenuDropdown';
import { MenuItem, MenuItemStylesNames } from './MenuItem/MenuItem';
import { MenuLabel, MenuLabelStylesName } from './MenuLabel/MenuLabel';
import { MenuTarget } from './MenuTarget/MenuTarget';
import { MenuContextProvider } from './Menu.context';
import { MenuTriggerEvent } from './Menu.types';
import useStyles from './Menu.styles';

export type MenuStylesNames =
  | MenuItemStylesNames
  | MenuLabelStylesName
  | MenuDividerStylesNames
  | PopoverStylesNames;

export interface MenuProps extends PopoverBaseProps {
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
  trigger?: MenuTriggerEvent;

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

  unstyled?: boolean;
  classNames?: ClassNames<MenuStylesNames>;
  styles?: Styles<MenuStylesNames>;
}

const defaultProps: Partial<MenuProps> = {
  closeOnItemClick: true,
  loop: true,
  trigger: 'click',
  openDelay: 0,
  closeDelay: 100,
};
export function Menu(props: MenuProps) {
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
    radius,
    variant,
    ...others
  } = useComponentDefaultProps('Menu', defaultProps, props);
  const { classes, cx } = useStyles();

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

  const toggleDropdown = () => (_opened ? close() : open());

  const { openDropdown, closeDropdown } = useDelayedHover({ open, close, closeDelay, openDelay });

  const getItemIndex = (node: HTMLButtonElement) =>
    getContextItemIndex('[data-menu-item]', '[data-menu-dropdown]', node);

  useDidUpdate(() => {
    resetHovered();
  }, [_opened]);

  return (
    <MenuContextProvider
      value={{
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
        radius,
        classNames,
        styles,
        unstyled,
        variant,
      }}
    >
      <Popover
        {...others}
        radius={radius}
        opened={_opened}
        onChange={toggleDropdown}
        defaultOpened={defaultOpened}
        trapFocus={trigger === 'click'}
        closeOnEscape={closeOnEscape && trigger === 'click'}
        __staticSelector="Menu"
        classNames={{ ...classNames, dropdown: cx(classes.dropdown, classNames?.dropdown) }}
        styles={styles}
        unstyled={unstyled}
        variant={variant}
      >
        {children}
      </Popover>
    </MenuContextProvider>
  );
}

Menu.displayName = '@mantine/core/Menu';
Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Dropdown = MenuDropdown;
Menu.Target = MenuTarget;
Menu.Divider = MenuDivider;
