import { Button, Center, Drawer, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Center, Text } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="bottom"
        title="Disable swipe on specific elements"
        withCloseButton={false}
        withHandle
      >
        <Text>Swipe the drawer down to close it.</Text>

        <Center data-drawer-no-swipe h={100} mt="md" bg="var(--mantine-color-gray-light)">
          <Text>Swipe is disabled in this area</Text>
        </Center>
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
        title="Disable swipe on specific elements"
        withCloseButton={false}
        withHandle
      >
        <Text>Swipe the drawer down to close it.</Text>

        <Center data-drawer-no-swipe h={100} mt="md" bg="var(--mantine-color-gray-light)">
          <Text>Swipe is disabled in this area</Text>
        </Center>
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

export const noSwipe: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
