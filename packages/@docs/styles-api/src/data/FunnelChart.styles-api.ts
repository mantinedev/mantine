import { FunnelChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const FunnelChartStylesApi: StylesApiData<FunnelChartFactory> = {
  selectors: {
    root: 'Root element',
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
      '--chart-labels-color': 'Controls color of the chart labels',
      '--chart-size': 'Controls size of the chart',
      '--chart-stroke-color': 'Controls color of the chart stroke',
    },
  },

  modifiers: [],
};
