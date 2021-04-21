import React, { useState } from 'react';
import { Modal, Button, ElementsGroup, Portal } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Modal, Button, ElementsGroup } from '@mantine/core';

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

      <ElementsGroup position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </ElementsGroup>
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

      <ElementsGroup position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
