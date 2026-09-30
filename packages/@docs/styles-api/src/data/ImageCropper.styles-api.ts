import type { ImageCropperFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ImageCropperStylesApi: StylesApiData<ImageCropperFactory> = {
  selectors: {
    root: 'Root element',
    viewport:
      'Focusable crop viewport, clips the image and captures pointer, wheel and keyboard interactions',
    image:
      'Image element that is panned, zoomed, rotated and flipped, its width and height are set inline from the measured image size',
    overlay:
      'Crop window frame rendered over the image, the outside area is darkened with `--image-cropper-overlay-color` CSS variable set on the root element',
    grid: 'Rule-of-thirds grid container, rendered only when withGrid prop is set',
    gridLine: 'Single rule-of-thirds grid line',
    controls:
      'Default controls container, rendered when withControls prop is set or with ImageCropper.Controls in a custom layout',
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
    {
      modifier: 'data-orientation',
      selector: 'gridLine',
      value: '`vertical` or `horizontal`',
    },
    {
      modifier: 'data-position',
      selector: 'gridLine',
      value: 'Line index within its orientation (`1` or `2`)',
    },
  ],
};
