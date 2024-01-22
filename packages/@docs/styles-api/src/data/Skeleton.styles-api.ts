import type { SkeletonFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const SkeletonStylesApi: StylesApiData<SkeletonFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--skeleton-height': 'Controls skeleton `height`',
      '--skeleton-width': 'Controls skeleton `width`',
      '--skeleton-radius': 'Controls skeleton `border-radius`',
    },
  },

  modifiers: [
    { modifier: 'data-visible', selector: 'root', condition: '`visible` prop is set' },
    { modifier: 'data-animate', selector: 'root', condition: '`animate` prop is set' },
  ],
};
