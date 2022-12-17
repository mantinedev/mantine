import React, { useRef, forwardRef } from 'react';
import { DefaultProps, MantineColor, Selectors, useComponentDefaultProps } from '@mantine/styles';
import {
  createEventHandler,
  createPolymorphicComponent,
  createScopedKeydownHandler,
} from '@mantine/utils';
import { useMergedRef } from '@mantine/hooks';
import { Box } from '../../Box';
import { useMenuContext } from '../Menu.context';
import useStyles from './MenuItem.styles';

export type MenuItemStylesNames = Selectors<typeof useStyles>;

export interface MenuItemProps extends DefaultProps {
  /** Item label */
  children?: React.ReactNode;

  /** Key of theme.colors */
  color?: MantineColor;

  /** Determines whether menu should be closed when item is clicked, overrides closeOnItemClick prop on Menu component */
  closeMenuOnClick?: boolean;

  /** Icon rendered on the left side of the label */
  icon?: React.ReactNode;

  /** Section rendered on the right side of the label */
  rightSection?: React.ReactNode;
}

const defaultProps: Partial<DefaultProps> = {};

export const _MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>((props, ref) => {
  const { children, className, color, closeMenuOnClick, icon, rightSection, ...others } =
    useComponentDefaultProps('MenuItem', defaultProps, props);

  const ctx = useMenuContext();
  const { classes, cx, theme } = useStyles(
    { radius: ctx.radius, color },
    {
      name: 'Menu',
      classNames: ctx.classNames,
      styles: ctx.styles,
      unstyled: ctx.unstyled,
      variant: ctx.variant,
    }
  );

  const itemRef = useRef<HTMLButtonElement>();
  const itemIndex = ctx.getItemIndex(itemRef.current);
  const _others: any = others;

  const handleMouseLeave = createEventHandler(_others.onMouseLeave, () => ctx.setHovered(-1));
  const handleMouseEnter = createEventHandler(_others.onMouseEnter, () =>
    ctx.setHovered(ctx.getItemIndex(itemRef.current))
  );

  const handleClick = createEventHandler(_others.onClick, () => {
    if (typeof closeMenuOnClick === 'boolean') {
      closeMenuOnClick && ctx.closeDropdownImmediately();
    } else {
      ctx.closeOnItemClick && ctx.closeDropdownImmediately();
    }
  });

  const handleFocus = createEventHandler(_others.onFocus, () =>
    ctx.setHovered(ctx.getItemIndex(itemRef.current))
  );

  return (
    <Box
      component="button"
      type="button"
      {...others}
      tabIndex={-1}
      onFocus={handleFocus}
      className={cx(classes.item, className)}
      ref={useMergedRef(itemRef, ref)}
      role="menuitem"
      data-menu-item
      data-hovered={ctx.hovered === itemIndex ? true : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: '[data-menu-item]',
        parentSelector: '[data-menu-dropdown]',
        activateOnFocus: false,
        loop: ctx.loop,
        dir: theme.dir,
        orientation: 'vertical',
        onKeyDown: _others.onKeydown,
      })}
    >
      {icon && <div className={classes.itemIcon}>{icon}</div>}
      {children && <div className={classes.itemLabel}>{children}</div>}
      {rightSection && <div className={classes.itemRightSection}>{rightSection}</div>}
    </Box>
  );
});

_MenuItem.displayName = '@mantine/core/MenuItem';

export const MenuItem = createPolymorphicComponent<'button', MenuItemProps>(_MenuItem);
