import type { RingProgressFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const RingProgressStylesApi: StylesApiData<RingProgressFactory> = {
  selectors: {
    root: 'Root container element',
    svg: 'SVG element containing all ring sections',
    curve: 'Individual ring section (circle element)',
    label: 'Label displayed in the center of the ring',
  },

  vars: {
    root: {
      '--rp-label-offset': 'Controls horizontal spacing between label and ring edges',
      '--rp-size': 'Controls width and height of the entire component',
      '--rp-transition-duration': 'Controls animation duration for value and color changes',
    },
    svg: {
      '--rp-start-angle': 'Controls the starting angle of the progress ring in degrees',
    },
  },
};
