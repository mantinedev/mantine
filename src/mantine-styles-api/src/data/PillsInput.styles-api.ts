import type { PillsInputFactory, PillsInputFieldFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const PillsInputStylesApi: StylesApiData<PillsInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
  },

  vars: {},
};

export const PillsInputFieldStylesApi: StylesApiData<PillsInputFieldFactory> = {
  selectors: {
    field: 'Root element',
  },

  vars: {},

  modifiers: [
    { modifier: 'data-type', selector: 'field', value: 'Value of `type` prop' },
    { modifier: 'data-disabled', selector: 'field', condition: '`disabled` prop is set' },
  ],
};
