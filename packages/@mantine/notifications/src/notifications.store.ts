import { NotificationProps } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { createStore, MantineStore, useStore } from '@mantine/store';

export type NotificationPosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

export interface NotificationData
  extends Omit<NotificationProps, 'onClose'>,
    Record<`data-${string}`, any> {
  /** Notification id, can be used to close or update notification */
  id?: string;

  /** Position of the notification, if not set, the position is determined based on `position` prop on Notifications component */
  position?: NotificationPosition;

  /** Notification message, required for all notifications */
  message: React.ReactNode;

  /** Determines whether notification should be closed automatically,
   *  number is auto close timeout in ms, overrides `autoClose` from `Notifications`
   * */
  autoClose?: boolean | number;

  /** Called when notification closes */
  onClose?: (props: NotificationData) => void;

  /** Called when notification opens */
  onOpen?: (props: NotificationData) => void;
}

export interface NotificationsState {
  notifications: NotificationData[];
  queue: NotificationData[];
  defaultPosition: NotificationPosition;
  limit: number;
}

export type NotificationsStore = MantineStore<NotificationsState>;

function getDistributedNotifications(
  data: NotificationData[],
  defaultPosition: NotificationPosition,
  limit: number
) {
  const queue: NotificationData[] = [];
  const notifications: NotificationData[] = [];
  const count: Record<string, number> = {};

  for (const item of data) {
    const position = item.position || defaultPosition;
    count[position] = count[position] || 0;
    count[position] += 1;

    if (count[position] <= limit) {
      notifications.push(item);
    } else {
      queue.push(item);
    }
  }

  return { notifications, queue };
}

export const createNotificationsStore = () =>
  createStore<NotificationsState>({
    notifications: [],
    queue: [],
    defaultPosition: 'bottom-right',
    limit: 5,
  });

export const notificationsStore = createNotificationsStore();
export const useNotifications = (store: NotificationsStore = notificationsStore) => useStore(store);

export function updateNotificationsState(
  store: NotificationsStore,
  update: (notifications: NotificationData[]) => NotificationData[]
) {
  const state = store.getState();
  const notifications = update([...state.notifications, ...state.queue]);
  const updated = getDistributedNotifications(notifications, state.defaultPosition, state.limit);

  store.setState({
    notifications: updated.notifications,
    queue: updated.queue,
    limit: state.limit,
    defaultPosition: state.defaultPosition,
  });
}

export function showNotification(
  notification: NotificationData,
  store: NotificationsStore = notificationsStore
) {
  const id = notification.id || randomId();

  updateNotificationsState(store, (notifications) => {
    if (notification.id && notifications.some((n) => n.id === notification.id)) {
      return notifications;
    }

    return [...notifications, { ...notification, id }];
  });

  return id;
}

export function hideNotification(id: string, store: NotificationsStore = notificationsStore) {
  updateNotificationsState(store, (notifications) =>
    notifications.filter((notification) => {
      if (notification.id === id) {
        notification.onClose?.(notification);
        return false;
      }

      return true;
    })
  );

  return id;
}

export function updateNotification(
  notification: NotificationData,
  store: NotificationsStore = notificationsStore
) {
  updateNotificationsState(store, (notifications) =>
    notifications.map((item) => {
      if (item.id === notification.id) {
        return { ...item, ...notification };
      }

      return item;
    })
  );

  return notification.id;
}

export function cleanNotifications(store: NotificationsStore = notificationsStore) {
  updateNotificationsState(store, () => []);
}

export function cleanNotificationsQueue(store: NotificationsStore = notificationsStore) {
  updateNotificationsState(store, (notifications) =>
    notifications.slice(0, store.getState().limit)
  );
}

export const notifications = {
  show: showNotification,
  hide: hideNotification,
  update: updateNotification,
  clean: cleanNotifications,
  cleanQueue: cleanNotificationsQueue,
  updateState: updateNotificationsState,
} as const;
