import { Box, Button, Group, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, Text, Box } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Terms of service</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>

          <Modal.Body>
            <Box mih={220}>
              <Text>
                The footer stays pinned to the bottom of the modal even when the body content
                does not fill the entire available space.
              </Text>
            </Box>
          </Modal.Body>

          <Modal.Footer>
            <Group justify="flex-end" w="100%">
              <Button variant="default" onClick={close}>
                Decline
              </Button>
              <Button onClick={close}>Accept</Button>
            </Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>

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
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Terms of service</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>

          <Modal.Body>
            <Box mih={220}>
              <Text>
                The footer stays pinned to the bottom of the modal even when the body content does
                not fill the entire available space.
              </Text>
            </Box>
          </Modal.Body>

          <Modal.Footer>
            <Group justify="flex-end" w="100%">
              <Button variant="default" onClick={close}>
                Decline
              </Button>
              <Button onClick={close}>Accept</Button>
            </Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}

export const footer: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
