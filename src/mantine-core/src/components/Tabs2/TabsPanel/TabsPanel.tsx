import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import { packSx } from '@mantine/utils';
import { Box } from '../../Box';
import { useTabsContext } from '../Tabs.context';

export interface TabsPanelProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Panel content */
  children: React.ReactNode;

  /** Value of associated <Tab /> component */
  value: string;
}

export const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(
  ({ value, children, sx, ...others }, ref) => {
    const ctx = useTabsContext();
    return (
      <Box
        {...others}
        ref={ref}
        sx={[{ display: ctx.value !== value ? 'none' : undefined, flex: 1 }, ...packSx(sx)]}
        role="tabpanel"
        id={ctx.getPanelId(value)}
        aria-labelledby={ctx.getTabId(value)}
      >
        {children}
      </Box>
    );
  }
);

TabsPanel.displayName = '@mantine/core/TabsPanel';
