import React from 'react';

export interface MenuItemProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
  cmd?: React.ReactNode;
}

export interface MenuItemType {
  type: any;
  props: MenuItemProps;
  ref?: React.RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
}

// Props should be kept for ts integration
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MenuItem(props: MenuItemProps) {
  return null;
}

MenuItem.displayName = '@mantine/core/MenuItem';
