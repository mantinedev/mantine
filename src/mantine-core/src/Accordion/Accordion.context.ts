import { MantineNumberSize, ClassNames, Styles } from '@mantine/styles';
import { createSafeContext } from '@mantine/utils';
import { ACCORDION_ERRORS } from './Accordion.errors';
import {
  AccordionChevronPosition,
  AccordionHeadingOrder,
  AccordionVariant,
} from './Accordion.types';
import type { AccordionStylesNames } from './Accordion';

interface AccordionContext {
  loop: boolean;
  transitionDuration: number;
  disableChevronRotation: boolean;
  chevronPosition: AccordionChevronPosition;
  chevronSize: number | string;
  order: AccordionHeadingOrder;
  chevron: React.ReactNode;
  variant: AccordionVariant;
  radius: MantineNumberSize;
  onChange(value: string): void;
  isItemActive(value: string): boolean;
  getControlId(value: string): string;
  getRegionId(value: string): string;
  classNames: ClassNames<AccordionStylesNames>;
  styles: Styles<AccordionStylesNames>;
  unstyled: boolean;
}

export const [AccordionContextProvider, useAccordionContext] = createSafeContext<AccordionContext>(
  ACCORDION_ERRORS.context
);
