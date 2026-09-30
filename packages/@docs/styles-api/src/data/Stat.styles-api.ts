import type { StatFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const StatStylesApi: StylesApiData<StatFactory> = {
  selectors: {
    root: 'Root element',
    icon: 'Leading icon wrapper',
    body: 'Wrapper around the label, value and diff',
    label: 'Caption displayed above the value',
    value: 'Wrapper around the value, prefix and suffix',
    prefix: 'Content rendered before the value',
    suffix: 'Content rendered after the value',
    diff: 'Trend delta element',
    diffIcon: 'Up/down arrow icon displayed in the diff',
  },

  vars: {
    root: {
      '--stat-gap': 'Controls gap between the icon and the body',
      '--stat-value-fz': 'Controls value `font-size`',
      '--stat-label-fz': 'Controls label `font-size`',
      '--stat-diff-fz': 'Controls diff `font-size`',
      '--stat-icon-size': 'Controls icon wrapper width and height',
    },
  },

  modifiers: [
    {
      modifier: 'data-loading',
      selector: 'root',
      condition: '`loading` prop is set',
    },
    {
      modifier: 'data-direction',
      selector: 'diff',
      value:
        '`up` for positive values, `down` for negative values, `none` for zero (or a delta that rounds to `0%` with the default formatter)',
    },
  ],
};
