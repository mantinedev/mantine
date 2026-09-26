import type { MatrixChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const MatrixChartStylesApi: StylesApiData<MatrixChartFactory> = {
  selectors: {
    root: 'Root SVG element',
    cell: 'Individual cell rect element',
    xLabel: 'X-axis label text',
    yLabel: 'Y-axis label text',
    legend: 'Legend group element',
    legendLabel: 'Legend text label',
    legendRect: 'Legend color rect',
  },

  vars: {
    root: {
      '--matrix-level-1': 'Controls color of the cells in the lowest value range',
      '--matrix-level-2': 'Controls color of the cells in the second value range',
      '--matrix-level-3': 'Controls color of the cells in the third value range',
      '--matrix-level-4': 'Controls color of the cells in the highest value range',
      '--matrix-empty-bg': 'Controls background color of empty cells',
    },
  },
  modifiers: [],
};
