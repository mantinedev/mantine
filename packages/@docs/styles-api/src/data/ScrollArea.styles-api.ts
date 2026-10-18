import type { ScrollAreaFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ScrollAreaStylesApi: StylesApiData<ScrollAreaFactory> = {
  selectors: {
    root: 'Root element',
    content: 'Wraps component children',
    viewport: 'Main scrollable area',
    scrollbar: 'Horizontal or vertical scrollbar root',
    thumb: 'Scrollbar thumb',
    corner: 'Corner between horizontal and vertical scrollbars',
  },

  vars: {
    root: {
      '--scrollarea-scrollbar-size': 'Scrollbar size',
      '--scrollarea-fade-size': 'Length of the edge fade gradient controlled by `scrollFade`',
      '--scrollarea-offset-size':
        'Size of the gap reserved by `offsetScrollbars`, defaults to the scrollbar size',
    },
  },

  modifiers: [
    { modifier: 'data-hidden', selector: ['scrollbar', 'corner'], condition: 'type="never"' },
    { modifier: 'data-hovered', selector: 'corner', condition: 'One of the scrollbars is hovered' },
    {
      modifier: 'data-orientation',
      selector: 'scrollbar',
      value: '"horizontal" or "vertical" depending on scrollbar position',
    },
    {
      modifier: 'data-scroll-fade',
      selector: 'viewport',
      condition: '`scrollFade` prop is set',
      value: 'Resolved fade axis: "x", "y" or "xy"',
    },
    {
      modifier: 'data-fade-top',
      selector: 'viewport',
      condition: '`scrollFade` is set and there is hidden content above the viewport',
    },
    {
      modifier: 'data-fade-bottom',
      selector: 'viewport',
      condition: '`scrollFade` is set and there is hidden content below the viewport',
    },
    {
      modifier: 'data-fade-left',
      selector: 'viewport',
      condition: '`scrollFade` is set and there is hidden content to the left of the viewport',
    },
    {
      modifier: 'data-fade-right',
      selector: 'viewport',
      condition: '`scrollFade` is set and there is hidden content to the right of the viewport',
    },
  ],
};
