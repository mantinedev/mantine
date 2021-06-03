import tabsStyles from './Tabs.styles';
import tabStyles from './TabControl/TabControl.styles';

export const Tabs: MantineClasses<typeof tabsStyles> = {
  root: 'Root element',
  tabsListWrapper: 'Wrapper around tabs controls list',
  tabsList: 'Tabs control list',
  default: 'Default variant',
  outline: 'Outline variant',
  body: 'Tad body content',
};

export const Tab: MantineClasses<typeof tabStyles> = {
  root: 'Root element',
  active: 'Active tab',
  label: 'Tab label',
  default: 'Default variant',
  outline: 'Outline variant',
  inner: 'Tab inner, includes label and icon',
  icon: 'Tab icon wrapper',
};
