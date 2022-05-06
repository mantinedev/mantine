import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box } from '../../Box';

export interface MenuItemProps extends DefaultProps {
  /** Item label */
  children?: React.ReactNode;
}

function MenuItem({ children, ...others }: MenuItemProps) {
  return <Box {...others}>{children}</Box>;
}

MenuItem.displayName = '@mantine/core/MenuItem';

const PolymorphicMenuItem = createPolymorphicComponent<'button', MenuItemProps>(MenuItem);
export { PolymorphicMenuItem as MenuItem };
