import React from 'react';
import { Group, Button } from '@mantine/core';
import { useModals } from '@mantine/modals';

const code = `
import { Group, Button, Text } from '@mantine/core';
import { useModals } from '@mantine/modals';

function Demo() {
  const modals = useModals();
  const openContextModal = () =>
    modals.openContextModal('demonstration', { title: 'Test modal from context' });

  return <Button onClick={openContextModal}>Open demonstration context modal</Button>;
}
`;

function Demo() {
  const modals = useModals();

  const openContextModal = () =>
    modals.openContextModal('demonstration', { title: 'Test modal from context' });

  return (
    <Group position="center">
      <Button onClick={openContextModal}>Open demonstration context modal</Button>
    </Group>
  );
}

export const context: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
