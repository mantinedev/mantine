import type { CloseButtonFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const CloseButtonStylesApi: StylesApiData<CloseButtonFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--cb-icon-size': 'Controls `width` of the `X` icon',
      '--cb-radius': 'Controls `border-radius` of the button',
      '--cb-size': 'Controls `width` and `height` of the button',
    },
  },
};
