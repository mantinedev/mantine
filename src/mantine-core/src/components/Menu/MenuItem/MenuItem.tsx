import React from 'react';
import { DefaultProps, MantineColor, PolymorphicComponentProps } from '@mantine/styles';
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

export type MenuItemProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedMenuItemProps
>;

type MenuItemComponent = <C extends React.ElementType = 'div'>(
  props: MenuItemProps<C>
) => React.ReactElement;

export interface MenuItemType {
  type: any;
  props: MenuItemProps<'button'>;
  ref?: React.RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
}

export const MenuItem: MenuItemComponent & { displayName?: string } = ((
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props: MenuItemProps<'button'>
) => null) as any;

MenuItem.displayName = '@mantine/core/MenuItem';
