import type { TitleFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TitleStylesApi: StylesApiData<TitleFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--title-fw': 'Title `font-weight`, by default value from `theme.headings`',
      '--title-fz': 'Title `font-size`, by default value from `theme.headings`',
      '--title-lh': 'Title `line-heigh`t, by default value from `theme.headings`',
    },
  },

  modifiers: [{ modifier: 'data-order', selector: 'root', value: 'Value of the `order` prop' }],
};
