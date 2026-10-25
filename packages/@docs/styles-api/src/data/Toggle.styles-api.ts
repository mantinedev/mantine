import type { ToggleFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ToggleStylesApi: StylesApiData<ToggleFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--toggle-size': 'Controls toggle `height` and `min-width`',
      '--toggle-radius': 'Controls `border-radius`',
      '--toggle-active-bg': 'Controls active state `background-color`',
      '--toggle-active-hover': 'Controls active state hover `background-color`',
      '--toggle-active-color': 'Controls active state text `color`',
    },
  },

  modifiers: [
    {
      modifier: 'data-active',
      selector: 'root',
      condition: 'Toggle is in active state',
    },
    {
      modifier: 'data-disabled',
      selector: 'root',
      condition: '`disabled` prop is set',
    },
    {
      modifier: 'data-auto-width',
      selector: 'root',
      condition: '`autoWidth` prop is set',
    },
  ],
};
