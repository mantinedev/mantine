import type { ImageCropperFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ImageCropperStylesApi: StylesApiData<ImageCropperFactory> = {
  selectors: {
    root: 'Root element',
    viewport: 'Crop viewport, clips the image and captures pan/zoom interactions',
    image: 'Image element that is panned, zoomed, rotated and flipped',
    overlay: 'Crop window frame rendered over the image with a darkened outside area',
    grid: 'Rule-of-thirds grid container, rendered only when withGrid prop is set',
    gridLine: 'Single rule-of-thirds grid line',
    controls: 'Default controls container, rendered only when withControls prop is set',
    zoomSlider: 'Zoom slider in the default controls',
  },

  vars: {},

  modifiers: [
    {
      modifier: 'data-active',
      selector: 'viewport',
      condition: 'The image is being panned',
    },
    {
      modifier: 'data-disabled',
      selector: ['root', 'viewport'],
      condition: 'disabled prop is set',
    },
    {
      modifier: 'data-shape',
      selector: 'overlay',
      value: 'cropShape prop value (`rectangle` or `circle`)',
    },
  ],
};
