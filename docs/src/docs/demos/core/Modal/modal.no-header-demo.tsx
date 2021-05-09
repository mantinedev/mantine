import React, { useState } from 'react';
import { Modal, Button, Group, Portal } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        hideCloseButton
      >
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}`;

export function ModalNoHeaderDemo() {
  const [opened, setOpened] = useState(false);

  return (
    <CodeDemo code={code} language="tsx">
      <Portal zIndex={10}>
        <Modal opened={opened} onClose={() => setOpened(false)} hideCloseButton>
          Modal without header, press escape or click on overlay to close
        </Modal>
      </Portal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </CodeDemo>
  );
}
