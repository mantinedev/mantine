import React, { forwardRef, useRef } from 'react';
import { Selectors, PolymorphicComponentProps, DefaultProps, MantineColor } from '@mantine/styles';
import { mergeRefs } from '@mantine/hooks';
import { Box } from '../../Box';
import { useMenuContext } from '../Menu.context';
import { getContextItemIndex } from '../../../utils';
import useStyles from './MenuItem.styles';

export type MenuItemStylesNames = Selectors<typeof useStyles>;

export interface SharedMenuItemProps extends DefaultProps {
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
}

interface _MenuItemProps
  extends SharedMenuItemProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, keyof SharedMenuItemProps> {
  component: any;
}

export const _MenuItem = forwardRef(
  (
    {
      className,
      children,
      icon,
      color,
      disabled,
      rightSection,
      component,
      onClick,
      ...others
    }: _MenuItemProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const itemRef = useRef<HTMLButtonElement>();
    const { hovered, onItemHover, radius, onItemKeyDown, classNames, styles, onItemClick } =
      useMenuContext('Menu.Item');
    const { classes, cx } = useStyles({ color, radius }, { classNames, styles, name: 'Menu' });
    const itemIndex = getContextItemIndex(
      { elementSelector: '.mantine-Menu-item', parentClassName: 'mantine-Menu-body' },
      itemRef.current
    );

    return (
      <Box
        component={component || 'button'}
        type="button"
        role="menuitem"
        className={cx(classes.item, { [classes.itemHovered]: hovered === itemIndex }, className)}
        onMouseEnter={() => !disabled && onItemHover(itemIndex)}
        onMouseLeave={() => onItemHover(-1)}
        onKeyDown={onItemKeyDown}
        ref={mergeRefs(ref, itemRef)}
        disabled={disabled}
        onClick={(event: React.MouseEvent<any, MouseEvent>) => {
          typeof onClick === 'function' && onClick(event);
          onItemClick();
        }}
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
);

export type MenuItemProps<C> = PolymorphicComponentProps<C, SharedMenuItemProps>;
type MenuItemComponent = <C = 'button'>(props: MenuItemProps<C>) => React.ReactElement;

export const MenuItem: MenuItemComponent & { displayName?: string } = _MenuItem as any;

MenuItem.displayName = '@mantine/core/MenuItem';
