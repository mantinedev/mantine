import type { AlertFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const AlertStylesApi: StylesApiData<AlertFactory> = {
  selectors: {
    root: 'Root element',
    wrapper: 'Wrapper around `body`, `icon` and `closeButton`',
    body: 'Body element, contains `title` and `message`',
    title: 'Title element, contains `label`',
    label: 'Title label',
    message: 'Alert message',
    icon: 'Icon element',
    closeButton: 'Close button',
  },

  vars: {
    root: {
      '--alert-bd': 'Controls `border`',
      '--alert-bg': 'Controls `background`',
      '--alert-color': 'Controls message `color`',
      '--alert-title-color': 'Controls title `color`',
      '--alert-icon-color': 'Controls icon `color`',
      '--alert-radius': 'Controls `border-radius`',
      '--alert-padding': 'Controls `padding`',
      '--alert-fz': 'Controls title and message `font-size`',
      '--alert-icon-size': 'Controls icon `width` and `height`',
      '--alert-gap': 'Controls gap between icon, body and close button',
      '--alert-close-size': 'Controls close button `width` and `height`',
    },
  },

  modifiers: [],
};
