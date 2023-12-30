import type { AreaChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const AreaChartStylesApi: StylesApiData<AreaChartFactory> = {
  selectors: {
    root: 'Root element',
    area: 'Area of the chart',
    axis: 'X and Y axis of the chart',
    container: 'Recharts ResponsiveContainer component',
    grid: 'Recharts CartesianGrid component',
  },

  vars: {},

  modifiers: [],
};
