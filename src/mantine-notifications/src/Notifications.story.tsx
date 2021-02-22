import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ElementsGroup, MantineProvider } from '@mantine/core';
import { useNotifications } from './use-notifications';
import { NotificationsProvider } from './Notifications.provider';

function NotificationsDemo() {
  const notifications = useNotifications();

  return (
    <ElementsGroup style={{ padding: 50 }}>
      <Button
        variant="outline"
        onClick={() =>
          notifications.showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show default notification
      </Button>
    </ElementsGroup>
  );
}

storiesOf('@mantine/notifications', module).add('default', () => (
  <MantineProvider>
    <NotificationsProvider>
      <NotificationsDemo />
    </NotificationsProvider>
  </MantineProvider>
));
