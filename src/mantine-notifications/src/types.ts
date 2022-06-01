import type { NotificationProps as NotificationComponentProps } from '@mantine/core';

export interface NotificationProps extends Omit<NotificationComponentProps, 'onClose'> {
  id?: string;
  message: React.ReactNode;
  autoClose?: boolean | number;
  onClose?(props: NotificationProps): void;
  onOpen?(props: NotificationProps): void;
}

export interface NotificationsContextProps {
  notifications: NotificationProps[];
  queue: NotificationProps[];
  showNotification(props: NotificationProps): string;
  updateNotification(props: NotificationProps): void;
  hideNotification(id: string): void;
  clean(): void;
  cleanQueue(): void;
}

export type NotificationsProviderPositioning = ['top' | 'bottom', 'left' | 'right' | 'center'];
