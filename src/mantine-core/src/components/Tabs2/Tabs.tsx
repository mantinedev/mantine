import React from 'react';
import { useUncontrolled, useId } from '@mantine/utils';
import { TabsProvider } from './Tabs.context';
import { TABS_ERRORS } from './Tabs.errors';
import type { TabsValue, TabsOrientation } from './Tabs.types';
import { TabsList } from './TabsList/TabsList';
import { TabsPanel } from './TabsPanel/TabsPanel';
import { Tab } from './Tab/Tab';
import { getId } from './get-id/get-id';

interface TabsProps {
  defaultValue?: TabsValue;
  value?: TabsValue;
  onTabChange?(value: TabsValue): void;
  orientation?: TabsOrientation;
  id?: string;
  children: React.ReactNode;
}

export function Tabs({
  defaultValue,
  value,
  onTabChange,
  orientation = 'horizontal',
  children,
  id,
}: TabsProps) {
  const uid = useId(id);

  const [_value, onChange] = useUncontrolled<TabsValue>({
    value,
    defaultValue,
    finalValue: null,
    onChange: onTabChange,
    errorMessage: TABS_ERRORS.onChange.message,
  });

  return (
    <TabsProvider
      value={{
        value: _value,
        onTabChange: onChange,
        orientation,
        id: uid,
        getTabId: getId(uid, 'tab'),
        getPanelId: getId(uid, 'panel'),
      }}
    >
      {children}
    </TabsProvider>
  );
}

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;
