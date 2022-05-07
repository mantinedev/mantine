import React, { useRef } from 'react';
import { DefaultProps, MantineColor, Selectors, useContextStylesApi } from '@mantine/styles';
import {
  createEventHandler,
  createPolymorphicComponent,
  createScopedKeydownHandler,
} from '@mantine/utils';
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

  /** Icon rendered on the left side of label */
  icon?: React.ReactNode;
}

function MenuItem({
  children,
  className,
  color,
  closeMenuOnClick,
  icon,
  ...others
}: MenuItemProps) {
  const ctx = useMenuContext();
  const { classNames, styles, unstyled } = useContextStylesApi();
  const { classes, cx, theme } = useStyles(
    { radius: 'sm', color },
    { name: 'Menu', classNames, styles, unstyled }
  );
  const itemRef = useRef<HTMLButtonElement>();

  const itemIndex = ctx.getItemIndex(itemRef.current);
  const _others: any = others;

  const handleMouseLeave = createEventHandler(_others.onMouseEnter, () => ctx.setHovered(-1));
  const handleMouseEnter = createEventHandler(_others.onMouseEnter, () =>
    ctx.setHovered(ctx.getItemIndex(itemRef.current))
  );

  const handleClick = createEventHandler(_others.onMouseEnter, () => {
    if (typeof closeMenuOnClick === 'boolean') {
      closeMenuOnClick && ctx.closeDropdownImmediately();
    } else {
      ctx.closeOnItemClick && ctx.closeDropdownImmediately();
    }
  });

  return (
    <Box
      component="button"
      {...others}
      tabIndex={-1}
      onFocus={() => ctx.setHovered(ctx.getItemIndex(itemRef.current))}
      className={cx(classes.item, className)}
      ref={itemRef}
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
      {icon && <div className={classes.icon}>{icon}</div>}
      {children}
    </Box>
  );
}

MenuItem.displayName = '@mantine/core/MenuItem';

const PolymorphicMenuItem = createPolymorphicComponent<'button', MenuItemProps>(MenuItem);
export { PolymorphicMenuItem as MenuItem };
