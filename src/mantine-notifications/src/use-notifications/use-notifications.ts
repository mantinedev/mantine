import { useContext } from 'react';
import { NotificationsContext } from '../Notifications.context';

export function useNotifications() {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error(
      '@mantine/notifications: use-notifications hook was called outside of NotificationsProvider context'
    );
  }

  return context;
}
