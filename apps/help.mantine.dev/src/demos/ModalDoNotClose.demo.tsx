import { useState } from 'react';
import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Button, Modal } from '@mantine/core';

function operation() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}

function Demo() {
  const [opened, { open, close }] = useDisclosure();
  const [loading, setLoading] = useState(false);

  const performOperation = () => {
    setLoading(true);
    operation().then(() => setLoading(false));
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={loading ? () => {} : close}
        withCloseButton={!loading}
        title="Modal with async operation"
      >
        <Button loading={loading} onClick={performOperation} fullWidth>
          Perform heavy operation
        </Button>
      </Modal>
      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;

function operation() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}

function Demo() {
  const [opened, { open, close }] = useDisclosure();
  const [loading, setLoading] = useState(false);

  const performOperation = () => {
    setLoading(true);
    operation().then(() => setLoading(false));
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={loading ? () => {} : close}
        withCloseButton={!loading}
        title="Modal with async operation"
      >
        <Button loading={loading} onClick={performOperation} fullWidth>
          Perform heavy operation
        </Button>
      </Modal>
      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export const ModalDoNotClose: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
