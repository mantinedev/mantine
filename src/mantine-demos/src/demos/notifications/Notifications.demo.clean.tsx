import React from 'react';
import { Group, Button } from '@mantine/core';
import {
  showNotification,
  cleanNotificationsQueue,
  cleanNotifications,
} from '@mantine/notifications';

const code = `
import { Group, Button } from '@mantine/core';
import { showNotification, cleanNotificationsQueue, cleanNotifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              showNotification({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="outline" color="gray" onClick={cleanNotificationsQueue}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={cleanNotifications}>
        Clean all
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              showNotification({
                title: `Notification ${index + 1}`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="outline" color="gray" onClick={cleanNotificationsQueue}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={cleanNotifications}>
        Clean all
      </Button>
    </Group>
  );
}

export const clean: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
