import type { WaffleChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const WaffleChartStylesApi: StylesApiData<WaffleChartFactory> = {
  selectors: {
    root: 'Root container element',
    grid: 'SVG grid element',
    cell: 'Individual cell rect',
    legend: 'Legend container',
    legendItem: 'Legend item wrapper',
    legendSwatch: 'Legend color swatch',
    legendLabel: 'Legend text label',
  },
  vars: {
    root: {
      '--waffle-gap': 'Controls gap between cells',
      '--waffle-cell-radius': 'Controls cell border radius',
      '--waffle-empty-color': 'Controls empty cell background color',
    },
  },
  modifiers: [],
};
