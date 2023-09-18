import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}

export const centered: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
