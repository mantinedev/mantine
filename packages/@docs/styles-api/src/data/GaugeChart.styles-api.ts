import type { GaugeChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const GaugeChartStylesApi: StylesApiData<GaugeChartFactory> = {
  selectors: {
    root: 'Root SVG element',
    track: 'Background arc path',
    section: 'Filled section arc path',
    needle: 'Target marker line',
    label: 'Center label container',
  },

  vars: {
    root: {
      '--gauge-size': 'Controls chart width, height is derived from the arc proportions',
    },
  },
  modifiers: [],
};
