import type { MultiSelectFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { ComboboxLikeSelectors } from './Combobox.styles-api';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const MultiSelectStylesApi: StylesApiData<MultiSelectFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    ...ComboboxLikeSelectors,
    pill: 'Value pill',
    inputField: 'Input field',
    pillsList: 'List of pills, also contains input field',
  },

  vars: {},

  modifiers: [
    { modifier: 'data-combobox-selected', selector: 'option', condition: 'Option is selected' },
    {
      modifier: 'data-combobox-active',
      selector: 'option',
      condition: 'Options was activated by keyboard',
    },
    { modifier: 'data-combobox-disabled', selector: 'option', condition: 'Option is disabled' },
  ],
};
