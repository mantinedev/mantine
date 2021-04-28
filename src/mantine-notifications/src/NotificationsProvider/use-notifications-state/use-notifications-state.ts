import { useQueue } from '@mantine/hooks';
import { NotificationProps } from '../../types';

function randomId() {
  return Math.random().toString(36).substr(2, 9);
}

export default function useNotificationsState({ limit }: { limit: number }) {
  const { state, queue, update, cleanQueue } = useQueue<NotificationProps>({
    initialValues: [],
    limit,
  });

  const showNotification = (notification: NotificationProps) => {
    const id = notification.id || randomId();

    update((notifications) => {
      if (notification.id && notifications.some((n) => n.id === notification.id)) {
        return notifications;
      }

      return [...notifications, { ...notification, id }];
    });

    return id;
  };

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

  const clean = () => update(() => []);

  return {
    notifications: state,
    queue,
    showNotification,
    updateNotification,
    hideNotification,
    cleanQueue,
    clean,
  };
}
