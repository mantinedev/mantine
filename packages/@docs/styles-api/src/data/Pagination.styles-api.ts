import type { PaginationFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const PaginationStylesApi: StylesApiData<PaginationFactory> = {
  selectors: {
    root: 'Root element',
    control: 'Control element: items, next/previous, first/last buttons',
    dots: 'Dots icon wrapper',
  },

  vars: {
    root: {
      '--pagination-active-bg': 'Active control `background-color`',
      '--pagination-control-fz': 'Controls control `font-size`',
      '--pagination-control-radius': 'Controls control `border-radius`',
      '--pagination-control-size': 'Controls control `min-width` and `height`',
    },
  },

  modifiers: [
    { modifier: 'data-active', selector: 'control', condition: 'Control is active' },
    { modifier: 'data-disabled', selector: 'control', condition: 'Control is disabled' },
  ],
};
