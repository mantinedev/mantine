import type { IndicatorFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const IndicatorStylesApi: StylesApiData<IndicatorFactory> = {
  selectors: {
    root: 'Root element',
    indicator: 'Indicator element',
  },

  vars: {
    root: {
      '--indicator-bottom': 'Controls `bottom` style',
      '--indicator-left': 'Controls `left` style',
      '--indicator-right': 'Controls `right` style',
      '--indicator-top': 'Controls `top` style',
      '--indicator-radius': 'Controls `border-radius`',
      '--indicator-size': 'Controls `min-width` and `height`',
      '--indicator-translate-x': 'Controls `translateX` style, used for positioning',
      '--indicator-translate-y': 'Controls `translateY` style, used for positioning',
      '--indicator-z-index': 'Controls `z-index` style',
      '--indicator-color': 'Controls `background-color`',
    },
  },

  modifiers: [
    { modifier: 'data-inline', selector: 'root', condition: '`inline` prop is set' },
    { modifier: 'data-with-label', selector: 'indicator', condition: '`label` prop is set' },
    { modifier: 'data-with-border', selector: 'indicator', condition: '`withBorder` prop is set' },
    { modifier: 'data-processing', selector: 'indicator', condition: '`processing` prop is set' },
  ],
};
