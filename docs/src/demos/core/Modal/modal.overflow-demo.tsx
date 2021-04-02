import React, { useState } from 'react';
import { Modal, Button, ElementsGroup, Portal } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Modal, Button, ElementsGroup } from '@mantine/core';

export function ModalDemo() {
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

      <ElementsGroup position="center">
        <Button onClick={() => setOutsideOpened(true)} color="pink">
          Outside overflow
        </Button>
        <Button onClick={() => setInsideOpened(true)} color="cyan">
          Inside overflow
        </Button>
      </ElementsGroup>
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

      <ElementsGroup position="center">
        <Button onClick={() => setOutsideOpened(true)} color="pink">
          Outside overflow
        </Button>
        <Button onClick={() => setInsideOpened(true)} color="cyan">
          Inside overflow
        </Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
