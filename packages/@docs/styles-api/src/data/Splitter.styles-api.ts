import type { SplitterFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const SplitterStylesApi: StylesApiData<SplitterFactory> = {
  selectors: {
    root: 'Root element',
    pane: 'Pane element (`Splitter.Pane` component)',
    handle: 'Handle element between panes, contains the separator line and the thumb',
    thumb: 'Thumb element inside the handle, contains the grip icon',
  },

  vars: {
    root: {
      '--splitter-line-size': 'Controls the thickness of the separator line between panes',
      '--splitter-handle-color': 'Controls the color of the separator line between panes',
    },
  },

  modifiers: [
    {
      modifier: 'data-orientation',
      selector: ['root', 'handle', 'thumb'],
      value: 'Value of `orientation` prop',
    },
    {
      modifier: 'data-active',
      selector: ['handle', 'thumb'],
      condition: 'Handle is being dragged',
    },
    {
      modifier: 'data-collapsed',
      selector: 'pane',
      condition: 'Pane is collapsed',
    },
  ],
};
