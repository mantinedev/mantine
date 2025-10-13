import { createSafeContext, GetStylesApi } from '../../core';
import type { AccordionFactory } from './Accordion';
import { AccordionChevronPosition, AccordionHeadingOrder } from './Accordion.types';

export interface AccordionContextValue {
  loop: boolean | undefined;
  transitionDuration: number | undefined;
  disableChevronRotation: boolean | undefined;
  chevronPosition: AccordionChevronPosition | undefined;
  order: AccordionHeadingOrder | undefined;
  chevron: React.ReactNode;
  onChange: (value: string) => void;
  isItemActive: (value: string) => boolean;
  getControlId: (value: string) => string;
  getRegionId: (value: string) => string;
  getStyles: GetStylesApi<AccordionFactory>;
  variant: string | undefined;
  unstyled: boolean | undefined;
}

export const [AccordionProvider, useAccordionContext] = createSafeContext<AccordionContextValue>(
  'Accordion component was not found in the tree'
);
