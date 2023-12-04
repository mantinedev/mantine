import type { ImageFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ImageStylesApi: StylesApiData<ImageFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--image-object-fit': 'Controls `object-fit` property',
      '--image-radius': 'Controls `border-radius` property',
    },
  },

  modifiers: [{ modifier: 'data-fallback', selector: 'root', condition: 'Image failed to load' }],
};
