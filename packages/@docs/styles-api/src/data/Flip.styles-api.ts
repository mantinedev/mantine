import type { FlipFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const FlipStylesApi: StylesApiData<FlipFactory> = {
  selectors: {
    root: 'Root element',
    'flip-inner': 'Inner element',
    'flip-content': 'Content element',
  },

  vars: {
    root: {
      '--flip-perspective': 'Controls animation `perspective`',
      '--flip-transition-duration': 'Controls animation `duration`',
      '--flip-transition-timing-function': 'Controls animation `easing`',
    },
  },
};
