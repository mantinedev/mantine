import type { ComboboxPopoverFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { ComboboxLikeSelectors } from './Combobox.styles-api';

export const ComboboxPopoverStylesApi: StylesApiData<ComboboxPopoverFactory> = {
  selectors: ComboboxLikeSelectors,

  vars: {
    dropdown: {
      '--combobox-option-fz': 'Controls option `font-size`',
      '--combobox-option-padding': 'Controls option `padding`',
      '--combobox-padding': 'Controls dropdown `padding`',
    },

    options: {
      '--combobox-option-fz': 'Controls option `font-size`',
      '--combobox-option-padding': 'Controls option `padding`',
    },
  },

  modifiers: [
    { modifier: 'data-checked', selector: 'option', condition: 'Option is selected' },
    { modifier: 'data-reverse', selector: 'option', condition: '`checkIconPosition` is `right`' },
    { modifier: 'data-disabled', selector: 'option', condition: 'Option is disabled' },
  ],
};
