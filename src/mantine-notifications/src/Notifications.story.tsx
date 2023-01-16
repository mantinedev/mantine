import React from 'react';
import { IconCheck } from '@tabler/icons';
import { storiesOf } from '@storybook/react';
import { Button, Group, MantineProvider } from '@mantine/core';
import { notifications } from './events';
import { Notifications } from './Notifications/Notifications';

function NotificationsDemo() {
  return (
    <Group style={{ padding: 50 }}>
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
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
          notifications.show({
            color: 'teal',
            title: 'You did great',
            message: 'Data was saved',
            icon: <IconCheck size={16} />,
          })
        }
      >
        Show success notification
      </Button>

      <Button
        variant="outline"
        color="red"
        onClick={() =>
          notifications.show({
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
          notifications.show({
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
          notifications.show({
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
          notifications.show({
            id: 'data-loading',
            color: 'indigo',
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            disallowClose: true,
          });

          setTimeout(() => {
            notifications.update({
              id: 'data-loading',
              color: 'teal',
              title: 'Data was loaded',
              message: 'Notification will close in 3 seconds, you can close this notification now',
              icon: <IconCheck size={16} />,
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

storiesOf('Notifications System', module)
  .add('bottom-right (default)', () => (
    <React.StrictMode>
      <MantineProvider inherit>
        <Notifications />
        <NotificationsDemo />
      </MantineProvider>
    </React.StrictMode>
  ))
  .add('top-right', () => (
    <MantineProvider inherit>
      <Notifications position="top-right" limit={2} />
      <NotificationsDemo />
    </MantineProvider>
  ))
  .add('top-left', () => (
    <MantineProvider inherit>
      <Notifications position="top-left" />
      <NotificationsDemo />
    </MantineProvider>
  ))
  .add('bottom-left', () => (
    <MantineProvider inherit>
      <Notifications position="bottom-left" />
      <NotificationsDemo />
    </MantineProvider>
  ))
  .add('bottom-center', () => (
    <MantineProvider inherit>
      <Notifications position="bottom-center" />
      <NotificationsDemo />
    </MantineProvider>
  ))
  .add('top-center', () => (
    <MantineProvider inherit>
      <Notifications position="top-center" />
      <NotificationsDemo />
    </MantineProvider>
  ));
