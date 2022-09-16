import React from 'react';
import { Group, Button, Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';

const code = `
import { Group, Button, Text } from '@mantine/core';
import { openConfirmModal, closeAllModals } from '@mantine/modals';

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() =>
          openConfirmModal({
            title: 'Please confirm your action',
            children: (
              <Text size="sm">
                This Modal will not close until the onConfirmPending function is completed.
              </Text>
            ),
            onConfirmPending: async () => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
            },
            onConfirm: () => console.log('pending modal confirmed'),
            onClose: () => console.log('pending modal closed'),
          })
        }
      >
        Open confirm pending modal
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() =>
          openConfirmModal({
            title: 'Please confirm your action',
            children: (
              <Text size="sm">
                This Modal will not close until the onConfirmPending function is completed.
              </Text>
            ),
            onConfirmPending: async () => {
              const wait = (ms: number) =>
                new Promise((resolve) => {
                  setTimeout(resolve, ms);
                });
              await wait(1000);
            },
            onCancel: () =>
              showNotification({
                title: 'Canceled',
                message: 'Pending modal was canceled',
                color: 'gray',
              }),
            onConfirm: () =>
              showNotification({
                title: 'Confirmed',
                message: 'Pending modal was confirmed',
                color: 'red',
              }),
          })
        }
      >
        Open confirm pending modal
      </Button>
    </Group>
  );
}

export const confirmPending: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
