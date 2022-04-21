import React from 'react';
import { useUncontrolled, useId, getSafeId } from '@mantine/utils';
import { MantineColor, MantineNumberSize } from '@mantine/styles';
import { TabsContextProvider } from './Tabs.context';
import { TABS_ERRORS } from './Tabs.errors';
import { TabsValue, TabsOrientation, TabsVariant } from './Tabs.types';

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
  activateTabWithKeyboard?: boolean;

  /** Determines whether tab can be deactivated, defaults to false */
  allowTabDeactivation?: boolean;

  /** Tabs content */
  children: React.ReactNode;

  /** Controls component visuals */
  variant?: TabsVariant;

  /** Key of theme.colors */
  color?: MantineColor;

  /** Tabs border-radius from theme.radius or number ti set value from theme, defaults to theme.defaultRadius */
  radius?: MantineNumberSize;

  /** Determines whether tabs should have inverted styles */
  inverted?: boolean;
}

export function TabsProvider({
  defaultValue,
  value,
  onTabChange,
  orientation,
  children,
  loop,
  id,
  activateTabWithKeyboard,
  allowTabDeactivation,
  variant,
  color,
  radius,
  inverted,
}: TabsProviderProps) {
  const uid = useId(id);

  const [_value, onChange] = useUncontrolled<TabsValue>({
    value,
    defaultValue,
    finalValue: null,
    onChange: onTabChange,
    errorMessage: TABS_ERRORS.onChange,
  });

  return (
    <TabsContextProvider
      value={{
        value: _value,
        orientation,
        id: uid,
        loop,
        activateTabWithKeyboard,
        getTabId: getSafeId(`${uid}-tab`, TABS_ERRORS.value),
        getPanelId: getSafeId(`${uid}-panel`, TABS_ERRORS.value),
        onTabChange: onChange,
        allowTabDeactivation,
        variant,
        color,
        radius,
        inverted,
      }}
    >
      {children}
    </TabsContextProvider>
  );
}

TabsProvider.displayName = '@mantine/core/TabsProvider';
