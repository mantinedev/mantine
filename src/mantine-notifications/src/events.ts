import { createUseExternalEvents } from '@mantine/utils';
import type { NotificationProps, NotificationsContextProps } from './types';

export type NotificationsEvents = {
  show(notification: NotificationProps): void;
  hide(id: string): void;
  update(notification: NotificationProps & { id: string }): void;
  clean(): void;
  cleanQueue(): void;
};

const [useEvents, createEvent] =
  createUseExternalEvents<NotificationsEvents>('mantine-notifications');

export const showNotification = createEvent('show');
export const hideNotification = createEvent('hide');
export const cleanNotifications = createEvent('clean');
export const cleanNotificationsQueue = createEvent('cleanQueue');
export const updateNotification = createEvent('update');

export function useNotificationsEvents(ctx: NotificationsContextProps) {
  const events = {
    show: ctx.showNotification,
    hide: ctx.hideNotification,
    update: ctx.updateNotification,
    clean: ctx.clean,
    cleanQueue: ctx.cleanQueue,
  };

  useEvents(events);
}
