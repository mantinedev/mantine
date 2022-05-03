import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';

export interface MenuLabelProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Label content */
  children?: React.ReactNode;
}

export function MenuLabel({ children, ...others }: MenuLabelProps) {
  return <Box {...others}>{children}</Box>;
}

MenuLabel.displayName = '@mantine/core/MenuLabel';
