import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';

export interface MenuItemProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Item label */
  children?: React.ReactNode;
}

export function MenuItem({ children, ...others }: MenuItemProps) {
  return <Box {...others}>{children}</Box>;
}

MenuItem.displayName = '@mantine/core/MenuItem';
