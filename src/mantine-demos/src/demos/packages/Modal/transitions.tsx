import React, { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

const code = `
<Modal
  transition="fade"
  transitionDuration={600}
  transitionTimingFunction="ease"
/>
`;

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
          Rotate left transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} color="cyan">
          Fade transition
        </Button>
      </Group>
    </>
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
