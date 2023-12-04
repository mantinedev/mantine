import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const code = `
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button color="gray" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: `Notification ${index + 1}`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button color="gray" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </Group>
  );
}

export const clean: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
