import { useState } from 'react';
import { nanoid } from 'nanoid';
import { NotificationProps } from '../../types';

export default function useNotificationsState({ limit }: { limit: number }) {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const showNotification = (notification: NotificationProps) =>
    setNotifications((currentNotifications) => {
      if (currentNotifications.length >= limit) {
        return currentNotifications;
      }

      const index = currentNotifications.findIndex((n) => n.id === notification.id);

      if (index === -1) {
        return [...currentNotifications, { ...notification, id: notification.id || nanoid() }];
      }

      return currentNotifications;
    });

  const updateNotification = (id: string, notification: NotificationProps) =>
    setNotifications((currentNotifications) => {
      const index = currentNotifications.findIndex((n) => n.id === id);

      if (index === -1) {
        return currentNotifications;
      }

      const newNotifications = [...currentNotifications];
      newNotifications[index] = notification;

      return newNotifications;
    });

  const hideNotification = (id: string) =>
    setNotifications((currentNotifications) =>
      currentNotifications.filter((notification) => notification.id !== id)
    );

  return { notifications, showNotification, updateNotification, hideNotification };
}
