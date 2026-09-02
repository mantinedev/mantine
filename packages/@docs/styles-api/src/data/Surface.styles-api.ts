import type { SurfaceFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const SurfaceStylesApi: StylesApiData<SurfaceFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--surface-radius': 'Controls `border-radius`',
      '--surface-shadow': 'Controls `box-shadow`',
    },
  },

  modifiers: [
    { modifier: 'data-with-border', selector: 'root', condition: '`withBorder` prop is set' },
    {
      modifier: 'data-mantine-surface-level',
      selector: 'root',
      value: 'resolved surface level, `0`–`2`',
    },
  ],
};
