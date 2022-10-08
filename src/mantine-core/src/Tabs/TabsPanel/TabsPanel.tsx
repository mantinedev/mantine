import React, { forwardRef } from 'react';
import { Selectors, DefaultProps, useContextStylesApi } from '@mantine/styles';
import { packSx } from '@mantine/utils';
import { Box } from '../../Box';
import { useTabsContext } from '../Tabs.context';
import useStyles from './TabsPanel.styles';

export type TabsPanelStylesNames = Selectors<typeof useStyles>;

export interface TabsPanelProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Panel content */
  children: React.ReactNode;

  /** Value of associated control */
  value: string;
}

export const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(
  ({ value, children, sx, className, ...others }, ref) => {
    const ctx = useTabsContext();
    const { classNames, styles, unstyled } = useContextStylesApi();
    const { classes, cx } = useStyles(
      {
        orientation: ctx.orientation,
        variant: ctx.variant,
        color: ctx.color,
        radius: ctx.radius,
        inverted: ctx.inverted,
      },
      { name: 'Tabs', unstyled, classNames, styles }
    );

    const active = ctx.value === value;
    const content = ctx.keepMounted ? children : active ? children : null;

    return (
      <Box
        {...others}
        ref={ref}
        sx={[{ display: !active ? 'none' : undefined }, ...packSx(sx)]}
        className={cx(classes.panel, className)}
        role="tabpanel"
        id={ctx.getPanelId(value)}
        aria-labelledby={ctx.getTabId(value)}
      >
        {content}
      </Box>
    );
  }
);

TabsPanel.displayName = '@mantine/core/TabsPanel';
