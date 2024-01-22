import type { TooltipFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TooltipStylesApi: StylesApiData<TooltipFactory> = {
  selectors: {
    tooltip: 'Root element',
    arrow: 'Tooltip arrow, rendered inside tooltip',
  },

  vars: {
    tooltip: {
      '--tooltip-bg': 'Tooltip `background-color`',
      '--tooltip-radius': 'Tooltip `border-radius`',
      '--tooltip-color': 'Controls tooltip text color',
    },
  },

  modifiers: [
    { modifier: 'data-multiline', selector: 'tooltip', condition: '`multiline` prop is set' },
  ],
};
