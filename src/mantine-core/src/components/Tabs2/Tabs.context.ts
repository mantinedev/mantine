import { createSafeContext } from '@mantine/utils';
import { MantineColor } from '@mantine/styles';
import { TabsVariant } from './Tabs.types';
import { TABS_ERRORS } from './Tabs.errors';
import type { TabsOrientation, TabsValue } from './Tabs.types';

interface TabsContext {
  id: string;
  value: TabsValue;
  orientation: TabsOrientation;
  loop: boolean;
  activateTabWithKeyboardEvents: boolean;
  allowTabDeactivation: boolean;
  onTabChange(value: TabsValue): void;
  getTabId(value: string): string;
  getPanelId(value: string): string;
  variant: TabsVariant;
  color: MantineColor;
  unstyled: boolean;
}

export const [TabsContextProvider, useTabsContext] = createSafeContext<TabsContext>(
  TABS_ERRORS.context.message
);
