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

export type NotificationsProviderPositioning = ['top' | 'bottom', 'left' | 'right' | 'center'];
