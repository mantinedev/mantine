import React from 'react';
import { noop, useUncontrolled, getContextItemIndex, useHovered } from '@mantine/utils';
import { useDelayedHover } from '../Floating';
import { Popover, PopoverBaseProps } from '../Popover';
import { MenuDivider } from './MenuDivider/MenuDivider';
import { MenuDropdown } from './MenuDropdown/MenuDropdown';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuLabel } from './MenuLabel/MenuLabel';
import { MenuTarget } from './MenuTarget/MenuTarget';
import { MenuContextProvider } from './Menu.context';
import { MenuTriggerEvent } from './Menu.types';

export interface MenuProps extends PopoverBaseProps {
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
}

export function Menu({
  children,
  onOpen,
  onClose,
  opened,
  defaultOpened,
  onChange = noop,
  closeOnItemClick = true,
  loop = true,
  closeOnEscape,
  trigger = 'click',
  openDelay = 0,
  closeDelay = 100,
  ...others
}: MenuProps) {
  const [hovered, { setHovered, resetHovered }] = useHovered();
  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange,
  });

  const toggleDropdown = () => {
    setOpened(!_opened);
    resetHovered();
  };

  const close = () => {
    setOpened(false);
    resetHovered();
  };

  const open = () => {
    setOpened(true);
    resetHovered();
  };

  const { openDropdown, closeDropdown } = useDelayedHover({ open, close, closeDelay, openDelay });

  const getItemIndex = (node: HTMLButtonElement) =>
    getContextItemIndex('[data-menu-item]', '[data-menu-dropdown]', node);

  return (
    <MenuContextProvider
      value={{
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
      }}
    >
      <Popover
        {...others}
        opened={_opened}
        onChange={setOpened}
        defaultOpened={defaultOpened}
        onOpen={onOpen}
        onClose={onClose}
        trapFocus={trigger === 'click'}
        closeOnEscape={closeOnEscape && trigger === 'click'}
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
