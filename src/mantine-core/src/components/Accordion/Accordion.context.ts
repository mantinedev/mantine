import { createSafeContext } from '@mantine/utils';
import { ACCORDION_ERRORS } from './Accordion.errors';
import { AccordionIconPosition, AccordionHeadingOrder } from './Accordion.types';

interface AccordionContext {
  id: string;
  loop: boolean;
  transitionDuration: number;
  disableIconRotation: boolean;
  iconPosition: AccordionIconPosition;
  offsetIcon: boolean;
  iconSize: number;
  order: AccordionHeadingOrder;
  icon: React.ReactNode;
  onChange(value: string): void;
  isItemActive(value: string): boolean;
  getControlId(value: string): string;
  getRegionId(value: string): string;
}

export const [AccordionContextProvider, useAccordionContext] = createSafeContext<AccordionContext>(
  ACCORDION_ERRORS.context.message
);
