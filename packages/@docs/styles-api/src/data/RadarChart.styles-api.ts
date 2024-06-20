import type { RadarChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const RadarChartStylesApi: StylesApiData<RadarChartFactory> = {
  selectors: {
    root: 'Root element',
    container: 'Recharts ResponsiveContainer component',
  },

  vars: {
    root: {
      '--chart-grid-color': 'Controls color of the chart grid',
      '--chart-text-color': 'Controls color of all text elements in the chart',
    },
  },

  modifiers: [],
};
