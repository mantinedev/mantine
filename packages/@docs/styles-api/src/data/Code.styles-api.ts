import type { CodeFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const CodeStylesApi: StylesApiData<CodeFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--code-bg': 'Controls `background-color`',
    },
  },

  modifiers: [{ modifier: 'data-block', selector: 'root', condition: '`block` prop is set' }],
};
