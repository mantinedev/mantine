import React, { forwardRef } from 'react';
import {
  MantineNumberSize,
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  DefaultProps,
  MantineColor,
} from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './MenuItem.styles';

export type MenuItemStylesNames = ClassNames<typeof useStyles>;

export interface SharedMenuItemProps extends DefaultProps<MenuItemStylesNames> {
  /** Item label */
  children: React.ReactNode;

  /** Icon rendered on the left side of label */
  icon?: React.ReactNode;

  /** Any color from theme.colors */
  color?: MantineColor;

  /** Any react node to render on the right side of item, for example, keyboard shortcut or badge */
  rightSection?: React.ReactNode;

  /** Is item disabled */
  disabled?: boolean;

  /** Is item hovered, controlled by parent Menu component */
  hovered?: boolean;

  /** Called when item is hovered, controlled by parent Menu component */
  onHover?(): void;

  /** Border radius, controlled by parent Menu component */
  radius?: MantineNumberSize;
}

export type MenuItemProps<C> = PolymorphicComponentProps<C, SharedMenuItemProps>;

export type MenuItemComponent = <C = 'button'>(props: MenuItemProps<C>) => React.ReactElement;

export interface MenuItemType {
  type: any;
  props: MenuItemProps<'button'>;
  ref?: React.RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
}

export const MenuItem: MenuItemComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      className,
      children,
      onHover,
      hovered,
      icon,
      color,
      disabled,
      rightSection,
      component,
      classNames,
      styles,
      radius,
      ...others
    }: MenuItemProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ color, radius }, { classNames, styles, name: 'Menu' });

    return (
      <Box<any>
        component={component || 'button'}
        type="button"
        role="menuitem"
        className={cx(classes.item, { [classes.itemHovered]: hovered }, className)}
        onMouseEnter={() => !disabled && onHover()}
        ref={ref}
        disabled={disabled}
        {...others}
      >
        <div className={classes.itemInner}>
          {icon && <div className={classes.itemIcon}>{icon}</div>}

          <div className={classes.itemBody}>
            <div className={classes.itemLabel}>{children}</div>
            {rightSection}
          </div>
        </div>
      </Box>
    );
  }
) as any;

MenuItem.displayName = '@mantine/core/MenuItem';
