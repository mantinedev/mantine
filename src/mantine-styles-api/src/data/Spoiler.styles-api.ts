import type { SpoilerFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const SpoilerStylesApi: StylesApiData<SpoilerFactory> = {
  selectors: {
    root: 'Root element',
    content: 'Wraps content to set max-height and transition',
    control: 'Show/hide content control',
  },

  vars: {
    root: {
      '--spoiler-transition-duration': 'Controls transition duration',
      '--spoiler-margin-bottom':
        'Controls the margin bottom applied when the control button is shown',
    },
  },

  modifiers: [
    {
      modifier: 'data-has-spoiler',
      selector: 'root',
      condition: 'Whether the control button is shown or not',
    },
  ],
};
