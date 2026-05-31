import { Button, Drawer, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Terms of service</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>

          <Drawer.Body>
            {Array.from({ length: 20 }).map((_, index) => (
              <Text key={index} mb="md">
                Scroll the body to see that the header stays pinned to the top and the footer
                stays pinned to the bottom.
              </Text>
            ))}
          </Drawer.Body>

          <Drawer.Footer>
            <Group justify="flex-end" w="100%">
              <Button variant="default" onClick={close}>
                Decline
              </Button>
              <Button onClick={close}>Accept</Button>
            </Group>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Terms of service</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>

          <Drawer.Body>
            {Array.from({ length: 20 }).map((_, index) => (
              <Text key={index} mb="md">
                Scroll the body to see that the header stays pinned to the top and the footer stays
                pinned to the bottom.
              </Text>
            ))}
          </Drawer.Body>

          <Drawer.Footer>
            <Group justify="flex-end" w="100%">
              <Button variant="default" onClick={close}>
                Decline
              </Button>
              <Button onClick={close}>Accept</Button>
            </Group>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

export const stickySections: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
