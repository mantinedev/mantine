import type { AccordionFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const AccordionStylesApi: StylesApiData<AccordionFactory> = {
  selectors: {
    root: 'Root element',
    item: '`Accordion.Item` root element',
    control: '`Accordion.Control` root element',
    chevron: '`Accordion.Control` chevron container element',
    label: '`Accordion.Control` label',
    icon: '`Accordion.Control` icon',
    itemTitle: '`Accordion.Control` title (h2-h6) tag',
    panel: '`Accordion.Panel` root element',
    content: 'Wrapper element of `Accordion.Panel` `children`',
  },

  vars: {
    root: {
      '--accordion-chevron-size': 'Controls chevron container element `width` and `min-width`',
      '--accordion-radius': 'Controls `border-radius` in various elements, depending on variant',
      '--accordion-transition-duration': 'Controls all animations `transition-duration`',
    },
  },

  modifiers: [
    {
      modifier: 'data-active',
      selector: ['item', 'control'],
      condition: 'Item is active (opened)',
    },
    {
      modifier: 'data-chevron-position',
      selector: 'control',
      value: 'Value of `chevronPosition` prop on `Accordion`',
    },
  ],
};
