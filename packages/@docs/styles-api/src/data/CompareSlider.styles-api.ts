import type { CompareSliderFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const CompareSliderStylesApi: StylesApiData<CompareSliderFactory> = {
  selectors: {
    root: 'Root element',
    before: 'Wrapper of the `before` content, clipped to the current position',
    after: 'Wrapper of the `after` content',
    divider: 'Line displayed between `before` and `after` content',
    handle:
      'Draggable handle rendered on the divider, always rendered and focusable, visually hidden when `withHandle={false}`',
  },

  vars: {
    root: {
      '--compare-divider-width': 'Controls divider `width` (`height` in vertical orientation)',
      '--compare-divider-color': 'Controls divider and default handle `background-color`',
      '--compare-handle-size': 'Controls default handle `width` and `height`',
    },
  },

  modifiers: [
    {
      modifier: 'data-orientation',
      selector: 'root',
      condition: 'Determines slider orientation, `horizontal` by default',
    },
    { modifier: 'data-disabled', selector: 'root', condition: '`disabled` prop is set' },
    { modifier: 'data-hidden', selector: 'handle', condition: '`withHandle` prop is `false`' },
    { modifier: 'data-custom', selector: 'handle', condition: '`handle` prop is set' },
  ],
};
