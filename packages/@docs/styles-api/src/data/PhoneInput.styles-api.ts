import type { PhoneInputFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const PhoneInputStylesApi: StylesApiData<PhoneInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    countryButton: 'Country selector button in leftSection',
    countryButtonFlag: 'Flag wrapper inside country button',
    countryButtonCode: 'Country ISO2 code text inside country button',
    dropdown: 'Combobox dropdown',
    search: 'Search input in dropdown',
    countryOption: 'Country option content wrapper in dropdown',
    optionName: 'Country name text in option',
    optionDialCode: 'Dial code text in option',
    divider: 'Divider between preferred and other countries',
  },
  vars: {},
  modifiers: [],
};
