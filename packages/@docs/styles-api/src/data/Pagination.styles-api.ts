import type { PaginationFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const PaginationStylesApi: StylesApiData<PaginationFactory> = {
  selectors: {
    root: 'Root element',
    control: 'Control element: items, next/previous, first/last buttons',
    dots: 'Dots icon wrapper',
    items: 'Wrapper around page number controls, used with `layout="responsive"`',
    label: 'Compact label element displayed in narrow containers with `layout="responsive"`',
  },

  vars: {
    root: {
      '--pagination-active-bg': 'Active control `background-color`',
      '--pagination-active-color': 'Active control `color`',
      '--pagination-control-fz': 'Controls `font-size`',
      '--pagination-control-radius': 'Controls control `border-radius`',
      '--pagination-control-size': 'Controls control `min-width` and `height`',
    },
  },

  modifiers: [
    { modifier: 'data-active', selector: 'control', condition: 'Control is active' },
    { modifier: 'data-disabled', selector: 'control', condition: 'Control is disabled' },
    {
      modifier: 'data-layout',
      selector: 'root',
      value: 'Value of `layout` prop',
    },
  ],
};
