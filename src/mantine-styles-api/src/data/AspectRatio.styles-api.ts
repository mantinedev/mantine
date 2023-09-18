import type { AspectRatioFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const AspectRatioStylesApi: StylesApiData<AspectRatioFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--ar-ratio': 'Aspect ratio',
    },
  },
};
