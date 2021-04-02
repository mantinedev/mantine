import React, { useState } from 'react';
import { Modal, Button, ElementsGroup, Portal } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Modal, Button, ElementsGroup } from '@mantine/core';

export function ModalDemo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  
  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Please consider this"
        transitionDuration={0}
      >
        No transition at all
      </Modal>
      
      <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        title="Please consider this"
        transitionDuration={600}
      >
        600ms second transition
      </Modal>

      <ElementsGroup position="center">
        <Button onClick={() => setSlowTransitionOpened(true)} color="pink">
          600ms transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} color="cyan">
          No transition
        </Button>
      </ElementsGroup>
    </>
  );
}`;

export function ModalTransitionsDemo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <CodeDemo code={code} language="tsx">
      <Portal zIndex={10}>
        <Modal
          opened={slowTransitionOpened}
          onClose={() => setSlowTransitionOpened(false)}
          title="Please consider this"
          transitionDuration={600}
        >
          600ms second transition
        </Modal>
      </Portal>

      <Portal zIndex={10}>
        <Modal
          opened={noTransitionOpened}
          onClose={() => setNoTransitionOpened(false)}
          title="Please consider this"
          transitionDuration={0}
        >
          No transition at all
        </Modal>
      </Portal>

      <ElementsGroup position="center">
        <Button onClick={() => setSlowTransitionOpened(true)} color="pink">
          600ms transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} color="cyan">
          No transition
        </Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
