import type { ScrollerFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ScrollerStylesApi: StylesApiData<ScrollerFactory> = {
  selectors: {
    root: 'Root element',
    container: 'Scrollable container',
    content: 'Wraps component children',
    control: 'Start and end scroll control buttons',
    chevron: 'Chevron icon inside controls',
  },

  vars: {
    root: {
      '--scroller-control-size': 'Controls width and chevron size',
      '--scroller-background-color': 'Background color for the control edge gradients',
    },
  },

  modifiers: [
    {
      modifier: 'data-draggable',
      selector: 'container',
      condition: '`draggable` prop is set',
    },
    {
      modifier: 'data-position',
      selector: 'control',
      value: '"start" or "end" depending on control position',
    },
    {
      modifier: 'data-hidden',
      selector: 'control',
      condition: 'Control is hidden because scrolling is not available in that direction',
    },
  ],
};
