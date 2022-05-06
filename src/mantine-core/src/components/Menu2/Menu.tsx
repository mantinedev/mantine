import React from 'react';
import { noop, useUncontrolled, getContextItemIndex, useHovered } from '@mantine/utils';
import { Popover, PopoverBaseProps } from '../Popover';
import { MenuDivider } from './MenuDivider/MenuDivider';
import { MenuDropdown } from './MenuDropdown/MenuDropdown';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuLabel } from './MenuLabel/MenuLabel';
import { MenuTrigger } from './MenuTrigger/MenuTrigger';
import { MenuContextProvider } from './Menu.context';

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
}

export function Menu({
  children,
  onOpen,
  onClose,
  opened,
  defaultOpened,
  onChange = noop,
  closeOnItemClick = true,
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

  const closeDropdown = () => {
    setOpened(false);
    resetHovered();
  };

  const getItemIndex = (node: HTMLButtonElement) =>
    getContextItemIndex('[data-menu-item]', '[data-menu-dropdown]', node);

  return (
    <MenuContextProvider
      value={{ toggleDropdown, getItemIndex, hovered, setHovered, closeOnItemClick, closeDropdown }}
    >
      <Popover
        {...others}
        opened={_opened}
        onChange={setOpened}
        defaultOpened={defaultOpened}
        onOpen={onOpen}
        onClose={onClose}
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
Menu.Trigger = MenuTrigger;
Menu.Divider = MenuDivider;
