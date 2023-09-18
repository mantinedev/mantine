import type { NumberInputFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const NumberInputStylesApi: StylesApiData<NumberInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    controls: 'Increment and decrement buttons wrapper',
    control: 'Increment and decrement buttons',
  },

  vars: {
    controls: {
      '--ni-chevron-size': 'Controls `width` and `height` of the default chevron icon',
    },
  },

  modifiers: [
    {
      modifier: 'data-direction',
      selector: 'control',
      value: '`up` or `down` depending on the control',
    },
  ],
};
