import { createError } from '@mantine/utils';

export const NPROGRESS_ERRORS = {
  context: createError({
    message: 'NProgressProvider component was not found in the tree',
    code: 'nprogress-context',
  }),
} as const;
