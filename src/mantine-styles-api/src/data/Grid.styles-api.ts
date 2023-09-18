import type { GridFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const GridStylesApi: StylesApiData<GridFactory> = {
  selectors: {
    root: 'Root element',
    inner: 'Columns wrapper',
    col: '`Grid.Col` root element',
  },

  vars: {
    root: {
      '--grid-align': 'Controls `align-items` property',
      '--grid-justify': 'Controls `justify-content` property',
    },
  },
};
