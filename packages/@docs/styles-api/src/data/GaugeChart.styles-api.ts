import type { GaugeChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const GaugeChartStylesApi: StylesApiData<GaugeChartFactory> = {
  selectors: {
    root: 'Root SVG element',
    track: 'Background arc path',
    section: 'Threshold section arc, or the value arc when `sections` is not set',
    sectionCap: 'Round-capped copy of the first and last sections, rendered when roundCaps is set',
    needle: 'Target marker line (`target` prop)',
    label: 'Center label container',
  },

  vars: {
    root: {
      '--gauge-size': 'Controls chart width, height is derived from the arc proportions',
    },
  },
  modifiers: [],
};
