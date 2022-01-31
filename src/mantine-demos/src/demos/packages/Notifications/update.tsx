import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { Group, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

const code = `import React from 'react';
import { Group, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { CheckIcon } from '@modulz/radix-icons';

function Demo() {
  const notifications = useNotifications();

  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          const id = notifications.showNotification({
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            disallowClose: true,
          });

          setTimeout(() => {
            notifications.updateNotification(id, {
              id,
              color: 'teal',
              title: 'Data was loaded',
              message:
                'Notification will close in 2 seconds, you can close this notification now',
              icon: <CheckIcon />,
              autoClose: 2000,
            });
          }, 3000);
        }}
      >
        Show update notification
      </Button>
    </Group>
  );
}`;

function Demo() {
  const notifications = useNotifications();

  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          const id = notifications.showNotification({
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            disallowClose: true,
          });

          setTimeout(() => {
            notifications.updateNotification(id, {
              id,
              color: 'teal',
              title: 'Data was loaded',
              message: 'Notification will close in 2 seconds, you can close this notification now',
              icon: <CheckIcon />,
              autoClose: 2000,
            });
          }, 3000);
        }}
      >
        Show update notification
      </Button>
    </Group>
  );
}

export const update: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
