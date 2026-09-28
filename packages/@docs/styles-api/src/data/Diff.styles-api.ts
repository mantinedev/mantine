import type { DiffFactory } from '@mantine/code-highlight';
import type { StylesApiData } from '../types';

export const DiffStylesApi: StylesApiData<DiffFactory> = {
  selectors: {
    root: 'Root element',
    table: 'Table element',
    row: 'Table row',
    lineNumber: 'Line number cell',
    content: 'Content cell',
    addedLine: 'Added line',
    removedLine: 'Removed line',
    unchangedLine: 'Unchanged line',
    addedHighlight: 'Inline highlight for added text',
    removedHighlight: 'Inline highlight for removed text',
    expandControl: 'Expand control for collapsed context sections',
    splitDivider: 'Divider between left and right panels in split mode',
    changeMarker: 'Visually hidden `+`/`-` marker at the start of added and removed lines',
  },

  vars: {
    root: {
      '--diff-add-color': 'Controls background color of added lines',
      '--diff-remove-color': 'Controls background color of removed lines',
      '--diff-add-highlight-color': 'Controls background color of inline added highlights',
      '--diff-remove-highlight-color': 'Controls background color of inline removed highlights',
    },
  },

  modifiers: [
    {
      modifier: 'data-split',
      selector: 'root',
      condition: '`mode="split"` is set',
    },
  ],
};
