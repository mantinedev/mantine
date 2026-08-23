import type { ComboboxPopoverFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { ComboboxLikeSelectors } from './Combobox.styles-api';

export const ComboboxPopoverStylesApi: StylesApiData<ComboboxPopoverFactory> = {
  selectors: {
    ...ComboboxLikeSelectors,
    search: 'Search input, displayed only when `searchable` prop is set',
  },

  vars: {},

  modifiers: [
    { modifier: 'data-checked', selector: 'option', condition: 'Option is selected' },
    { modifier: 'data-combobox-active', selector: 'option', condition: 'Option is selected' },
    { modifier: 'data-combobox-disabled', selector: 'option', condition: 'Option is disabled' },
    {
      modifier: 'data-reverse',
      selector: 'option',
      condition: '`checkIconPosition` is `right`',
    },
    {
      modifier: 'data-hidden',
      selector: 'dropdown',
      condition: 'There are no options to display and `nothingFoundMessage` is not set',
    },
  ],
};
