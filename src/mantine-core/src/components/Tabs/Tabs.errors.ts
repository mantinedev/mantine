import { createErrors } from '@mantine/utils';

export const TABS_ERRORS = createErrors({
  'tabs-context': 'Tabs component was not found in the tree',
  'tabs-on-change':
    'Controlled Tabs component did not receive onTabChange handler, either remove value or add onTabChange',
  'tabs-value': 'Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value',
});
