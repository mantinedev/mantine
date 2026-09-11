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
      '--toc-rail-color': 'Color of the bar at the start of active control in `rail` variant',
      '--toc-padding-y': 'Vertical padding of control',
      '--toc-padding-x': 'Horizontal padding of control',
      '--toc-depth-offset': 'Offset of control per depth level, added to horizontal padding',
      '--toc-radius': 'Border-radius of control',
      '--toc-size': 'Font-size of control',
    },
  },

  modifiers: [
    {
      modifier: 'data-active',
      selector: 'control',
      condition: 'Associated heading is currently the best match in the viewport',
    },
    { modifier: 'data-variant', selector: ['root', 'control'], value: 'Value of `variant` prop' },
    {
      modifier: 'data-with-guideline',
      selector: 'root',
      condition: '`withGuideline` prop is set and `variant` is `rail`',
    },
  ],
};
