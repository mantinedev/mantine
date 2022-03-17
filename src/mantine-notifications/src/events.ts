import { useEffect } from 'react';
import type { NotificationProps, NotificationsContextProps } from './types';

type ValueOf<T> = T[keyof T];

export const NOTIFICATIONS_EVENTS = {
  show: 'mantine:show-notification',
  hide: 'mantine:hide-notification',
  update: 'mantine:update-notification',
  clean: 'mantine:clean-notifications',
  cleanQueue: 'mantine:clean-notifications-queue',
} as const;

export function createEvent(type: ValueOf<typeof NOTIFICATIONS_EVENTS>, detail?: any) {
  return new CustomEvent(type, { detail });
}

export function showNotification(notification: NotificationProps) {
  window.dispatchEvent(createEvent(NOTIFICATIONS_EVENTS.show, notification));
}

export function updateNotification(notification: NotificationProps & { id: string }) {
  window.dispatchEvent(createEvent(NOTIFICATIONS_EVENTS.update, notification));
}

export function useNotificationsEvents(ctx: NotificationsContextProps) {
  const events = {
    show: (event: any) => ctx.showNotification(event.detail),
    hide: (event: any) => ctx.hideNotification(event.detail),
    update: (event: any) => ctx.updateNotification(event.detail.id, event.detail),
    clean: ctx.clean,
    cleanQuery: ctx.cleanQueue,
  };

  useEffect(() => {
    Object.keys(events).forEach((event) => {
      window.addEventListener(NOTIFICATIONS_EVENTS[event], events[event]);
    });

    return () => {
      Object.keys(events).forEach((event) => {
        window.removeEventListener(NOTIFICATIONS_EVENTS[event], events[event]);
      });
    };
  }, []);
}
