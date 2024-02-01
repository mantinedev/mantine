import { NotificationProps } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { createStore, MantineStore, useStore } from '@mantine/store';

export interface NotificationData extends Omit<NotificationProps, 'onClose'>, Record<string, any> {
  /** Notification id, can be used to close or update notification */
  id?: string;

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
  limit: number;
}

export type NotificationsStore = MantineStore<NotificationsState>;

export const createNotificationsStore = () =>
  createStore<NotificationsState>({
    notifications: [],
    queue: [],
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

  store.setState({
    notifications: notifications.slice(0, state.limit),
    queue: notifications.slice(state.limit),
    limit: state.limit,
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
