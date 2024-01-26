import type { DonutChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const DonutChartStylesApi: StylesApiData<DonutChartFactory> = {
  selectors: {
    root: 'Root element',
    label: 'Chart label, controlled by `chartLabel` prop',
  },

  vars: {
    root: {
      '--chart-labels-color': 'Controls color of the chart labels',
      '--chart-size': 'Controls size of the chart',
      '--chart-stroke-color': 'Controls color of the chart stroke',
    },
  },

  modifiers: [],
};
