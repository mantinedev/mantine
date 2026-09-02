import type { SunburstChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const SunburstChartStylesApi: StylesApiData<SunburstChartFactory> = {
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
      '--chart-stroke-color': 'Controls color of the chart segments stroke',
      '--chart-size': 'Controls width and height of the chart',
    },
  },

  modifiers: [],
};
