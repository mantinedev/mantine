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
  extends Omit<NotificationProps, 'onClose'>, Record<`data-${string}`, any> {
  /** Notification id, can be used to close or update notification */
  id?: string;

  /** Position of the notification, if not set, the position is determined based on `position` prop on Notifications component */
  position?: NotificationPosition;

  /** Notification message, required for all notifications */
  message: React.ReactNode;

  /** Display priority. Higher numbers are shown before lower ones when the number of
   *  active notifications exceeds `limit`. Notifications with equal priority keep insertion
   *  order (FIFO). @default 0 */
  priority?: number;

  /** Determines whether notification should be closed automatically,
   *  number is auto close timeout in ms, overrides `autoClose` from `Notifications`
   * */
  autoClose?: boolean | number;

  /** Determines whether notification can be closed with close button, drag or horizontal scroll swipe, `true` by default */
  allowClose?: boolean;

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

interface SequencedNotificationData extends NotificationData {
  __sequence?: number;
}

let notificationSequence = 0;

function getDistributedNotifications(
  data: SequencedNotificationData[],
  defaultPosition: NotificationPosition,
  limit: number
) {
  const queue: NotificationData[] = [];
  const notifications: NotificationData[] = [];
  const groups = new Map<string, SequencedNotificationData[]>();

  for (const item of data) {
    const position = item.position || defaultPosition;
    const group = groups.get(position);
    if (group) {
      group.push(item);
    } else {
      groups.set(position, [item]);
    }
  }

  for (const group of groups.values()) {
    group.sort(
      (a, b) => (b.priority ?? 0) - (a.priority ?? 0) || (a.__sequence ?? 0) - (b.__sequence ?? 0)
    );
    group.forEach((item, index) => {
      if (index < limit) {
        notifications.push(item);
      } else {
        queue.push(item);
      }
    });
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

  for (const item of notifications as SequencedNotificationData[]) {
    if (item.__sequence === undefined) {
      item.__sequence = notificationSequence;
      notificationSequence += 1;
    }
  }

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
  const { defaultPosition, limit } = store.getState();
  updateNotificationsState(
    store,
    (notifications) =>
      getDistributedNotifications(notifications, defaultPosition, limit).notifications
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
