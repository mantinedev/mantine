import type { BulletChartFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const BulletChartStylesApi: StylesApiData<BulletChartFactory> = {
  selectors: {
    root: 'Root element',
    label: 'Label element',
    trackWrapper: 'Wrapper around track and value labels',
    track: 'Container for ranges, bar, and target',
    range: 'Background range band',
    bar: 'Actual value bar',
    target: 'Target marker line',
    rangeLabel: 'Value label at the end of each range',
    barLabel: 'Value label for the actual value bar',
    targetLabel: 'Value label for the target marker',
  },

  vars: {
    root: {
      '--bullet-size': 'Controls height of the chart track area',
      '--bullet-bar-size': 'Controls height of the actual value bar',
    },
  },
  modifiers: [],
};
