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
      '--notifications-left': 'Controls notifications container `left`',
      '--notifications-right': 'Controls notifications container `right`',
      '--notifications-top': 'Controls notifications container `top`',
      '--notifications-transform': 'Controls notifications container `transform`',
      '--notifications-z-index': 'Controls notifications container `z-index`',
    },
  },
};
