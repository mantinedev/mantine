import type { FloatingIndicatorFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const FloatingIndicatorStylesApi: StylesApiData<FloatingIndicatorFactory> = {
  selectors: {
    root: 'Indicator element that animates to match the target position and size',
  },

  vars: {
    root: {
      '--transition-duration': 'Controls indicator transition duration',
    },
  },

  modifiers: [
    {
      modifier: 'data-initialized',
      selector: 'root',
      condition: 'Indicator has been initialized and transitions are enabled',
    },
    {
      modifier: 'data-hidden',
      selector: 'root',
      condition: 'Indicator is hidden (when displayAfterTransitionEnd is true)',
    },
  ],
};
