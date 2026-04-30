import type { OverflowListFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const OverflowListStylesApi: StylesApiData<OverflowListFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--ol-gap': 'Controls gap between items',
    },
  },

  modifiers: [],
};
