import type { ColorWheelFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ColorWheelStylesApi: StylesApiData<ColorWheelFactory> = {
  selectors: {
    root: 'Root element, contains the hue ring',
    thumb: 'Thumb used to select hue value',
  },

  vars: {
    root: {
      '--cw-size': 'Controls `width` and `height` of the component',
      '--cw-thickness': 'Controls `thickness` of the hue ring',
      '--cw-thumb-size': 'Controls thumb `width` and `height`',
      '--cw-ring-background': 'Controls `background` of the hue ring',
    },
  },

  modifiers: [
    { modifier: 'data-disabled', selector: 'root', condition: '`disabled` prop is set' },
    {
      modifier: 'data-hidden',
      selector: 'thumb',
      condition: '`withThumbIndicator` prop is `false`',
    },
  ],
};
