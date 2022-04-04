import React, { forwardRef } from 'react';
import { DefaultProps, ForwardRefWithStaticComponents } from '@mantine/styles';
import { Box } from '../Box';
import { TabsList } from './TabsList/TabsList';
import { TabsPanel } from './TabsPanel/TabsPanel';
import { Tab } from './Tab/Tab';
import { TabsProvider, TabsProviderProps } from './TabsProvider';

export interface TabsProps
  extends TabsProviderProps,
    DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof TabsProviderProps> {}

type TabsComponent = ForwardRefWithStaticComponents<
  TabsProps,
  {
    List: typeof TabsList;
    Tab: typeof Tab;
    Panel: typeof TabsPanel;
  }
>;

export const Tabs: TabsComponent = forwardRef(
  ({
    defaultValue,
    value,
    orientation = 'horizontal',
    loop = true,
    activateTabWithKeyboardEvents = true,
    children,
    id,
    onTabChange,
    ...others
  }: TabsProps) => (
    <TabsProvider
      activateTabWithKeyboardEvents={activateTabWithKeyboardEvents}
      defaultValue={defaultValue}
      orientation={orientation}
      onTabChange={onTabChange}
      value={value}
      id={id}
      loop={loop}
    >
      <Box {...others}>{children}</Box>
    </TabsProvider>
  )
) as any;

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;

Tabs.displayName = '@mantine/core/Tabs';
