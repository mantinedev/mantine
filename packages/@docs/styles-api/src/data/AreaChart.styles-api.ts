import type { AreaChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const AreaChartStylesApi: StylesApiData<AreaChartFactory> = {
  selectors: {
    root: 'Root element',
    area: 'Area of the chart',
    axis: 'X and Y axis of the chart',
    container: 'Recharts ResponsiveContainer component',
    grid: 'Recharts CartesianGrid component',
    legend: 'Legend root element',
    legendItem: 'Legend item representing data series',
    legendItemColor: 'Legend item color',
    legendItemName: 'Legend item name',
    tooltip: 'Tooltip root element',
    tooltipBody: 'Tooltip wrapper around all items',
    tooltipItem: 'Tooltip item representing data series',
    tooltipItemBody: 'Tooltip item wrapper around item color and name',
    tooltipItemColor: 'Tooltip item color',
    tooltipItemName: 'Tooltip item name',
    tooltipItemData: 'Tooltip item data',
    tooltipLabel: 'Label of the tooltip',
  },

  vars: {
    root: {
      '--area-chart-grid-color': 'Controls color of the grid and cursor lines',
      '--area-chart-text-color': 'Controls color of the axis labels',
    },
  },

  modifiers: [],
};
