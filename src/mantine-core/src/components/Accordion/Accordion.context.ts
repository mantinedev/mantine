import { MantineNumberSize } from '@mantine/styles';
import { createSafeContext } from '@mantine/utils';
import { ACCORDION_ERRORS } from './Accordion.errors';
import {
  AccordionChevronPosition,
  AccordionHeadingOrder,
  AccordionVariant,
} from './Accordion.types';

interface AccordionContext {
  loop: boolean;
  transitionDuration: number;
  disableChevronRotation: boolean;
  chevronPosition: AccordionChevronPosition;
  chevronSize: number;
  order: AccordionHeadingOrder;
  chevron: React.ReactNode;
  variant: AccordionVariant;
  radius: MantineNumberSize;
  onChange(value: string): void;
  isItemActive(value: string): boolean;
  getControlId(value: string): string;
  getRegionId(value: string): string;
}

export const [AccordionContextProvider, useAccordionContext] = createSafeContext<AccordionContext>(
  ACCORDION_ERRORS.context.message
);
