import type { TreeFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TreeStylesApi: StylesApiData<TreeFactory> = {
  selectors: {
    root: 'Root element',
    node: 'Node element (li), contains label and subtree elements',
    subtree: 'Subtree element (ul)',
    label: 'Node label',
  },

  vars: {
    root: {
      '--level-offset': 'Controls offset of nested tree levels',
    },
  },

  modifiers: [
    { modifier: 'data-selected', selector: ['node', 'label'], condition: 'The node is selected' },
    { modifier: 'data-hovered', selector: ['node', 'label'], condition: 'The node is hovered' },
    { modifier: 'data-level', selector: 'node', value: 'Nesting level of the node' },
  ],
};
