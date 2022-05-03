import React from 'react';
import { MenuDivider } from './MenuDivider/MenuDivider';
import { MenuDropdown } from './MenuDropdown/MenuDropdown';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuLabel } from './MenuLabel/MenuLabel';
import { MenuTrigger } from './MenuTrigger/MenuTrigger';

export interface MenuProps {
  /** Menu content */
  children?: React.ReactNode;
}

export function Menu({ children }: MenuProps) {
  return <>{children}</>;
}

Menu.displayName = '@mantine/core/Menu';
Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Dropdown = MenuDropdown;
Menu.Trigger = MenuTrigger;
Menu.Divider = MenuDivider;
