import type { NotificationStylesNames } from '@mantine/core';

export const Notification: Record<NotificationStylesNames, string> = {
  root: 'Root element',
  body: 'Notification body wrapper, contains title and description',
  loader: 'Notification loader, controlled by loading prop',
  icon: 'Notification icon on the left, controlled by icon prop',
  title: 'Notification title, controlled by title prop',
  description: 'Notification description, controlled by children',
  closeButton: 'Close button',
};
