import type { BarsListFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const BarsListStylesApi: StylesApiData<BarsListFactory> = {
  selectors: {
    root: 'Root element',
    labelsRow: 'Container for labels row',
    bar: 'Bar container element',
    barLabel: 'Bar label element with name inside',
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
