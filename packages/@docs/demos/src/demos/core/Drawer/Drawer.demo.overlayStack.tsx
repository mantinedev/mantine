import { Button, Drawer, Group, MantineThemeProvider, useDrawerStackContext } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Drawer, Group, useDrawerStackContext } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [deleteOpened, deleteHandlers] = useDisclosure(false);
  const [confirmOpened, confirmHandlers] = useDisclosure(false);
  const stack = useDrawerStackContext();

  return (
    <>
      <Drawer opened={deleteOpened} onClose={deleteHandlers.close} offset={5} radius="md" title="Delete this page?">
        Are you sure you want to delete this page? This action cannot be undone.
        <Group mt="lg" justify="flex-end">
          <Button onClick={deleteHandlers.close} variant="default">
            Cancel
          </Button>
          <Button onClick={confirmHandlers.open} color="red">
            Delete
          </Button>
        </Group>
      </Drawer>

      <Drawer opened={confirmOpened} onClose={confirmHandlers.close} offset={5} radius="md" title="Confirm action">
        Are you sure you want to perform this action? This action cannot be undone. If you are
        sure, press confirm button below.
        <Group mt="lg" justify="flex-end">
          <Button onClick={stack.closeAll} variant="default">
            Cancel
          </Button>
          <Button onClick={stack.closeAll} color="red">
            Confirm
          </Button>
        </Group>
      </Drawer>

      <Button variant="default" onClick={deleteHandlers.open}>
        Open drawer
      </Button>
    </>
  );
}
`;

function Demo() {
  const [deleteOpened, deleteHandlers] = useDisclosure(false);
  const [confirmOpened, confirmHandlers] = useDisclosure(false);
  const stack = useDrawerStackContext();

  return (
    <>
      <Drawer
        opened={deleteOpened}
        onClose={deleteHandlers.close}
        offset={5}
        radius="md"
        title="Delete this page?"
      >
        Are you sure you want to delete this page? This action cannot be undone.
        <Group mt="lg" justify="flex-end">
          <Button onClick={deleteHandlers.close} variant="default">
            Cancel
          </Button>
          <Button onClick={confirmHandlers.open} color="red">
            Delete
          </Button>
        </Group>
      </Drawer>

      <Drawer
        opened={confirmOpened}
        onClose={confirmHandlers.close}
        offset={5}
        radius="md"
        title="Confirm action"
      >
        Are you sure you want to perform this action? This action cannot be undone. If you are sure,
        press confirm button below.
        <Group mt="lg" justify="flex-end">
          <Button onClick={stack.closeAll} variant="default">
            Cancel
          </Button>
          <Button onClick={stack.closeAll} color="red">
            Confirm
          </Button>
        </Group>
      </Drawer>

      <Button variant="default" onClick={deleteHandlers.open}>
        Open drawer
      </Button>
    </>
  );
}

function Wrapper() {
  return (
    <MantineThemeProvider theme={{ overlayStack: true }}>
      <Demo />
    </MantineThemeProvider>
  );
}

export const overlayStack: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Wrapper,
};
