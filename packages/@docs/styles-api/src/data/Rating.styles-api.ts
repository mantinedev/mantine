import type { RatingFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const RatingStylesApi: StylesApiData<RatingFactory> = {
  selectors: {
    root: 'Root element',
    starSymbol: 'Symbol element (star icon by default, or custom symbol)',
    input: 'Item input, hidden by default',
    label: 'Item label, used to display star icon',
    symbolBody: 'Wrapper around star icon, used for clip-path masking in fractional ratings',
    symbolGroup: 'Container for all fractional symbols of a single rating unit',
  },

  vars: {
    root: {
      '--rating-color': 'Controls filled star icon color',
      '--rating-size':
        'Controls star icon width and height. Can use theme size or custom CSS value.',
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
      modifier: 'data-active',
      selector: 'symbolGroup',
      condition: 'Symbol group is being hovered',
    },
    {
      modifier: 'data-filled',
      selector: 'starSymbol',
      condition: 'Associated input value is less or equal to the component value',
    },
  ],
};
