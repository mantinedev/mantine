import type { BreadcrumbsFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const BreadcrumbsStylesApi: StylesApiData<BreadcrumbsFactory> = {
  selectors: {
    root: 'Root element',
    separator: 'Separator between children',
    breadcrumb: 'Breadcrumb item',
  },

  vars: {
    root: {
      '--bc-separator-margin': 'Control left and right `margin` of separator',
    },
  },
};
