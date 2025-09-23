import type { SelectFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { ComboboxLikeSelectors } from './Combobox.styles-api';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const SelectStylesApi: StylesApiData<SelectFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    ...ComboboxLikeSelectors,
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
