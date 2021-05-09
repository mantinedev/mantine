import React, { useState } from 'react';
import { Modal, Button, Group, Portal } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Please consider this"
        transition="rotate-left"
      >
        rotate-left transition
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

      <Group position="center">
        <Button onClick={() => setSlowTransitionOpened(true)} color="pink">
          rotate-left transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} color="cyan">
          fade transition
        </Button>
      </Group>
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
          transition="rotate-left"
        >
          rotate-left transition
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

      <Group position="center">
        <Button onClick={() => setSlowTransitionOpened(true)} color="pink">
          rotate-left transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} color="cyan">
          fade transition
        </Button>
      </Group>
    </CodeDemo>
  );
}
