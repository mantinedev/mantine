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
            title: 'Progress line at the top',
            message: 'This notification will close in 5 seconds',
            withAutoCloseProgress: true,
            autoCloseProgressPosition: 'top',
            autoClose: 5000,
          })
        }
      >
        Progress at the top
      </Button>

      <Button
        variant="default"
        onClick={() =>
          notifications.show({
            title: 'Progress line at the bottom',
            message: 'This notification will close in 5 seconds',
            withAutoCloseProgress: true,
            autoCloseProgressPosition: 'bottom',
            autoClose: 5000,
          })
        }
      >
        Progress at the bottom
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
            title: 'Progress line at the top',
            message: 'This notification will close in 5 seconds',
            withAutoCloseProgress: true,
            autoCloseProgressPosition: 'top',
            autoClose: 5000,
          })
        }
      >
        Progress at the top
      </Button>

      <Button
        variant="default"
        onClick={() =>
          notifications.show({
            title: 'Progress line at the bottom',
            message: 'This notification will close in 5 seconds',
            withAutoCloseProgress: true,
            autoCloseProgressPosition: 'bottom',
            autoClose: 5000,
          })
        }
      >
        Progress at the bottom
      </Button>
    </Group>
  );
}

export const autoCloseProgressPosition: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
