import type { ActionBarFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ActionBarStylesApi: StylesApiData<ActionBarFactory> = {
  selectors: {
    root: 'Root element (Paper)',
    divider: 'ActionBar.Divider element',
    closeButton: 'ActionBar.CloseButton element',
  },

  vars: {},
};
