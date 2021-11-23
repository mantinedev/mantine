import React, { useState } from 'react';
import { AuthenticationForm } from '../../../../demos';
import { Modal, Group, Button } from '../../../index';

const code = '<Modal centered />';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Introduce yourself!" centered>
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open centered Modal</Button>
      </Group>
    </>
  );
}

export const centered: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
