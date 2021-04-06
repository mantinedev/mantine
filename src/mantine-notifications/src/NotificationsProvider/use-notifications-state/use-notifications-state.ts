import { nanoid } from 'nanoid';
import { useQueue } from '@mantine/hooks';
import { NotificationProps } from '../../types';

export default function useNotificationsState({ limit }: { limit: number }) {
  const { state, update } = useQueue<NotificationProps>({ initialValues: [], limit });

  const showNotification = (notification: NotificationProps) =>
    update((notifications) => {
      if (notification.id && notifications.some((n) => n.id === notification.id)) {
        return notifications;
      }

      return [...notifications, { ...notification, id: notification.id || nanoid() }];
    });

  const updateNotification = (id: string, notification: NotificationProps) =>
    update((notifications) => {
      const index = notifications.findIndex((n) => n.id === id);

      if (index === -1) {
        return notifications;
      }

      const newNotifications = [...notifications];
      newNotifications[index] = notification;

      return newNotifications;
    });

  const hideNotification = (id: string) =>
    update((notifications) => notifications.filter((notification) => notification.id !== id));

  return { notifications: state, showNotification, updateNotification, hideNotification };
}
