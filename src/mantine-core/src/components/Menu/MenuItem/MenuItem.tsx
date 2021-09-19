import React from 'react';
import { DefaultProps, MantineColor } from '@mantine/theme';
import type { MenuButtonStylesNames } from '../MenuButton/MenuButton';

export interface SharedMenuItemProps extends DefaultProps<MenuButtonStylesNames> {
  /** Item label */
  children: React.ReactNode;

  /** Icon rendered on the left side of label */
  icon?: React.ReactNode;

  /** Any color from theme.colors */
  color?: MantineColor;

  /** Any react node to render on the right side of item, for example, keyboard shortcut or badge */
  rightSection?: React.ReactNode;
}

interface _MenuItemProps<C extends React.ElementType, R extends HTMLElement>
  extends SharedMenuItemProps {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;
}

export type MenuItemProps<
  C extends React.ElementType = 'button',
  R extends HTMLElement = HTMLButtonElement
> = _MenuItemProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof _MenuItemProps<C, R>>;

export interface MenuItemType {
  type: any;
  props: MenuItemProps;
  ref?: React.RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
}

export function MenuItem<
  C extends React.ElementType = 'button',
  R extends HTMLElement = HTMLButtonElement
>(
  // Props should be kept for ts integration
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: MenuItemProps<C, R>
) {
  return null;
}

MenuItem.displayName = '@mantine/core/MenuItem';
