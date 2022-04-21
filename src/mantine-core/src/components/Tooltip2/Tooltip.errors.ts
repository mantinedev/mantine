import { createError } from '@mantine/utils';

export const TOOLTIP_ERRORS = {
  children: createError({
    code: 'tooltip-children',
    message:
      'Tooltip component children should be an element or a component, fragments, strings, numbers and other primitive values are not supported',
  }),
} as const;
