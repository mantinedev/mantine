import type { CandlestickChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const CandlestickChartStylesApi: StylesApiData<CandlestickChartFactory> = {
  selectors: {
    root: 'Root element',
    candle: 'Candle shape representing open, high, low and close values',
    axis: 'X and Y axis of the chart',
    container: 'Recharts ResponsiveContainer component',
    grid: 'Recharts CartesianGrid component',
    tooltip: 'Tooltip root element',
    tooltipBody: 'Tooltip wrapper around all items',
    tooltipItem: 'Tooltip item representing open, high, low or close value',
    tooltipItemBody: 'Tooltip item wrapper around item color and name',
    tooltipItemColor: 'Tooltip item color',
    tooltipItemName: 'Tooltip item name',
    tooltipItemData: 'Tooltip item data',
    tooltipLabel: 'Label of the tooltip',
    referenceLine: 'Reference line',
    referenceArea: 'Reference area',
    referenceDot: 'Reference dot',
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
