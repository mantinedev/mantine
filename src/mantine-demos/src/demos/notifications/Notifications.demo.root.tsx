import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Group, Button } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
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
          notifications.show({
            color: 'teal',
            title: 'You did great',
            message: 'Data was saved',
            icon: <IconCheck size="1rem" />,
          })
        }
      >
        Teal with icon
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
        Red color
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
          notifications.show({
            id: 'data-loading',
            color: 'cyan',
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            withCloseButton: false,
          });

          setTimeout(() => {
            notifications.update({
              id: 'data-loading',
              color: 'teal',
              title: 'Data was loaded',
              message: 'Notification will close in 3 seconds, you can close this notification now',
              icon: <IconCheck size="1rem" />,
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
