import { useContext } from 'react';
import { NotificationsContext } from '../Notifications.context';

export function useNotifications() {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error('@mantine/notifications: NotificationsProvider was not found in tree');
  }

  return context;
}
