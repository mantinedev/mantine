import React from 'react';
import { Group, Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { MantineDemo } from '@mantine/ds';
import { notifications } from '@mantine/notifications';

const code = `
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return <Button onClick={openDeleteModal} color="red">Delete account</Button>;
}
`;

function Demo() {
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () =>
        notifications.show({
          title: 'Canceled',
          message: 'Delete modal was canceled',
          color: 'gray',
        }),
      onConfirm: () =>
        notifications.show({
          title: 'Deleted',
          message: 'Delete modal was confirmed',
          color: 'red',
        }),
    });

  return (
    <Group position="center">
      <Button onClick={openDeleteModal} color="red">
        Delete account
      </Button>
    </Group>
  );
}

export const confirmCustomize: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
