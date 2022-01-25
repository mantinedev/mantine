import type { MantineColor, MantineNumberSize } from '@mantine/core';

export interface NotificationProps {
  id?: string;
  color?: MantineColor;
  radius?: MantineNumberSize;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  loading?: boolean;
  message: React.ReactNode;
  autoClose?: boolean | number;
  disallowClose?: boolean;
  onClose?(props: NotificationProps): void;
  onOpen?(props: NotificationProps): void;
}

export interface NotificationsContextProps {
  notifications: NotificationProps[];
  queue: NotificationProps[];
  showNotification(props: NotificationProps): string;
  updateNotification(id: string, props: NotificationProps): void;
  hideNotification(id: string): void;
  clean(): void;
  cleanQueue(): void;
}

export type NotificationsProviderPositioning = ['top' | 'bottom', 'left' | 'right' | 'center'];
