import { createSafeContext } from '@mantine/utils';
import { ACCORDION_ERRORS } from './Accordion.errors';
import { AccordionChevronPosition, AccordionHeadingOrder } from './Accordion.types';

interface AccordionContext {
  id: string;
  loop: boolean;
  transitionDuration: number;
  disableChevronRotation: boolean;
  chevronPosition: AccordionChevronPosition;
  chevronSize: number;
  order: AccordionHeadingOrder;
  chevron: React.ReactNode;
  onChange(value: string): void;
  isItemActive(value: string): boolean;
  getControlId(value: string): string;
  getRegionId(value: string): string;
}

export const [AccordionContextProvider, useAccordionContext] = createSafeContext<AccordionContext>(
  ACCORDION_ERRORS.context.message
);
