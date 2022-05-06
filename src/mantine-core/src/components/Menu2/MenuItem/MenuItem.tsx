import React, { useRef } from 'react';
import { DefaultProps, MantineColor } from '@mantine/styles';
import { createPolymorphicComponent, getContextItemIndex } from '@mantine/utils';
import { Box } from '../../Box';
import useStyles from './MenuItem.styles';

export interface MenuItemProps extends DefaultProps {
  /** Item label */
  children?: React.ReactNode;

  /** Key of theme.colors */
  color?: MantineColor;
}

function MenuItem({ children, className, color, ...others }: MenuItemProps) {
  const { classes, cx } = useStyles({ radius: 'sm', color }, { name: 'Menu' });
  const itemRef = useRef<HTMLButtonElement>();
  console.log(
    getContextItemIndex('[data-menu-item]', '[data-menu-dropdown]', itemRef.current),
    itemRef.current
  );
  return (
    <Box
      component="button"
      className={cx(classes.item, className)}
      ref={itemRef}
      data-menu-item
      {...others}
    >
      {children}
    </Box>
  );
}

MenuItem.displayName = '@mantine/core/MenuItem';

const PolymorphicMenuItem = createPolymorphicComponent<'button', MenuItemProps>(MenuItem);
export { PolymorphicMenuItem as MenuItem };
