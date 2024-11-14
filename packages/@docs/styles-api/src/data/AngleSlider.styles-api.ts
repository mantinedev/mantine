import type { AngleSliderFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const AngleSliderStylesApi: StylesApiData<AngleSliderFactory> = {
  selectors: {
    root: 'Root element',
    label: 'Label inside the slider',
    marks: 'Wrapper for all marks',
    mark: 'Mark element',
    thumb: 'Slider thumb',
  },

  vars: {
    root: {
      '--slider-size': 'Controls slider width and height',
      '--thumb-size': 'Controls thumb size',
    },
  },
};
