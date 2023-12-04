import type { OverlayFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const OverlayStylesApi: StylesApiData<OverlayFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--overlay-bg': 'Controls `background-color`',
      '--overlay-filter': 'Controls `backdrop-filter`',
      '--overlay-radius': 'Controls `border-radius`',
      '--overlay-z-index': 'Controls `z-index`',
    },
  },

  modifiers: [
    { modifier: 'data-center', selector: 'root', condition: '`center` prop is set' },
    { modifier: 'data-fixed', selector: 'root', condition: '`fixed` prop is set' },
  ],
};
