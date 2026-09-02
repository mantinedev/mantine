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
            title: 'Auto close progress',
            message: 'This notification will close in 5 seconds',
            withAutoCloseProgress: true,
            autoClose: 5000,
          })
        }
      >
        Show notification with progress
      </Button>

      <Button
        color="red"
        onClick={() =>
          notifications.show({
            title: 'Something went wrong',
            message: 'Progress line uses notification color',
            color: 'red',
            withAutoCloseProgress: true,
            autoClose: 8000,
          })
        }
      >
        Red notification with progress
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() =>
          notifications.show({
            title: 'Auto close progress',
            message: 'This notification will close in 5 seconds',
            withAutoCloseProgress: true,
            autoClose: 5000,
          })
        }
      >
        Show notification with progress
      </Button>

      <Button
        color="red"
        onClick={() =>
          notifications.show({
            title: 'Something went wrong',
            message: 'Progress line uses notification color',
            color: 'red',
            withAutoCloseProgress: true,
            autoClose: 8000,
          })
        }
      >
        Red notification with progress
      </Button>
    </Group>
  );
}

export const autoCloseProgress: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
