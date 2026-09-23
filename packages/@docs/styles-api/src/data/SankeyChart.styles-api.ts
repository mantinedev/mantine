import type { SankeyChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const SankeyChartStylesApi: StylesApiData<SankeyChartFactory> = {
  selectors: {
    root: 'Root element',
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
      '--chart-node-color': 'Controls color of the chart nodes',
      '--chart-link-color': 'Controls color of the chart links',
      '--chart-text-color': 'Controls color of the node labels',
      '--chart-height': 'Controls height of the chart',
    },
  },

  modifiers: [],
};
