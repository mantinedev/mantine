import type { PillFactory, PillGroupFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const PillStylesApi: StylesApiData<PillFactory> = {
  selectors: {
    root: 'Root element',
    label: 'Pill label (children)',
    remove: 'Remove button',
  },

  vars: {
    root: {
      '--pill-height': 'Controls `height` of the pill',
      '--pill-fz': 'Controls `font-size`',
      '--pill-radius': 'Controls `border-radius`',
    },
  },

  modifiers: [
    { modifier: 'data-with-remove', selector: 'root', condition: '`withRemoveButton` prop is set' },
    { modifier: 'data-disabled', selector: 'root', condition: '`disabled` prop is set' },
  ],
};

export const PillGroupStylesApi: StylesApiData<PillGroupFactory> = {
  selectors: {
    group: 'Root element',
  },

  vars: {
    group: {
      '--pg-gap': 'Controls `gap` between pills',
    },
  },
};
