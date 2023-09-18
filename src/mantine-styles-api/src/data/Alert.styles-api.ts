import type { AlertFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const AlertStylesApi: StylesApiData<AlertFactory> = {
  selectors: {
    root: 'Root element',
    wrapper: 'Wrapper around `body` and `icon`',
    body: 'Body element, contains `title` and `message`',
    title: 'Title element, contains `label` and `icon`',
    label: 'Title label',
    message: 'Alert message',
    icon: 'Icon element',
    closeButton: 'Close button',
  },

  vars: {
    root: {
      '--alert-bd': 'Controls `border`',
      '--alert-bg': 'Controls `background`',
      '--alert-color': 'Controls `color`',
      '--alert-radius': 'Controls `border-radius`',
    },
  },

  modifiers: [
    {
      modifier: 'data-with-close-button',
      selector: 'title',
      condition: '`withCloseButton` prop is set',
    },
  ],
};
