import { createError } from '@mantine/utils';

export const TABS_ERRORS = {
  context: createError({
    message: 'Tabs component was not found in the tree',
    code: 'headless-tabs-context',
  }),

  onChange: createError({
    message:
      'Controlled Tabs component did not receive onTabChange handler, either remove value or add onChange',
    code: 'headless-tabs-on-change',
  }),
} as const;
