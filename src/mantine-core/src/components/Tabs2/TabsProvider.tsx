import React from 'react';
import { useUncontrolled, useId } from '@mantine/utils';
import { MantineColor } from '@mantine/styles';
import { TabsContextProvider } from './Tabs.context';
import { TABS_ERRORS } from './Tabs.errors';
import { TabsValue, TabsOrientation, TabsVariant } from './Tabs.types';
import { getId } from './get-id/get-id';

export interface TabsProviderProps {
  defaultValue?: TabsValue;
  value?: TabsValue;
  onTabChange?(value: TabsValue): void;
  orientation?: TabsOrientation;
  id?: string;
  loop?: boolean;
  activateTabWithKeyboardEvents?: boolean;
  allowTabDeactivation?: boolean;
  children: React.ReactNode;
  variant?: TabsVariant;
  color?: MantineColor;
}

export function TabsProvider({
  defaultValue,
  value,
  onTabChange,
  orientation,
  children,
  loop,
  id,
  activateTabWithKeyboardEvents,
  allowTabDeactivation,
  variant,
  color,
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
        orientation,
        id: uid,
        loop,
        activateTabWithKeyboardEvents,
        getTabId: getId(uid, 'tab'),
        getPanelId: getId(uid, 'panel'),
        onTabChange: onChange,
        allowTabDeactivation,
        variant,
        color,
      }}
    >
      {children}
    </TabsContextProvider>
  );
}

TabsProvider.displayName = '@mantine/core/TabsProvider';
