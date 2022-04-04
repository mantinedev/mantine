import React from 'react';
import { useUncontrolled, useId } from '@mantine/utils';
import { TabsContextProvider } from './Tabs.context';
import { TABS_ERRORS } from './Tabs.errors';
import type { TabsValue, TabsOrientation } from './Tabs.types';
import { getId } from './get-id/get-id';

export interface TabsProviderProps {
  defaultValue?: TabsValue;
  value?: TabsValue;
  onTabChange?(value: TabsValue): void;
  orientation?: TabsOrientation;
  id?: string;
  loop?: boolean;
  children: React.ReactNode;
}

export function TabsProvider({
  defaultValue,
  value,
  onTabChange,
  orientation,
  children,
  loop,
  id,
}: TabsProviderProps) {
  const uid = useId(id);

  const [_value, onChange] = useUncontrolled<TabsValue>({
    value,
    defaultValue,
    finalValue: null,
    onChange: onTabChange,
    errorMessage: TABS_ERRORS.onChange.message,
  });

  return (
    <TabsContextProvider
      value={{
        value: _value,
        onTabChange: onChange,
        orientation,
        id: uid,
        getTabId: getId(uid, 'tab'),
        getPanelId: getId(uid, 'panel'),
        loop,
      }}
    >
      {children}
    </TabsContextProvider>
  );
}

TabsProvider.displayName = '@mantine/core/TabsProvider';
