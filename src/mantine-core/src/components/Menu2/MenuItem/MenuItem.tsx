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

  return (
    <Box
      component="button"
      className={cx(classes.item, className)}
      ref={itemRef}
      data-menu-item
      data-hovered={ctx.hovered === itemIndex ? true : undefined}
      onMouseEnter={() => ctx.setHovered(ctx.getItemIndex(itemRef.current))}
      onMouseLeave={() => ctx.setHovered(-1)}
      {...others}
    >
      {children}
    </Box>
  );
}

MenuItem.displayName = '@mantine/core/MenuItem';

const PolymorphicMenuItem = createPolymorphicComponent<'button', MenuItemProps>(MenuItem);
export { PolymorphicMenuItem as MenuItem };
