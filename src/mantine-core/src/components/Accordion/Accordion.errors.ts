import { createErrors } from '@mantine/utils';

export const ACCORDION_ERRORS = createErrors({
  'accordion-context': 'Accordion component was not found in the tree',
  'accordion-item-context': 'Accordion.Item component was not found in the tree',
  'accordion-value': 'Accordion.Item component was rendered with invalid value or without value',
});
