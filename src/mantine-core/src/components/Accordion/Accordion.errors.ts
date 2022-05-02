import { createErrors } from '@mantine/utils';

export const ACCORDION_ERRORS = createErrors({
  'accordion-context': 'Accordion component was not found in the tree',
  'accordion-item-context': 'Accordion.Item component was not found in the tree',
  'accordion-on-change':
    'Controlled Accordion component did not receive onChange handler, either remove value or add onChange',
  'accordion-value': 'Accordion.Item component was rendered with invalid value or without value',
});
