import { NotificationData, NotificationPosition } from '../notifications.store';

export type GroupedNotifications = Record<NotificationPosition, NotificationData[]>;

export const positions: NotificationPosition[] = [
  'bottom-center',
  'bottom-left',
  'bottom-right',
  'top-center',
  'top-left',
  'top-right',
];

export function getGroupedNotifications(
  notifications: NotificationData[],
  defaultPosition: NotificationPosition
) {
  return notifications.reduce<GroupedNotifications>(
    (acc, notification) => {
      acc[notification.position || defaultPosition].push(notification);
      return acc;
    },
    positions.reduce<GroupedNotifications>((acc, item) => {
      acc[item] = [];
      return acc;
    }, {} as GroupedNotifications)
  );
}
