import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Popover } from '../../Popover';

export interface MenuDropdownProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Item label */
  children?: React.ReactNode;
}

export function MenuDropdown({ children, ...others }: MenuDropdownProps) {
  return (
    <Popover.Dropdown p={4} data-menu-dropdown {...others}>
      {children}
    </Popover.Dropdown>
  );
}

MenuDropdown.displayName = '@mantine/core/MenuDropdown';
