import React, { useState } from 'react';
import { Modal, Button, ElementsGroup, Portal } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

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
        transition="rotate-up"
      >
        rotate-up transition
      </Modal>

      <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        title="Please consider this"
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
      >
        fade transition 600ms ease transition 
      </Modal>

      <ElementsGroup position="center">
        <Button onClick={() => setSlowTransitionOpened(true)} color="pink">
          rotate-up transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} color="cyan">
          fade transition
        </Button>
      </ElementsGroup>
    </>
  );
}`;

export function ModalCustomTransitionsDemo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <CodeDemo code={code} language="tsx">
      <Portal zIndex={10}>
        <Modal
          opened={slowTransitionOpened}
          onClose={() => setSlowTransitionOpened(false)}
          title="Please consider this"
          transition="rotate-up"
        >
          rotate-up transition
        </Modal>
      </Portal>

      <Portal zIndex={10}>
        <Modal
          opened={noTransitionOpened}
          onClose={() => setNoTransitionOpened(false)}
          title="Please consider this"
          transition="fade"
          transitionDuration={600}
          transitionTimingFunction="ease"
        >
          fade transition
        </Modal>
      </Portal>

      <ElementsGroup position="center">
        <Button onClick={() => setSlowTransitionOpened(true)} color="pink">
          rotate-up transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} color="cyan">
          fade transition
        </Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
