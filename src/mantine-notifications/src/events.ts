import { createUseExternalEvents } from '@mantine/utils';
import type { NotificationProps } from './types';

export type NotificationsEvents = {
  show(notification: NotificationProps): void;
  hide(id: string): void;
  update(notification: NotificationProps & { id: string }): void;
  clean(): void;
  cleanQueue(): void;
};

export const [useNotificationsEvents, createEvent] =
  createUseExternalEvents<NotificationsEvents>('mantine-notifications');

export const showNotification = createEvent('show');
export const hideNotification = createEvent('hide');
export const cleanNotifications = createEvent('clean');
export const cleanNotificationsQueue = createEvent('cleanQueue');
export const updateNotification = createEvent('update');

export const notifications: NotificationsEvents = {
  show: showNotification,
  hide: hideNotification,
  clean: cleanNotifications,
  cleanQueue: cleanNotificationsQueue,
  update: updateNotification,
};
