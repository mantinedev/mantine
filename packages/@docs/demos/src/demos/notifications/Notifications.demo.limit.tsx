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
      onClick={() => {
        Array(10).fill(0).forEach((_, index) => {
          setTimeout(() => {
            notifications.show({
              title: \`Notification \${index + 1}\`,
              message: 'Most notifications are added to queue',
            });
          }, 200 * index);
        });
      }}
    >
      Show 10 notifications
    </Button>
  );
}`;

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        Array(10)
          .fill(0)
          .forEach((_, index) => {
            setTimeout(() => {
              notifications.show({
                title: `Notification ${index + 1}`,
                message: 'Most notifications are added to queue',
              });
            }, 200 * index);
          });
      }}
    >
      Show 10 notifications
    </Button>
  );
}

export const limit: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
