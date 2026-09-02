import {
  createNotificationsStore,
  hideNotification,
  notifications,
  promiseNotification,
} from './notifications.store';

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}

async function flushPromises() {
  await new Promise((resolve) => setTimeout(resolve, 0));
}

describe('@mantine/notifications/promiseNotification', () => {
  it('shows a loading notification that does not auto close while the promise is pending', () => {
    const store = createNotificationsStore();
    const { promise } = deferred<string>();

    promiseNotification(
      promise,
      {
        loading: { message: 'Saving' },
        success: { message: 'Saved' },
        error: { message: 'Failed' },
      },
      store
    );

    const [notification] = store.getState().notifications;
    expect(store.getState().notifications).toHaveLength(1);
    expect(notification.message).toBe('Saving');
    expect(notification.loading).toBe(true);
    expect(notification.autoClose).toBe(false);
  });

  it('returns the original promise', () => {
    const store = createNotificationsStore();
    const { promise, resolve } = deferred<string>();

    const result = promiseNotification(
      promise,
      {
        loading: { message: 'Saving' },
        success: { message: 'Saved' },
        error: { message: 'Failed' },
      },
      store
    );

    resolve('done');
    expect(result).toBe(promise);
  });

  it('updates the notification with the success state when the promise resolves', async () => {
    const store = createNotificationsStore();
    const { promise, resolve } = deferred<string>();

    promiseNotification(
      promise,
      {
        loading: { message: 'Saving', title: 'Please wait' },
        success: { message: 'Saved' },
        error: { message: 'Failed' },
      },
      store
    );

    const [{ id }] = store.getState().notifications;
    resolve('done');
    await flushPromises();

    const [notification] = store.getState().notifications;
    expect(store.getState().notifications).toHaveLength(1);
    expect(notification.id).toBe(id);
    expect(notification.message).toBe('Saved');
    expect(notification.title).toBe('Please wait');
    expect(notification.loading).toBe(false);
    expect(notification.color).toBe('teal');
    expect(notification.autoClose).toBeUndefined();
  });

  it('passes the resolved value to the success function', async () => {
    const store = createNotificationsStore();
    const { promise, resolve } = deferred<{ name: string }>();

    promiseNotification(
      promise,
      {
        loading: { message: 'Saving' },
        success: (value) => ({ message: `Saved ${value.name}` }),
        error: { message: 'Failed' },
      },
      store
    );

    resolve({ name: 'report' });
    await flushPromises();

    expect(store.getState().notifications[0].message).toBe('Saved report');
  });

  it('updates the notification with the error state when the promise rejects', async () => {
    const store = createNotificationsStore();
    const { promise, reject } = deferred<string>();

    promiseNotification(
      promise,
      {
        loading: { message: 'Saving' },
        success: { message: 'Saved' },
        error: { message: 'Failed' },
      },
      store
    ).catch(() => {});

    reject(new Error('boom'));
    await flushPromises();

    const [notification] = store.getState().notifications;
    expect(notification.message).toBe('Failed');
    expect(notification.loading).toBe(false);
    expect(notification.color).toBe('red');
    expect(notification.autoClose).toBeUndefined();
  });

  it('passes the rejection reason to the error function', async () => {
    const store = createNotificationsStore();
    const { promise, reject } = deferred<string>();

    promiseNotification(
      promise,
      {
        loading: { message: 'Saving' },
        success: { message: 'Saved' },
        error: (error) => ({ message: `Failed: ${(error as Error).message}` }),
      },
      store
    ).catch(() => {});

    reject(new Error('boom'));
    await flushPromises();

    expect(store.getState().notifications[0].message).toBe('Failed: boom');
  });

  it('lets state objects override the default values', async () => {
    const store = createNotificationsStore();
    const { promise, resolve } = deferred<string>();

    promiseNotification(
      promise,
      {
        loading: { message: 'Saving', autoClose: 1000, loading: false },
        success: { message: 'Saved', color: 'blue', autoClose: 500 },
        error: { message: 'Failed' },
      },
      store
    );

    expect(store.getState().notifications[0].autoClose).toBe(1000);
    expect(store.getState().notifications[0].loading).toBe(false);

    resolve('done');
    await flushPromises();

    expect(store.getState().notifications[0].color).toBe('blue');
    expect(store.getState().notifications[0].autoClose).toBe(500);
  });

  it('uses the given id for every state', async () => {
    const store = createNotificationsStore();
    const { promise, resolve } = deferred<string>();

    promiseNotification(
      promise,
      {
        id: 'upload',
        loading: { message: 'Saving' },
        success: { message: 'Saved' },
        error: { message: 'Failed' },
      },
      store
    );

    expect(store.getState().notifications[0].id).toBe('upload');
    resolve('done');
    await flushPromises();
    expect(store.getState().notifications[0].id).toBe('upload');
    expect(store.getState().notifications[0].message).toBe('Saved');
  });

  it('shows the settled state as a new notification when the loading one was closed', async () => {
    const store = createNotificationsStore();
    const { promise, reject } = deferred<string>();

    promiseNotification(
      promise,
      {
        loading: { message: 'Saving' },
        success: { message: 'Saved' },
        error: { message: 'Failed' },
      },
      store
    ).catch(() => {});

    const [{ id }] = store.getState().notifications;
    hideNotification(id!, store);
    expect(store.getState().notifications).toHaveLength(0);

    reject(new Error('boom'));
    await flushPromises();

    expect(store.getState().notifications).toHaveLength(1);
    expect(store.getState().notifications[0].id).toBe(id);
    expect(store.getState().notifications[0].message).toBe('Failed');
    expect(store.getState().notifications[0].loading).toBe(false);
  });

  it('updates an existing notification with the same id into the loading state', () => {
    const store = createNotificationsStore();
    const { promise } = deferred<string>();

    notifications.show({ id: 'sync', message: 'Synced 2 minutes ago', color: 'gray' }, store);

    promiseNotification(
      promise,
      {
        id: 'sync',
        loading: { message: 'Syncing' },
        success: { message: 'Synced' },
        error: { message: 'Sync failed' },
      },
      store
    );

    expect(store.getState().notifications).toHaveLength(1);
    expect(store.getState().notifications[0].message).toBe('Syncing');
    expect(store.getState().notifications[0].loading).toBe(true);
    expect(store.getState().notifications[0].autoClose).toBe(false);
  });

  it('ignores settlements of superseded promises with the same id', async () => {
    const store = createNotificationsStore();
    const first = deferred<string>();
    const second = deferred<string>();
    const options = {
      id: 'sync',
      loading: { message: 'Syncing' },
      success: (value: string) => ({ message: `Synced ${value}` }),
      error: { message: 'Sync failed' },
    };

    promiseNotification(first.promise, options, store);
    promiseNotification(second.promise, options, store);

    first.resolve('first');
    await flushPromises();

    expect(store.getState().notifications).toHaveLength(1);
    expect(store.getState().notifications[0].message).toBe('Syncing');
    expect(store.getState().notifications[0].loading).toBe(true);

    second.resolve('second');
    await flushPromises();

    expect(store.getState().notifications[0].message).toBe('Synced second');
    expect(store.getState().notifications[0].loading).toBe(false);
  });

  it('keeps loading props when the settled state is shown as a new notification', async () => {
    const store = createNotificationsStore();
    const { promise, resolve } = deferred<string>();

    promiseNotification(
      promise,
      {
        loading: { message: 'Saving', title: 'Please wait', withBorder: true },
        success: { message: 'Saved' },
        error: { message: 'Failed' },
      },
      store
    );

    const [{ id }] = store.getState().notifications;
    hideNotification(id!, store);

    resolve('done');
    await flushPromises();

    const [notification] = store.getState().notifications;
    expect(notification.message).toBe('Saved');
    expect(notification.title).toBe('Please wait');
    expect(notification.withBorder).toBe(true);
    expect(notification.loading).toBe(false);
    expect(notification.color).toBe('teal');
  });

  it('is exposed as notifications.promise', () => {
    expect(notifications.promise).toBe(promiseNotification);
  });
});
