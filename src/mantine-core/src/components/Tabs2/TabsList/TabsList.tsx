import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import { useTabsContext } from '../Tabs.context';

export interface TabsListProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** <Tabs.Tab /> components */
  children: React.ReactNode;
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, ...others }, ref) => {
    const { orientation } = useTabsContext();
    return (
      <Box {...others} ref={ref} role="tablist" aria-orientation={orientation}>
        {children}
      </Box>
    );
  }
);

TabsList.displayName = '@mantine/core/TabsList';
