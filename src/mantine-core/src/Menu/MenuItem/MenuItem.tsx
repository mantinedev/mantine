import React from 'react';

export interface MenuItemProps extends React.ComponentPropsWithoutRef<'button'> {
  /** Item label */
  children: React.ReactNode;

  /** Icon rendered on the left side of label */
  icon?: React.ReactNode;

  /** Any color from theme.colors */
  color?: string;

  /** Any react node to render on the right side of item, for example, keyboard shortcut or badge */
  rightSection?: React.ReactNode;
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
