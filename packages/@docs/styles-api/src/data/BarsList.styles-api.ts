import type { BarsListFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const BarsListStylesApi: StylesApiData<BarsListFactory> = {
  selectors: {
    root: 'Root element',
    labelsRow: 'Container for labels row',
    bar: 'Row element with bar and value, sets `--bars-list-bar-size` (bar length in % of the track)',
    barLabel:
      'Bar track element with the bar and the name inside, sets `--bars-list-bar-color` (bar background)',
    barValue: 'Bar value element',
  },

  vars: {
    root: {
      '--bars-list-gap': 'Controls gap between bars',
      '--bars-list-min-bar-size': 'Controls minimum bar width',
      '--bars-list-bar-height': 'Controls bar height',
    },
  },
  modifiers: [],
};
