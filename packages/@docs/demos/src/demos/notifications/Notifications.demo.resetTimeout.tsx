import { IconCheck } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <Button
      onClick={() => {
        const id = notifications.show({
          title: 'Processing',
          message: 'This notification will close in 7 seconds',
          autoClose: 7000,
        });

        // Update after 6 seconds
        setTimeout(() => {
          notifications.update({
            id,
            title: 'Updated',
            message: 'Timer was reset! This notification will close in 7 seconds from now',
            color: 'teal',
            icon: <IconCheck size={18} />,
            resetTimeout: true, // This resets the timer
          });
        }, 6000);
      }}
    >
      Show notification with timer reset
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button
      onClick={() => {
        const id = notifications.show({
          title: 'Processing',
          message: 'This notification will close in 7 seconds',
          autoClose: 7000,
        });

        // Update after 6 seconds
        setTimeout(() => {
          notifications.update({
            id,
            title: 'Updated',
            message: 'Timer was reset! This notification will close in 7 seconds from now',
            color: 'teal',
            icon: <IconCheck size={18} />,
            resetTimeout: true, // This resets the timer
          });
        }, 6000);
      }}
    >
      Show notification with timer reset
    </Button>
  );
}

export const resetTimeout: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
