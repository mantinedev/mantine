import { createError } from '@mantine/utils';

export const TABS_ERRORS = {
  context: createError({
    message: 'Tabs component was not found in the tree',
    code: 'tabs-context',
  }),

  onChange: createError({
    message:
      'Controlled Tabs component did not receive onTabChange handler, either remove value or add onTabChange',
    code: 'tabs-on-change',
  }),

  value: createError({
    message: 'Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value',
    code: 'tabs-value',
  }),
} as const;
