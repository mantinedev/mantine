import type { EmptyStateFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const EmptyStateStylesApi: StylesApiData<EmptyStateFactory> = {
  selectors: {
    root: 'Root element',
    body: 'Wrapper around `title`, `description` and `actions`',
    indicator: 'Wrapper around the icon or illustration',
    title: 'Title element',
    description: 'Description element',
    actions: 'Wrapper around action buttons',
  },

  vars: {
    root: {
      '--empty-state-indicator-size': 'Controls indicator icon size',
      '--empty-state-gap': 'Controls gap between elements',
      '--empty-state-title-fz': 'Controls title `font-size`',
      '--empty-state-description-fz': 'Controls description `font-size`',
      '--empty-state-indicator-bg':
        'Controls indicator background of `filled` and `light` variants',
      '--empty-state-indicator-color': 'Controls indicator color of `filled` and `light` variants',
    },
  },

  modifiers: [
    {
      modifier: 'data-align',
      selector: 'root',
      value: 'Value of `align` prop',
    },
    {
      modifier: 'data-variant',
      selector: 'root',
      value: 'Value of `variant` prop',
    },
    {
      modifier: 'data-with-background',
      selector: 'indicator',
      condition: '`withIndicatorBackground` prop is set or `variant` is set',
    },
  ],
};
