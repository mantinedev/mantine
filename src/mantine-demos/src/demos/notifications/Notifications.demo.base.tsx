import React from 'react';
import { Group, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

const code = `
import { Group, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}

export const base: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
