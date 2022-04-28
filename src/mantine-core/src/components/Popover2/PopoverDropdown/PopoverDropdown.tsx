import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';

export interface PopoverDropdownProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

export function PopoverDropdown({ ...others }: PopoverDropdownProps) {
  return <Box {...others}>Dropdown</Box>;
}

PopoverDropdown.displayName = '@mantine/core/PopoverDropdown';
