import type { ThemeIconFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ThemeIconStylesApi: StylesApiData<ThemeIconFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--ti-bg': 'Controls `background`',
      '--ti-bd': 'Controls `border`',
      '--ti-color': 'Controls icon `color`',
      '--ti-radius': 'Controls `border-radius`',
      '--ti-size': 'Controls `width`, `height`, `min-width` and `min-height` styles',
    },
  },
};
