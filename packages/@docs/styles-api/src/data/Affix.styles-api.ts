import type { AffixFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const AffixStylesApi: StylesApiData<AffixFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--affix-z-index': 'Controls `z-index` property',
      '--affix-top': 'Controls `top` property',
      '--affix-bottom': 'Controls `bottom` property',
      '--affix-left': 'Controls `left` property',
      '--affix-right': 'Controls `right` property',
    },
  },
};
