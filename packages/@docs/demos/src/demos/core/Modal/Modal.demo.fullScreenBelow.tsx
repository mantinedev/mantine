import { Button, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Full screen on small screens"
        fullScreenBelow="sm"
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
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
      <Modal
        opened={opened}
        onClose={close}
        title="Full screen on small screens"
        fullScreenBelow="sm"
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Text>
          The modal takes the entire screen when the viewport is narrower than the sm breakpoint.
          Resize the browser window to see the change.
        </Text>
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}

export const fullScreenBelow: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
