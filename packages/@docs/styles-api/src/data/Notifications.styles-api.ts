import type { NotificationsFactory } from '@mantine/notifications';
import type { StylesApiData } from '../types';

export const NotificationsStylesApi: StylesApiData<NotificationsFactory> = {
  selectors: {
    root: 'Notifications container, contains all notifications',
    notification: 'Single notification',
    progress:
      'Auto close progress line at the bottom of the notification, displayed only when `withAutoCloseProgress` is set',
  },

  vars: {
    root: {
      '--notifications-container-width': 'Controls notifications container `max-width`',
      '--notifications-z-index': 'Controls notifications container `z-index`',
    },
  },

  modifiers: [
    {
      modifier: 'data-paused',
      selector: 'progress',
      condition:
        'Auto close timer is paused (for example, when the notification is hovered), the line is faded out',
    },
  ],
};
