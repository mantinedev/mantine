import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { Group, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

function Demo() {
  const notifications = useNotifications();

  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          notifications.showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Default
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
        Teal with icon
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
        Red color
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
            message: 'notification will be closed in 10 seconds',
            autoClose: 10000,
          })
        }
      >
        10 seconds timeout
      </Button>

      <Button
        variant="outline"
        color="cyan"
        onClick={() => {
          notifications.showNotification({
            id: 'data-loading',
            color: 'cyan',
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
        Loading state and update
      </Button>
    </Group>
  );
}

export const root: MantineDemo = {
  type: 'demo',
  component: Demo,
};
