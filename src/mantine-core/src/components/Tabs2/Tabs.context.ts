import { createSafeContext } from '@mantine/utils';
import { TABS_ERRORS } from './Tabs.errors';
import type { TabsOrientation, TabsValue } from './Tabs.types';

interface TabsContext {
  value: TabsValue;
  orientation: TabsOrientation;
  onTabChange(value: TabsValue): void;
  id: string;
}

export const [TabsProvider, useTabsContext] = createSafeContext<TabsContext>(
  TABS_ERRORS.context.message
);
