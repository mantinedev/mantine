import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import { TabsList } from './TabsList/TabsList';
import { TabsPanel } from './TabsPanel/TabsPanel';
import { Tab } from './Tab/Tab';
import { TabsProvider, TabsProviderProps } from './TabsProvider';

interface TabsProps
  extends TabsProviderProps,
    DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof TabsProviderProps> {}

export function Tabs({
  defaultValue,
  value,
  onTabChange,
  orientation = 'horizontal',
  children,
  id,
  ...others
}: TabsProps) {
  return (
    <TabsProvider
      value={value}
      id={id}
      defaultValue={defaultValue}
      onTabChange={onTabChange}
      orientation={orientation}
    >
      <Box {...others}>{children}</Box>
    </TabsProvider>
  );
}

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;
