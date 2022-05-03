import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';

export interface MenuDropdownProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Item label */
  children?: React.ReactNode;
}

export function MenuDropdown({ children, ...others }: MenuDropdownProps) {
  return <Box {...others}>{children}</Box>;
}

MenuDropdown.displayName = '@mantine/core/MenuDropdown';
