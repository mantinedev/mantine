import React, { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

const code = `
import { Modal } from '@mantine/core';

function Demo() {
  return (
    <Modal withCloseButton={false}>
      Modal without header, press escape or click on overlay to close
    </Modal>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

export const header: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
