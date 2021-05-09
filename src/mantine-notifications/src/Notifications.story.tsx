import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { storiesOf } from '@storybook/react';
import { Button, Group, MantineProvider } from '@mantine/core';
import { useNotifications } from './use-notifications/use-notifications';
import { NotificationsProvider } from './NotificationsProvider/NotificationsProvider';

function NotificationsDemo() {
  const notifications = useNotifications();

  return (
    <Group style={{ padding: 50 }}>
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

      <Button
        variant="outline"
        color="grape"
        onClick={() =>
          notifications.showNotification({
            color: 'grape',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>

      <Button
        variant="outline"
        color="indigo"
        onClick={() =>
          notifications.showNotification({
            color: 'indigo',
            title: 'Custom autoClose timeout',
            message: 'notification will be closed in 3 seconds',
            autoClose: 3000,
          })
        }
      >
        Will close automatically in 3 seconds
      </Button>
      <Button
        variant="outline"
        color="indigo"
        onClick={() => {
          notifications.showNotification({
            id: 'data-loading',
            color: 'indigo',
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            disallowClose: true,
          });

          setTimeout(() => {
            notifications.updateNotification('data-loading', {
              id: 'data-loading',
              color: 'teal',
              title: 'Data was loaded',
              message: 'Notification will close in 3 seconds, you can close this notification now',
              icon: <CheckIcon />,
              autoClose: 3000,
            });
          }, 3000);
        }}
      >
        Update notification
      </Button>
    </Group>
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
      <NotificationsProvider position="top-right" limit={2}>
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
