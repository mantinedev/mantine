import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import { packSx } from '@mantine/utils';
import { Box } from '../../Box';
import { useTabsContext } from '../Tabs.context';
import useStyles from './TabsPanel.styles';

export interface TabsPanelProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Panel content */
  children: React.ReactNode;

  /** Value of associated <Tab /> component */
  value: string;
}

export const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(
  ({ value, children, sx, className, ...others }, ref) => {
    const ctx = useTabsContext();
    const { classes, cx } = useStyles(
      { orientation: ctx.orientation },
      { name: 'Tabs', unstyled: ctx.unstyled }
    );

    return (
      <Box
        {...others}
        ref={ref}
        sx={[{ display: ctx.value !== value ? 'none' : undefined }, ...packSx(sx)]}
        className={cx(classes.panel, className)}
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
