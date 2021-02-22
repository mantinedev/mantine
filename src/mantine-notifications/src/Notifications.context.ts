import React, { createContext } from 'react';

export interface NotificationProps {
  id?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  message: React.ReactNode;
}

export interface NotificationsContextProps {
  notifications: NotificationProps[];
  showNotification(props: NotificationProps): void;
  hideNotification(id: string): void;
}

export const NotificationsContext = createContext<NotificationsContextProps>(null);
NotificationsContext.displayName = '@mantine/notifications/NotificationsContext';
