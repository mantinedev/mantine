import React, { useRef } from 'react';
import { DefaultProps, MantineColor } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box } from '../../Box';
import useStyles from './MenuItem.styles';
import { useMenuContext } from '../Menu.context';

export interface MenuItemProps extends DefaultProps {
  /** Item label */
  children?: React.ReactNode;

  /** Key of theme.colors */
  color?: MantineColor;
}

function MenuItem({ children, className, color, ...others }: MenuItemProps) {
  const ctx = useMenuContext();
  const { classes, cx } = useStyles({ radius: 'sm', color }, { name: 'Menu' });
  const itemRef = useRef<HTMLButtonElement>();

  const itemIndex = ctx.getItemIndex(itemRef.current);

  const handleMouseEnter = (event: React.MouseEvent) => {
    (others as any).onMouseEnter?.(event);
    ctx.setHovered(ctx.getItemIndex(itemRef.current));
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    (others as any).onMouseLeave?.(event);
    ctx.setHovered(-1);
  };

  const handleClick = (event: React.MouseEvent) => {
    (others as any).onClick?.(event);
    ctx.closeOnItemClick && ctx.closeDropdown();
  };

  return (
    <Box
      component="button"
      {...others}
      className={cx(classes.item, className)}
      ref={itemRef}
      data-menu-item
      data-hovered={ctx.hovered === itemIndex ? true : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </Box>
  );
}

MenuItem.displayName = '@mantine/core/MenuItem';

const PolymorphicMenuItem = createPolymorphicComponent<'button', MenuItemProps>(MenuItem);
export { PolymorphicMenuItem as MenuItem };
