import type { NotificationFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const NotificationStylesApi: StylesApiData<NotificationFactory> = {
  selectors: {
    root: 'Root element',
    loader: 'Loader component, displayed only when `loading` prop is set',
    icon: 'Icon component, displayed only when `icon` prop is set',
    body: 'Notification body, contains all other elements',
    title: 'Title element, displayed only when `title` prop is set',
    description: 'Description displayed below the title',
    closeButton: 'Close button element',
  },

  vars: {
    root: {
      '--notification-radius': 'Controls `border-radius`',
      '--notification-color': 'Controls icon color or notification line color',
    },
  },

  modifiers: [
    { modifier: 'data-with-icon', selector: 'root', condition: '`icon` prop is set' },
    { modifier: 'data-with-border', selector: 'root', condition: '`withBorder` prop is set' },
    { modifier: 'data-with-title', selector: 'description', condition: '`title` prop is set' },
  ],
};
