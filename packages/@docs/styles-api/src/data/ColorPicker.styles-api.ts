import type { ColorPickerFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ColorPickerStylesApi: StylesApiData<ColorPickerFactory> = {
  selectors: {
    wrapper: 'Root element',
    preview: 'Color preview, displayed only when `format` supports alpha channel',
    body: 'Contains alpha/hue sliders and color preview',
    slider: 'Alpha and hue sliders root',
    sliderOverlay: 'Element used to display various overlays over hue and alpha sliders',
    saturation: 'Saturation picker',
    saturationOverlay: 'Element used to display various overlays over saturation picker',
    sliders: 'Contains alpha and hue sliders',
    thumb: 'Thumb of all sliders',
    swatch: 'Color swatch',
    swatches: 'Color swatches list',
  },

  vars: {
    wrapper: {
      '--cp-body-spacing': 'Controls spacing between sliders and saturation',
      '--cp-preview-size': 'Controls size of the preview swatch',
      '--cp-width': 'Controls `width` of the root element',
      '--cp-swatch-size': 'Controls swatch `width` and `height`',
      '--cp-thumb-size': 'Controls thumb `width` and `height` in all sliders and saturation picker',
      '--cp-saturation-height': 'Controls `height` of the saturation picker',
    },
  },
};
