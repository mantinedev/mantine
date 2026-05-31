import { Button, Drawer, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Text } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="bottom"
        title="Swipe to dismiss"
        withCloseButton={false}
        withHandle
      >
        <Text>Drag the handle or swipe the drawer down to close it.</Text>
      </Drawer>

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
      <Drawer
        opened={opened}
        onClose={close}
        position="bottom"
        title="Swipe to dismiss"
        withCloseButton={false}
        withHandle
      >
        <Text>Drag the handle or swipe the drawer down to close it.</Text>
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

export const swipe: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
