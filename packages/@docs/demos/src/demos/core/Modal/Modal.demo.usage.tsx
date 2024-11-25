import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
