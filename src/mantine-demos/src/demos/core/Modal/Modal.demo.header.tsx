import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}

`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}

export const header: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
