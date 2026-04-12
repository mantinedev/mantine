import { Button, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() =>
          notifications.show({
            title: 'Auto close with progress',
            message: 'Notification will close in 4 seconds, you can track progress',
            withAutoCloseProgress: true,
          })
        }
      >
        With progress bar
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            title: 'Auto close with progress',
            message: 'Notification will close in 8 seconds',
            withAutoCloseProgress: true,
            autoClose: 8000,
          })
        }
      >
        8 seconds with progress
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() =>
          notifications.show({
            title: 'Auto close with progress',
            message: 'Notification will close in 4 seconds, you can track progress',
            withAutoCloseProgress: true,
          })
        }
      >
        With progress bar
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            title: 'Auto close with progress',
            message: 'Notification will close in 8 seconds',
            withAutoCloseProgress: true,
            autoClose: 8000,
          })
        }
      >
        8 seconds with progress
      </Button>
    </Group>
  );
}

export const autoCloseProgress: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
