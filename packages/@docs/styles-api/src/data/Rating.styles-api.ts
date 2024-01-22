import type { RatingFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const RatingStylesApi: StylesApiData<RatingFactory> = {
  selectors: {
    root: 'Root element',
    starSymbol: 'Default star icon',
    input: 'Item input, hidden by default',
    label: 'Item label, used to display star icon',
    symbolBody: 'Wrapper around star icon for centering',
    symbolGroup: 'Group of symbols, used to display fractions',
  },

  vars: {
    root: {
      '--rating-color': 'Controls filled star icon color',
      '--rating-size': 'Controls star icon width and height',
    },
  },

  modifiers: [
    { modifier: 'data-read-only', selector: 'label', condition: '`readOnly` prop is set' },
    {
      modifier: 'data-active',
      selector: 'input',
      condition: 'Input value is the same as component value',
    },
    {
      modifier: 'data-filled',
      selector: 'starSymbol',
      condition: 'Associated input value is less or equal to the component value',
    },
  ],
};
