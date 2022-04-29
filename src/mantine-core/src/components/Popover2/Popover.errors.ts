import { createError } from '@mantine/utils';

export const POPOVER_ERRORS = {
  context: createError({
    message: 'Popover component was not found in the tree',
    code: 'popover-context',
  }),
} as const;
