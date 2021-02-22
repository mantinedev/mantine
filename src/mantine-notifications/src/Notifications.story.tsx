import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
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

      <Button
        variant="outline"
        color="teal"
        onClick={() =>
          notifications.showNotification({
            color: 'teal',
            title: 'You did great',
            message: 'Data was saved',
            icon: <CheckIcon />,
          })
        }
      >
        Show success notification
      </Button>

      <Button
        variant="outline"
        color="red"
        onClick={() =>
          notifications.showNotification({
            color: 'red',
            title: 'Bummer!',
            message: 'You have no right to do this',
          })
        }
      >
        Show error notification
      </Button>
    </ElementsGroup>
  );
}

storiesOf('@mantine/notifications', module)
  .add('bottom-right (default)', () => (
    <MantineProvider>
      <NotificationsProvider>
        <NotificationsDemo />
      </NotificationsProvider>
    </MantineProvider>
  ))
  .add('top-right', () => (
    <MantineProvider>
      <NotificationsProvider position="top-right">
        <NotificationsDemo />
      </NotificationsProvider>
    </MantineProvider>
  ))
  .add('top-left', () => (
    <MantineProvider>
      <NotificationsProvider position="top-left">
        <NotificationsDemo />
      </NotificationsProvider>
    </MantineProvider>
  ))
  .add('bottom-left', () => (
    <MantineProvider>
      <NotificationsProvider position="bottom-left">
        <NotificationsDemo />
      </NotificationsProvider>
    </MantineProvider>
  ))
  .add('bottom-center', () => (
    <MantineProvider>
      <NotificationsProvider position="bottom-center">
        <NotificationsDemo />
      </NotificationsProvider>
    </MantineProvider>
  ))
  .add('top-center', () => (
    <MantineProvider>
      <NotificationsProvider position="top-center">
        <NotificationsDemo />
      </NotificationsProvider>
    </MantineProvider>
  ));
