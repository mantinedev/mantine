import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';

export interface MenuDividerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

export function MenuDivider({ children, ...others }: MenuDividerProps) {
  return <Box {...others}>Divider</Box>;
}

MenuDivider.displayName = '@mantine/core/MenuDivider';
