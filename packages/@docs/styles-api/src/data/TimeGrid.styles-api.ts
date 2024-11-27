import type { TimeGridFactory } from '@mantine/dates';
import type { StylesApiData } from '../types';

export const TimeGridStylesApi: StylesApiData<TimeGridFactory> = {
  selectors: {
    root: 'Root element',
    control: 'Time grid control',
    simpleGrid: 'SimpleGrid component root',
  },

  vars: {
    root: {
      '--time-grid-fz': 'Controls `font-size` property of all controls',
      '--time-grid-radius': 'Controls `border-radius` property of all controls',
    },
  },

  modifiers: [
    {
      modifier: 'data-active',
      selector: 'control',
      condition: 'Current component value is the same as control value',
    },
    {
      modifier: 'data-disabled',
      selector: 'control',
      condition:
        'Component is disabled by one of the props: `minTime`, `maxTime`, `disableTime`, `disabled`',
    },
  ],
};
