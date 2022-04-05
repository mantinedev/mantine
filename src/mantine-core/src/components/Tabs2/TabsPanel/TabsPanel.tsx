import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import { useTabsContext } from '../Tabs.context';

export interface TabsPanelProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Panel content */
  children: React.ReactNode;

  /** Value of associated <Tab /> component */
  value: string;
}

export function TabsPanel({ value, children, ...others }: TabsPanelProps) {
  const ctx = useTabsContext();
  return (
    <Box
      {...others}
      sx={{ display: ctx.value !== value ? 'none' : undefined }}
      role="tabpanel"
      id={ctx.getPanelId(value)}
      aria-labelledby={ctx.getTabId(value)}
    >
      {children}
    </Box>
  );
}

TabsPanel.displayName = '@mantine/core/TabsPanel';
