import type { FloatingIndicatorFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const FloatingIndicatorStylesApi: StylesApiData<FloatingIndicatorFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--transition-duration': 'Controls indicator transition duration',
    },
  },
};
