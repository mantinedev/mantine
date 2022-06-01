import { act, renderHook } from '@testing-library/react';
import { NotificationProps } from '../../types';
import useNotificationsState from './use-notifications-state';

const TEST_NOTIFICATION: NotificationProps = {
  id: 'test',
  message: 'test-notification',
};

describe('@mantine/notifications/use-notifications-state', () => {
  it('adds notification to the list with showNotification handler', () => {
    const hook = renderHook(() => useNotificationsState({ limit: 3 }));
    expect(hook.result.current.notifications).toHaveLength(0);

    act(() => {
      hook.result.current.showNotification(TEST_NOTIFICATION);
    });
    expect(hook.result.current.notifications).toStrictEqual([TEST_NOTIFICATION]);
  });

  it('returns notification id with showNotification handler', () => {
    let id = null;
    const hook = renderHook(() => useNotificationsState({ limit: 3 }));
    act(() => {
      id = hook.result.current.showNotification(TEST_NOTIFICATION);
    });
    expect(id).toBe(TEST_NOTIFICATION.id);

    act(() => {
      id = hook.result.current.showNotification({ ...TEST_NOTIFICATION, id: null });
    });

    expect(id).not.toBe(null);
  });

  it('does not allow to add multiple notifications with same id', () => {
    const hook = renderHook(() => useNotificationsState({ limit: 3 }));
    expect(hook.result.current.notifications).toHaveLength(0);

    act(() => {
      hook.result.current.showNotification(TEST_NOTIFICATION);
      hook.result.current.showNotification(TEST_NOTIFICATION);
      hook.result.current.showNotification(TEST_NOTIFICATION);
    });
    expect(hook.result.current.notifications).toHaveLength(1);
  });

  it('does not allow to add notifications above limit', () => {
    const hook = renderHook(() => useNotificationsState({ limit: 3 }));
    expect(hook.result.current.notifications).toHaveLength(0);

    act(() => {
      hook.result.current.showNotification(TEST_NOTIFICATION);
      hook.result.current.showNotification({ ...TEST_NOTIFICATION, id: '1' });
      hook.result.current.showNotification({ ...TEST_NOTIFICATION, id: '2' });
      hook.result.current.showNotification({ ...TEST_NOTIFICATION, id: '3' });
      hook.result.current.showNotification({ ...TEST_NOTIFICATION, id: '4' });
    });

    expect(hook.result.current.notifications).toHaveLength(3);
  });

  it('removes notification from the list with hideNotification handler', () => {
    const hook = renderHook(() => useNotificationsState({ limit: 3 }));

    act(() => {
      hook.result.current.showNotification(TEST_NOTIFICATION);
      hook.result.current.showNotification({ ...TEST_NOTIFICATION, id: '1' });
    });
    expect(hook.result.current.notifications).toHaveLength(2);

    act(() => hook.result.current.hideNotification('1'));
    expect(hook.result.current.notifications).toStrictEqual([TEST_NOTIFICATION]);

    act(() => hook.result.current.hideNotification(TEST_NOTIFICATION.id));
    expect(hook.result.current.notifications).toStrictEqual([]);
  });

  it('updates notification with updateNotification handler', () => {
    const hook = renderHook(() => useNotificationsState({ limit: 3 }));

    act(() => {
      hook.result.current.showNotification(TEST_NOTIFICATION);
      hook.result.current.showNotification({ ...TEST_NOTIFICATION, id: '1' });
    });
    expect(hook.result.current.notifications).toHaveLength(2);

    act(() =>
      hook.result.current.updateNotification({
        ...TEST_NOTIFICATION,
        message: 'update-test',
      })
    );
    expect(hook.result.current.notifications).toStrictEqual([
      { ...TEST_NOTIFICATION, message: 'update-test' },
      { ...TEST_NOTIFICATION, id: '1' },
    ]);
  });
});
