import type { RadialBarChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const RadialBarChartStylesApi: StylesApiData<RadialBarChartFactory> = {
  selectors: {
    root: 'Root element',
    tooltip: 'Tooltip root element',
  },

  vars: {
    root: {
      '--chart-empty-background': 'Background color of the empty space in the chart',
    },
  },

  modifiers: [],
};
