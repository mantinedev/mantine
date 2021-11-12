import React from 'react';
import { Group, Button, Text } from '@mantine/core';
import { useConfirmModal } from '@mantine/modals';
import { useNotifications } from '@mantine/notifications';

const code = `
import { Group, Button, Text } from '@mantine/core';
import { useConfirmModal } from '@mantine/modals';

function Demo() {
  const description = (
    <Text size="sm">
      This action is so important that you are required to confirm it with a modal. Please click
      one of these buttons to proceed.
    </Text>
  );

  const modal = useConfirmModal(
    {
      description,
      onCancel: () => console.log('Canceled'),
      onConfirm: () => console.log('Confirmed'),
    },
    { title: 'Please confirm your action' }
  );

  return <Button onClick={() => modal.open()}>Open confirm modal</Button>;
}
`;

function Demo() {
  const notifications = useNotifications();
  const modal = useConfirmModal(
    {
      description: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a modal. Please click
          one of these buttons to proceed.
        </Text>
      ),

      onCancel: () =>
        notifications.showNotification({
          title: 'Canceled',
          message: 'Confirm modal was canceled',
          color: 'gray',
        }),
      onConfirm: () =>
        notifications.showNotification({
          title: 'Confirmed',
          message: 'Confirm modal was confirmed',
          color: 'teal',
        }),
    },
    { title: 'Please confirm your action' }
  );

  return (
    <Group position="center">
      <Button onClick={() => modal.open()}>Open confirm modal</Button>
    </Group>
  );
}

export const confirm: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
