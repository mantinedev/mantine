import { createSafeContext } from '@mantine/utils';
import { TABS_ERRORS } from './Tabs.errors';
import type { TabsOrientation, TabsValue } from './Tabs.types';

interface TabsContext {
  id: string;
  value: TabsValue;
  orientation: TabsOrientation;
  loop: boolean;
  onTabChange(value: TabsValue): void;
  getTabId(value: string): string;
  getPanelId(value: string): string;
}

export const [TabsContextProvider, useTabsContext] = createSafeContext<TabsContext>(
  TABS_ERRORS.context.message
);
