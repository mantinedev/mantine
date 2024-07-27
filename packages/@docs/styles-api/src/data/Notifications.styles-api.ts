import type { NotificationsFactory } from '@mantine/notifications';
import type { StylesApiData } from '../types';

export const NotificationsStylesApi: StylesApiData<NotificationsFactory> = {
  selectors: {
    root: 'Notifications container, contains all notifications',
    notification: 'Single notification',
  },

  vars: {
    root: {
      '--notifications-container-width': 'Controls notifications container `max-width`',
      '--notifications-z-index': 'Controls notifications container `z-index`',
    },
  },
};
