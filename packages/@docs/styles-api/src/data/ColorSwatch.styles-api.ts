import type { ColorSwatchFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ColorSwatchStylesApi: StylesApiData<ColorSwatchFactory> = {
  selectors: {
    root: 'Root element',
    alphaOverlay: 'Overlay with checkerboard pattern',
    shadowOverlay: 'Overlay with inner box-shadow',
    colorOverlay: 'Overlay with given color background',
    childrenOverlay: 'Overlay with `children` inside',
  },

  vars: {
    root: {
      '--cs-radius': 'Controls `border-radius` of all overlays and `root` element',
      '--cs-size': 'Controls `width`, `height`, `min-width` and `min-height` of the `root` element',
    },
  },
};
