import { createError } from '@mantine/utils';

export const POPOVER_ERRORS = {
  context: createError({
    message: 'Popover component was not found in the tree',
    code: 'popover-context',
  }),

  children: createError({
    code: 'popover-children',
    message:
      'Popover.Target component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported',
  }),
} as const;
