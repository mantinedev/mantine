import type { GridFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const GridStylesApi: StylesApiData<GridFactory> = {
  selectors: {
    container: 'Container element, only used with `type="container"` prop',
    root: 'Root element',
    inner: 'Columns wrapper',
    col: '`Grid.Col` root element',
  },

  vars: {
    root: {
      '--grid-overflow': 'Controls `overflow` property',
      '--grid-align': 'Controls `align-items` property',
      '--grid-justify': 'Controls `justify-content` property',
    },
  },
};
