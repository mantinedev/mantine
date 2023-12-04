import type { StackFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const StackStylesApi: StylesApiData<StackFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--stack-align': 'Controls `align-items` property',
      '--stack-justify': 'Controls `justify-content` property',
      '--stack-gap': 'Controls `gap` property',
    },
  },
};
