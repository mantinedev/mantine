import type { RadarChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const RadarChartStylesApi: StylesApiData<RadarChartFactory> = {
  selectors: {
    root: 'Root element',
    container: 'Recharts ResponsiveContainer component',
    tooltip: 'Tooltip root element',
    tooltipBody: 'Tooltip wrapper around all items',
    tooltipItem: 'Tooltip item representing data series',
    tooltipItemBody: 'Tooltip item wrapper around item color and name',
    tooltipItemColor: 'Tooltip item color',
    tooltipItemName: 'Tooltip item name',
    tooltipItemData: 'Tooltip item data',
    tooltipLabel: 'Label of the tooltip',
    legend: 'Legend root element',
    legendItem: 'Legend item representing data series',
    legendItemColor: 'Legend item color',
    legendItemName: 'Legend item name',
  },

  vars: {
    root: {
      '--chart-grid-color': 'Controls color of the chart grid',
      '--chart-text-color': 'Controls color of all text elements in the chart',
    },
  },

  modifiers: [],
};
