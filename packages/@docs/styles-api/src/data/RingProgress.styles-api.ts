import type { RingProgressFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const RingProgressStylesApi: StylesApiData<RingProgressFactory> = {
  selectors: {
    root: 'Root element',
    svg: 'svg element',
    curve: 'circle element',
    label: 'Label element',
  },

  vars: {
    root: {
      '--rp-label-offset': 'Label offset on the left and right sides of the ring',
      '--rp-size': 'Controls `height` and `width` of svg and root elements',
      '--rp-transition-duration': 'Controls transition duration of filled segments',
    },
  },
};
