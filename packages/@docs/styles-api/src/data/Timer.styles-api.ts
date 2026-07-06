import type { TimerFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TimerStylesApi: StylesApiData<TimerFactory> = {
  selectors: {
    root: 'Root element',
    value: 'Default readout element, rendered when Timer has no children',
    controls:
      'Wrapper of the default start/pause/reset buttons, rendered only with withControls prop',
    segment: 'Timer.Segment element, displays a single time segment',
    separator: 'Timer.Separator element, displays a separator between segments',
    control: 'Timer.Control element, a button that calls a controller action',
  },

  vars: {},

  modifiers: [
    {
      modifier: 'data-segment',
      selector: 'segment',
      value: 'Type of the segment (days, hours, minutes, seconds, milliseconds)',
    },
    {
      modifier: 'data-action',
      selector: 'control',
      value: 'Controller action of the control (start, pause, resume, reset, restart)',
    },
  ],
};
