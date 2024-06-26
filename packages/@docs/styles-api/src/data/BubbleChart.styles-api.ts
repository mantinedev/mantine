import type { BubbleChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const BubbleChartStylesApi: StylesApiData<BubbleChartFactory> = {
  selectors: {
    root: 'Root element',
    axis: 'X and Y axis of the chart',
    tooltip: 'Tooltip root element',
  },

  vars: {
    root: {
      '--chart-grid-color': 'Controls color of the grid and cursor lines',
      '--chart-text-color': 'Controls color of the axis labels',
    },
  },

  modifiers: [],
};
