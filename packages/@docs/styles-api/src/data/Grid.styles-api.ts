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

  modifiers: [
    {
      modifier: 'data-with-gap',
      selector: 'root',
      value: 'true',
      condition:
        'CSS variables for gap, rowGap, and columnGap are set. Variables include: --grid-gap, --grid-row-gap, --grid-column-gap, --grid-margin, --grid-col-padding-x, --grid-col-padding-y',
    },
    {
      modifier: 'data-with-col-vars',
      selector: 'col',
      value: 'true',
      condition:
        'CSS variables for column layout are set. Variables include: --col-flex-grow, --col-flex-basis, --col-width, --col-max-width, --col-offset, --col-order, --col-align-self',
    },
  ],
};
