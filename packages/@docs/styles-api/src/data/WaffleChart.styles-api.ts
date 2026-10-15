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
      '--waffle-cell-radius': 'Controls cell and legend swatch border radius',
      '--waffle-empty-color': 'Controls empty cell background color',
    },
  },
  modifiers: [
    {
      modifier: 'data-legend-position',
      selector: 'root',
      condition: '`legendPosition` prop value, set when `withLegend` is true',
    },
    { modifier: 'data-vertical', selector: 'root', condition: '`legendPosition` is left or right' },
    { modifier: 'data-empty', selector: 'cell', condition: 'Cell is not filled by any segment' },
    {
      modifier: 'data-dimmed',
      selector: 'cell',
      condition: 'A legend item of another segment is hovered',
    },
    {
      modifier: 'data-dimmed',
      selector: 'legendItem',
      condition: 'Another legend item is hovered',
    },
  ],
};
