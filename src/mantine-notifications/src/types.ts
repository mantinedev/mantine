export interface NotificationProps {
  id?: string;
  color?: string;
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
  showNotification(props: NotificationProps): void;
  updateNotification(id: string, props: NotificationProps): void;
  hideNotification(id: string): void;
}

export type NotificationsProviderPositioning = ['top' | 'bottom', 'left' | 'right' | 'center'];
