import React, { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

const code = `
// (default) – overflow is handled by modal wrapper
<Modal overflow="outside" />

// overflow is handled by modal body
<Modal overflow="inside" />
`;

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
}

export const overflow: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
