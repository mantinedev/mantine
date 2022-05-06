import React, { useRef } from 'react';
import { DefaultProps, MantineColor } from '@mantine/styles';
import { createPolymorphicComponent, createScopedKeydownHandler } from '@mantine/utils';
import { Box } from '../../Box';
import useStyles from './MenuItem.styles';
import { useMenuContext } from '../Menu.context';

export interface MenuItemProps extends DefaultProps {
  /** Item label */
  children?: React.ReactNode;

  /** Key of theme.colors */
  color?: MantineColor;

  /** Determines whether menu should be closed when item is clicked, overrides closeOnItemClick prop on Menu component */
  closeMenuOnClick?: boolean;
}

function MenuItem({ children, className, color, closeMenuOnClick, ...others }: MenuItemProps) {
  const ctx = useMenuContext();
  const { classes, cx, theme } = useStyles({ radius: 'sm', color }, { name: 'Menu' });
  const itemRef = useRef<HTMLButtonElement>();

  const itemIndex = ctx.getItemIndex(itemRef.current);
  const _others: any = others;

  const handleMouseEnter = (event: React.MouseEvent) => {
    _others.onMouseEnter?.(event);
    ctx.setHovered(ctx.getItemIndex(itemRef.current));
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    _others.onMouseLeave?.(event);
    ctx.setHovered(-1);
  };

  const handleClick = (event: React.MouseEvent) => {
    _others.onClick?.(event);

    if (typeof closeMenuOnClick === 'boolean') {
      closeMenuOnClick && ctx.closeDropdown();
    } else {
      ctx.closeOnItemClick && ctx.closeDropdown();
    }
  };

  return (
    <Box
      component="button"
      {...others}
      onFocus={() => ctx.setHovered(ctx.getItemIndex(itemRef.current))}
      className={cx(classes.item, className)}
      ref={itemRef}
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
      {children}
    </Box>
  );
}

MenuItem.displayName = '@mantine/core/MenuItem';

const PolymorphicMenuItem = createPolymorphicComponent<'button', MenuItemProps>(MenuItem);
export { PolymorphicMenuItem as MenuItem };
