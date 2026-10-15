import type { RollingNumberFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const RollingNumberStylesApi: StylesApiData<RollingNumberFactory> = {
  selectors: {
    root: 'Root element',
    inner: 'Wrapper of the value, keeps digits and characters in left-to-right order',
    copyValue:
      'Transparent text layer with the formatted value, used for text selection and copying',
    digit: 'Wrapper of a single digit, clips the digits column',
    digitColumn: 'Column of digits inside `digit`, animated on value change',
    char: 'Non-digit part of the value: prefix, suffix, minus sign, decimal and thousands separators',
  },

  vars: {
    root: {
      '--rn-duration': 'Controls animation duration',
      '--rn-timing-function': 'Controls animation timing function',
    },
  },

  modifiers: [
    {
      modifier: 'data-tabular-numbers',
      selector: 'root',
      condition: '`tabularNumbers` prop is set',
    },
    {
      modifier: 'data-empty',
      selector: ['digit', 'char'],
      condition: 'Slot is not present in the current value and is animated out',
    },
    {
      modifier: 'data-direction',
      selector: 'digitColumn',
      value:
        'Direction in which the digit rolls, `up` or `down`, not set when the digit has not changed since the first render',
    },
  ],
};
