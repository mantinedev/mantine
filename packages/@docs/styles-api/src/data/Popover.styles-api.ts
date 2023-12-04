import type { PopoverFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const PopoverStylesApi: StylesApiData<PopoverFactory> = {
  selectors: {
    dropdown: 'Dropdown element',
    arrow: 'Dropdown arrow',
  },

  vars: {
    dropdown: {
      '--popover-radius': 'Controls dropdown border-radius',
      '--popover-shadow': 'Controls dropdown box-shadow',
    },
  },

  modifiers: [
    {
      modifier: 'data-position',
      selector: 'dropdown',
      value: 'Value of floating ui dropdown position',
    },
  ],
};
