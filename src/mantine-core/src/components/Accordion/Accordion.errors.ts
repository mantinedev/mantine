import { createError } from '@mantine/utils';

export const ACCORDION_ERRORS = {
  context: createError({
    message: 'Accordion component was not found in the tree',
    code: 'accordion-context',
  }),

  itemContext: createError({
    message: 'Accordion.Item component was not found in the tree',
    code: 'accordion-item-context',
  }),

  onChange: createError({
    message:
      'Controlled Accordion component did not receive onChange handler, either remove value or add onChange',
    code: 'accordion-on-change',
  }),

  value: createError({
    message: 'Accordion.Item component was rendered with invalid value or without value',
    code: 'accordion-value',
  }),
} as const;
