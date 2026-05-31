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
        title="Snap points"
        snapPoints={[0.4, 0.75, 1]}
        defaultActiveSnapPoint={0.4}
        withCloseButton={false}
        withHandle
      >
        <Text>Drag the drawer up and down to snap it to 40%, 75% or 100% of the screen height.</Text>
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
        title="Snap points"
        snapPoints={[0.4, 0.75, 1]}
        defaultActiveSnapPoint={0.4}
        withCloseButton={false}
        withHandle
      >
        <Text>
          Drag the drawer up and down to snap it to 40%, 75% or 100% of the screen height.
        </Text>
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

export const snapPoints: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
