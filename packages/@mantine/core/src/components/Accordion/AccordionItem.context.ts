import { createSafeContext } from '../../core';

export interface AccordionItemContextValue {
  value: string;
}

export const [AccordionItemProvider, useAccordionItemContext] =
  createSafeContext<AccordionItemContextValue>(
    'Accordion.Item component was not found in the tree'
  );
