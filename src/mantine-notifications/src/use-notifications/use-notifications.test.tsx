import React from 'react';
import ReactDOM from 'react-dom';
import { renderHook } from '@testing-library/react-hooks';
import { MantineProvider } from '@mantine/core';
import { useNotifications } from './use-notifications';
import { NotificationsProvider } from '../NotificationsProvider/NotificationsProvider';

describe('@mantine/notifications/use-notifications', () => {
  beforeAll(() => {
    // @ts-ignore
    ReactDOM.createPortal = jest.fn((element) => element);
  });

  afterEach(() => {
    // @ts-ignore
    ReactDOM.createPortal.mockClear();
  });

  it('throws error if called outside of NotificationsProvider', () => {
    const hook = renderHook(() => useNotifications());
    expect(hook.result.error).toEqual(
      Error('@mantine/notifications: NotificationsProvider was not found in tree')
    );
  });

  it('returns context value of MantineProvider', () => {
    const wrapper = ({ children }) => (
      <MantineProvider>
        <NotificationsProvider>{children}</NotificationsProvider>
      </MantineProvider>
    );

    const hook = renderHook(() => useNotifications(), { wrapper });
    const { current } = hook.result;

    expect(current.notifications).toBeDefined();
    expect(current.showNotification).toBeDefined();
    expect(current.hideNotification).toBeDefined();
    expect(current.updateNotification).toBeDefined();
  });
});
