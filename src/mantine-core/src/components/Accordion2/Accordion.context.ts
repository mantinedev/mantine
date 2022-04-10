import { createSafeContext } from '@mantine/utils';
import { ACCORDION_ERRORS } from './Accordion.errors';

interface AccordionContext {
  id: string;
  loop: boolean;
  onChange(value: string): void;
  isItemActive(value: string): void;
  getControlId(value: string): void;
  getRegionId(value: string): void;
}

export const [AccordionContextProvider, useAccordionContext] = createSafeContext<AccordionContext>(
  ACCORDION_ERRORS.context.message
);
