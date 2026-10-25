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

  /** Determines whether a progress line that fills up until the notification auto closes is displayed at the bottom of the notification, overrides `withAutoCloseProgress` from `Notifications` */
  withAutoCloseProgress?: boolean;

  /** Called when notification closes */
  onClose?: (props: NotificationData) => void;

  /** Called when notification opens */
  onOpen?: (props: NotificationData) => void;

  /** Custom render function that replaces the default notification, overrides `renderNotification` from `Notifications`. Set to `null` to use default rendering when a global `renderNotification` is set. */
  renderNotification?: ((notification: NotificationData) => React.ReactNode) | null;
}

export interface NotificationsState {
  notifications: NotificationData[];
  queue: NotificationData[];
  defaultPosition: NotificationPosition;
  limit: number;
}

export type NotificationsStore = MantineStore<NotificationsState>;

export interface SequencedNotificationData extends NotificationData {
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

export type PromiseNotificationData = Omit<NotificationData, 'id'>;

export interface PromiseNotificationOptions<T> {
  /** Notification id, used for all three states, by default `id` is randomly generated */
  id?: string;

  /** Notification displayed while the promise is pending, `loading: true` and `autoClose: false` are applied by default */
  loading: PromiseNotificationData;

  /** Notification displayed when the promise resolves, `color: 'teal'` is applied by default. Function receives the resolved value. */
  success: PromiseNotificationData | ((value: T) => PromiseNotificationData);

  /** Notification displayed when the promise rejects, `color: 'red'` is applied by default. Function receives the rejection reason. */
  error: PromiseNotificationData | ((error: unknown) => PromiseNotificationData);
}

function resolvePromiseNotificationData<T>(
  data: PromiseNotificationData | ((value: T) => PromiseNotificationData),
  value: T
) {
  return typeof data === 'function' ? data(value) : data;
}

function upsertNotification(notification: NotificationData, store: NotificationsStore) {
  const state = store.getState();
  const exists = [...state.notifications, ...state.queue].some(
    (item) => item.id === notification.id
  );

  return exists ? updateNotification(notification, store) : showNotification(notification, store);
}

const pendingPromises = new WeakMap<NotificationsStore, Map<string, object>>();

export function promiseNotification<T>(
  promise: Promise<T>,
  options: PromiseNotificationOptions<T>,
  store: NotificationsStore = notificationsStore
): Promise<T> {
  const id = options.id || randomId();
  const owners = pendingPromises.get(store) || new Map<string, object>();
  const owner = {};

  pendingPromises.set(store, owners);
  owners.set(id, owner);

  upsertNotification({ loading: true, autoClose: false, ...options.loading, id }, store);

  const settle = (data: PromiseNotificationData) => {
    if (owners.get(id) !== owner) {
      return;
    }

    owners.delete(id);
    upsertNotification(
      { ...options.loading, loading: false, autoClose: undefined, ...data, id },
      store
    );
  };

  promise.then(
    (value) => settle({ color: 'teal', ...resolvePromiseNotificationData(options.success, value) }),
    (error) => settle({ color: 'red', ...resolvePromiseNotificationData(options.error, error) })
  );

  return promise;
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
  promise: promiseNotification,
  clean: cleanNotifications,
  cleanQueue: cleanNotificationsQueue,
  updateState: updateNotificationsState,
} as const;
