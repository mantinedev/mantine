import React, { useState } from 'react';
import { Modal, Button, Group, Portal } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

function Demo() {
  const [insideOpened, setInsideOpened] = useState(false);
  const [outsideOpened, setOutsideOpened] = useState(false);
  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>React is not a framework</p>);

  return (
    <>
      <Modal
        opened={outsideOpened}
        onClose={() => setOutsideOpened(false)}
        title="Please consider this"
        overflow="outside"
      >
        {content}
      </Modal>

      <Modal
        opened={insideOpened}
        onClose={() => setInsideOpened(false)}
        title="Please consider this"
        overflow="inside"
      >
        {content}
      </Modal>

      <Group position="center">
        <Button onClick={() => setOutsideOpened(true)} color="pink">
          Outside overflow
        </Button>
        <Button onClick={() => setInsideOpened(true)} color="cyan">
          Inside overflow
        </Button>
      </Group>
    </>
  );
}`;

export function ModalOverflowDemo() {
  const [insideOpened, setInsideOpened] = useState(false);
  const [outsideOpened, setOutsideOpened] = useState(false);
  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>React is not a framework</p>);

  return (
    <CodeDemo code={code} language="tsx">
      <Portal zIndex={10}>
        <Modal
          opened={outsideOpened}
          onClose={() => setOutsideOpened(false)}
          title="Please consider this"
          overflow="outside"
        >
          {content}
        </Modal>
      </Portal>

      <Portal zIndex={10}>
        <Modal
          opened={insideOpened}
          onClose={() => setInsideOpened(false)}
          title="Please consider this"
          overflow="inside"
        >
          {content}
        </Modal>
      </Portal>

      <Group position="center">
        <Button onClick={() => setOutsideOpened(true)} color="pink">
          Outside overflow
        </Button>
        <Button onClick={() => setInsideOpened(true)} color="cyan">
          Inside overflow
        </Button>
      </Group>
    </CodeDemo>
  );
}
