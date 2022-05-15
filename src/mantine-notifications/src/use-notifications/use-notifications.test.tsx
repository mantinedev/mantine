import React from 'react';
import { renderHook } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { useNotifications } from './use-notifications';
import { NotificationsProvider } from '../NotificationsProvider/NotificationsProvider';

describe('@mantine/notifications/use-notifications', () => {
  it('returns context value of NotificationsProvider', () => {
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
