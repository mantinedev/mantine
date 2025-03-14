import type { LineChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const LineChartStylesApi: StylesApiData<LineChartFactory> = {
  selectors: {
    root: 'Root element',
    line: 'Line of the chart',
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
    referenceLine: 'Reference line',
    referenceArea: 'Reference area',
    axisLabel: 'X and Y axis labels',
  },

  vars: {
    root: {
      '--chart-grid-color': 'Controls color of the grid and cursor lines',
      '--chart-text-color': 'Controls color of the axis labels',
    },
  },

  modifiers: [],
};
