import { createSafeContext } from '@mantine/utils';
import { MantineColor, MantineNumberSize, ClassNames, Styles } from '@mantine/styles';
import {
  TabsOrientation,
  TabsPlacement,
  TabsValue,
  TabsVariant,
  TabsStylesParams,
} from './Tabs.types';
import { TABS_ERRORS } from './Tabs.errors';
import type { TabsStylesNames } from './Tabs';

interface TabsContext {
  id: string;
  value: TabsValue;
  orientation: TabsOrientation;
  loop: boolean;
  activateTabWithKeyboard: boolean;
  allowTabDeactivation: boolean;
  onTabChange(value: TabsValue): void;
  getTabId(value: string): string;
  getPanelId(value: string): string;
  setMountedPanelIds(values: string[] | ((oldValue: string[]) => string[])): void;
  mountedPanelIds: string[];
  variant: TabsVariant;
  color: MantineColor;
  radius: MantineNumberSize;
  inverted: boolean;
  keepMounted: boolean;
  placement: TabsPlacement;
  classNames: ClassNames<TabsStylesNames>;
  styles: Styles<TabsStylesNames, TabsStylesParams>;
  unstyled: boolean;
}

export const [TabsContextProvider, useTabsContext] = createSafeContext<TabsContext>(
  TABS_ERRORS.context
);
