import type { CompareSliderFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const CompareSliderStylesApi: StylesApiData<CompareSliderFactory> = {
  selectors: {
    root: 'Root element',
    before: 'Wrapper of the `before` content, clipped to the current position',
    after: 'Wrapper of the `after` content',
    divider: 'Line displayed between `before` and `after` content',
    handle: 'Draggable handle rendered on the divider, displayed only if `withHandle` prop is set',
  },

  vars: {},

  modifiers: [
    {
      modifier: 'data-orientation',
      selector: 'root',
      condition: 'Determines slider orientation, `horizontal` by default',
    },
    { modifier: 'data-disabled', selector: 'root', condition: '`disabled` prop is set' },
  ],
};
