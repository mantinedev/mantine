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

  vars: {},
  modifiers: [],
};
