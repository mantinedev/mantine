import { Button, Drawer, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Full screen on small screens"
        fullScreenBelow="sm"
      >
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open drawer
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
        title="Full screen on small screens"
        fullScreenBelow="sm"
      >
        <Text>
          The drawer takes the entire viewport width when the viewport is narrower than the sm
          breakpoint. Resize the browser window to see the change.
        </Text>
      </Drawer>

      <Button variant="default" onClick={open}>
        Open drawer
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
