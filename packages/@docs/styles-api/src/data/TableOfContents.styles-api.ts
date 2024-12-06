import type { TableOfContentsFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TableOfContentsStylesApi: StylesApiData<TableOfContentsFactory> = {
  selectors: {
    root: 'Root element',
    control: 'Control element',
  },

  vars: {
    root: {
      '--toc-bg': 'Background color of active control',
      '--toc-color': 'Text color of active control',
      '--toc-depth-offset': 'Offset between of control depending on depth',
      '--toc-radius': 'Border-radius of control',
      '--toc-size': 'Controls font-size and padding of all elements',
    },
  },

  modifiers: [
    {
      modifier: 'data-active',
      selector: 'control',
      condition: 'Associated heading is currently the best match in the viewport',
    },
  ],
};
