import { createSafeContext } from '@mantine/utils';
import { TABS_ERRORS } from './Tabs.errors';
import type { TabsOrientation, TabsValue } from './Tabs.types';

interface TabsContext {
  id: string;
  value: TabsValue;
  orientation: TabsOrientation;
  onTabChange(value: TabsValue): void;
  getTabId(value: string): string;
  getPanelId(value: string): string;
}

export const [TabsProvider, useTabsContext] = createSafeContext<TabsContext>(
  TABS_ERRORS.context.message
);
