import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';

interface TabsPanelProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Panel content */
  children: React.ReactNode;

  /** Value of associated <Tab /> component */
  value: string;
}

export function TabsPanel({ value, children, ...others }: TabsPanelProps) {
  return <Box {...others}>{children}</Box>;
}
