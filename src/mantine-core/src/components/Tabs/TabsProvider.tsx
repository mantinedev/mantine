import React from 'react';
import { useUncontrolled, useId } from '@mantine/utils';
import { MantineColor } from '@mantine/styles';
import { TabsContextProvider } from './Tabs.context';
import { TABS_ERRORS } from './Tabs.errors';
import { TabsValue, TabsOrientation, TabsVariant } from './Tabs.types';
import { getId } from './get-id/get-id';

export interface TabsProviderProps {
  /** Default value for uncontrolled component */
  defaultValue?: TabsValue;

  /** Value for controlled component */
  value?: TabsValue;

  /** Callback for controlled component */
  onTabChange?(value: TabsValue): void;

  /** Tabs orientation, vertical or horizontal */
  orientation?: TabsOrientation;

  /** Base id, used to generate ids that connect labels with controls, by default generated randomly */
  id?: string;

  /** Determines whether arrow key presses should loop though items (first to last and last to first) */
  loop?: boolean;

  /** Determines whether tab should be activated with arrow key press, defaults to true */
  activateTabWithKeyboardEvents?: boolean;

  /** Determines whether tab can be deactivated, defaults to false */
  allowTabDeactivation?: boolean;

  /** Tabs content */
  children: React.ReactNode;

  /** Controls component visuals */
  variant?: TabsVariant;

  /** Key of theme.colors */
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
