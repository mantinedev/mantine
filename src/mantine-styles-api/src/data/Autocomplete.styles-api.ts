import type { AutocompleteFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';
import { ComboboxLikeSelectors } from './Combobox.styles-api';

export const AutocompleteStylesApi: StylesApiData<AutocompleteFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    ...ComboboxLikeSelectors,
  },

  vars: {},
};
