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

  /** Icon rendered on the left side of the label */
  icon?: React.ReactNode;

  /** Section rendered on the right side of the label */
  rightSection?: React.ReactNode;
}

function MenuItem({
  children,
  className,
  color,
  closeMenuOnClick,
  icon,
  rightSection,
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
      {...others}
      tabIndex={-1}
      onFocus={handleFocus}
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
      {children && <div className={classes.label}>{children}</div>}
      {rightSection && <div className={classes.rightSection}>{rightSection}</div>}
    </Box>
  );
}

MenuItem.displayName = '@mantine/core/MenuItem';

const PolymorphicMenuItem = createPolymorphicComponent<'button', MenuItemProps>(MenuItem);
export { PolymorphicMenuItem as MenuItem };
