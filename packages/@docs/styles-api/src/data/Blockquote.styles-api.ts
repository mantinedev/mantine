import type { BlockquoteFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const BlockquoteStylesApi: StylesApiData<BlockquoteFactory> = {
  selectors: {
    root: 'Root element',
    icon: 'Icon element',
    cite: 'Cite element',
  },

  vars: {
    root: {
      '--bq-bd': 'Controls accent line color',
      '--bq-icon-color': 'Controls icon color',
      '--bq-icon-size': 'Controls `width`, `height` and `font-size` of the icon',
      '--bq-text-wrap': 'Controls `text-wrap` property',
    },
  },
};
