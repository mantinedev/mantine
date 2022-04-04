import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import { useTabsContext } from '../Tabs.context';

export interface TabsListProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** <Tabs.Tab /> components */
  children: React.ReactNode;
}

export function TabsList({ children, ...others }: TabsListProps) {
  const { orientation } = useTabsContext();
  return (
    <Box {...others} role="tablist" aria-orientation={orientation}>
      {children}
    </Box>
  );
}

TabsList.displayName = '@mantine/core/TabsList';
