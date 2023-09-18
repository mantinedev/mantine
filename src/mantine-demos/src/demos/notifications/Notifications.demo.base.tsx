import React from 'react';
import { Button } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { notifications } from '@mantine/notifications';

const code = `
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Hey there, your code is awesome! 🤥',
        })
      }
    >
      Show notification
    </Button>
  );
}`;

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Hey there, your code is awesome! 🤥',
        })
      }
    >
      Show notification
    </Button>
  );
}

export const base: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
