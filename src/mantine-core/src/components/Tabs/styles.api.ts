import { TabsStylesNames } from './Tabs';
import { TabControlStylesNames } from './TabControl/TabControl';

export const Tabs: Record<TabsStylesNames, string> = {
  root: 'Root element',
  tabsListWrapper: 'Wrapper around tabs controls list',
  tabsList: 'Tabs control list',
  body: 'Tab body content',
};

export const Tab: Record<TabControlStylesNames, string> = {
  root: 'Root element',
  active: 'Active tab',
  label: 'Tab label',
  inner: 'Tab inner, includes label and icon',
  icon: 'Tab icon wrapper',
};
