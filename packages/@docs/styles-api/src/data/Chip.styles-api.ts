import type { ChipFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ChipStylesApi: StylesApiData<ChipFactory> = {
  selectors: {
    root: 'Root element',
    checkIcon: 'Check icon, visible when checked prop is true',
    iconWrapper: 'Wraps `checkIcon` for alignment',
    input: 'Input element, hidden by default',
    label: 'Input label, used as a chip body',
  },

  vars: {
    root: {
      '--chip-fz': 'Controls `font-size`',
      '--chip-size': 'Controls `height`',
      '--chip-icon-size': 'Controls width and height of the icon',
      '--chip-padding': 'Controls horizontal padding when chip is not checked',
      '--chip-checked-padding': 'Controls horizontal padding when chip is checked',
      '--chip-radius': 'Controls `border-radius`',
      '--chip-bg': 'Controls `background-color` when chip is checked',
      '--chip-hover': 'Controls `background-color` when chip is checked and hovered',
      '--chip-color': 'Controls `color` when chip is checked',
      '--chip-bd': 'Controls border when chip is checked',
      '--chip-spacing': 'Controls spacing between check icon and label',
    },
  },

  modifiers: [
    { modifier: 'data-checked', selector: 'label', condition: 'Chip is checked' },
    { modifier: 'data-disabled', selector: 'label', condition: '`disabled` prop is set' },
  ],
};
