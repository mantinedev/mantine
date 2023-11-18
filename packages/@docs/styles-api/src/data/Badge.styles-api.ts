import type { BadgeFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const BadgeStylesApi: StylesApiData<BadgeFactory> = {
  selectors: {
    root: 'Root element',
    section: 'Left and right sections',
    label: 'Badge children',
  },

  vars: {
    root: {
      '--badge-bd': 'Controls `border`',
      '--badge-bg': 'Controls `background`',
      '--badge-color': 'Controls text `color`',
      '--badge-dot-color': 'Controls dot `color`, only applicable when `variant="dot"`',
      '--badge-fz': 'Controls `font-size`',
      '--badge-height': 'Controls `height`',
      '--badge-padding-x': 'Controls horizontal `padding`',
      '--badge-radius': 'Controls `border-radius`',
    },
  },

  modifiers: [
    { modifier: 'data-block', selector: 'root', condition: '`fullWidth` prop is set' },
    { modifier: 'data-position', selector: 'section', value: 'Section position: left or right' },
  ],
};
