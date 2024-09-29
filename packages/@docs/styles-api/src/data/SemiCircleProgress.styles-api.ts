import type { SemiCircleProgressFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const SemiCircleProgressStylesApi: StylesApiData<SemiCircleProgressFactory> = {
  selectors: {
    root: 'Root element',
    svg: 'Root svg element',
    emptySegment: 'Empty circle segment',
    filledSegment: 'Filled circle segment',
    label: 'Label element',
  },

  vars: {
    root: {
      '--scp-empty-segment-color': 'Color of the empty segment',
      '--scp-filled-segment-color': 'Color of the filled segment',
      '--scp-rotation':
        'Transform styles of the svg, controlled by `orientation` and `fillDirection` props',
      '--scp-thickness': 'Controls `strokeWidth` of the circle',
      '--scp-transition-duration': 'Controls transition duration of the filled segment',
    },
  },

  modifiers: [
    { selector: 'label', modifier: 'data-position', value: 'Value of `labelPosition` prop' },
  ],
};
