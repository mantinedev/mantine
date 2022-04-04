import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import { useTabsContext } from '../Tabs.context';

interface TabsPanelProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Panel content */
  children: React.ReactNode;

  /** Value of associated <Tab /> component */
  value: string;
}

export function TabsPanel({ value, children, ...others }: TabsPanelProps) {
  const ctx = useTabsContext();
  return (
    <Box sx={{ display: ctx.value !== value ? 'none' : undefined }} {...others}>
      {children}
    </Box>
  );
}
