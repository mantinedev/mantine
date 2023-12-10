import type { ColorInputFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { ColorPickerStylesApi } from './ColorPicker.styles-api';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const ColorInputStylesApi: StylesApiData<ColorInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    ...ColorPickerStylesApi.selectors,
    dropdown: 'Popover dropdown',
    colorPreview: 'Color swatch preview in input left section',
    eyeDropperButton: 'Eye dropper button',
    eyeDropperIcon: 'Default eye dropper icon',
  },

  vars: {
    colorPreview: {
      '--ci-preview-size': 'Controls `width` and `height` of color preview',
    },

    eyeDropperIcon: {
      '--ci-eye-dropper-icon-size': 'Controls width and height of the eye dropper icon',
    },
  },
};
