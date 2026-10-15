import { Button, Code, Group, Menu, Menubar, Stack, Text, useMenubar } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Code, Group, Menu, Menubar, Stack, Text, useMenubar } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';

function Demo() {
  const controller = useMenubar();

  // Alt + F opens the File menu and moves focus into it,
  // which the openIndex prop alone cannot do
  useWindowEvent('keydown', (event) => {
    if (event.altKey && event.code === 'KeyF') {
      event.preventDefault();
      controller.openMenu(0);
      controller.focusMenuItem(0, 'first');
    }
  });

  return (
    <Stack>
      <Menubar aria-label="Application menu" controller={controller}>
        <Menubar.Menu width={220}>
          <Menubar.Target>File</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>New file</Menu.Item>
            <Menu.Item>Save</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>

        <Menubar.Menu width={220}>
          <Menubar.Target>Edit</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>Undo</Menu.Item>
            <Menu.Item>Redo</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>

        <Menubar.Menu width={220}>
          <Menubar.Target>View</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>Zoom in</Menu.Item>
            <Menu.Item>Zoom out</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>
      </Menubar>

      <Group>
        <Button variant="default" onClick={() => controller.focusPreviousMenu()}>
          Focus previous
        </Button>
        <Button variant="default" onClick={() => controller.focusNextMenu()}>
          Focus next
        </Button>
        <Button
          variant="default"
          onClick={() => {
            controller.openMenu(controller.getActiveIndex());
            controller.focusMenuItem(controller.getActiveIndex(), 'first');
          }}
        >
          Open focused menu
        </Button>
        <Button variant="default" onClick={controller.closeMenu}>
          Close
        </Button>
      </Group>

      <Text size="sm">
        Opened: <Code>{String(controller.getOpenIndex())}</Code>, focused:{' '}
        <Code>{controller.getActiveIndex()}</Code>, menus: <Code>{controller.getMenuCount()}</Code>. Press{' '}
        <Code>Alt + F</Code> to open the File menu from anywhere.
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  const controller = useMenubar();

  useWindowEvent('keydown', (event) => {
    if (event.altKey && event.code === 'KeyF') {
      event.preventDefault();
      controller.openMenu(0);
      controller.focusMenuItem(0, 'first');
    }
  });

  return (
    <Stack>
      <Menubar aria-label="Application menu" controller={controller}>
        <Menubar.Menu width={220}>
          <Menubar.Target>File</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>New file</Menu.Item>
            <Menu.Item>Save</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>

        <Menubar.Menu width={220}>
          <Menubar.Target>Edit</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>Undo</Menu.Item>
            <Menu.Item>Redo</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>

        <Menubar.Menu width={220}>
          <Menubar.Target>View</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>Zoom in</Menu.Item>
            <Menu.Item>Zoom out</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>
      </Menubar>

      <Group>
        <Button variant="default" onClick={() => controller.focusPreviousMenu()}>
          Focus previous
        </Button>
        <Button variant="default" onClick={() => controller.focusNextMenu()}>
          Focus next
        </Button>
        <Button
          variant="default"
          onClick={() => {
            controller.openMenu(controller.getActiveIndex());
            controller.focusMenuItem(controller.getActiveIndex(), 'first');
          }}
        >
          Open focused menu
        </Button>
        <Button variant="default" onClick={controller.closeMenu}>
          Close
        </Button>
      </Group>

      <Text size="sm">
        Opened: <Code>{String(controller.getOpenIndex())}</Code>, focused:{' '}
        <Code>{controller.getActiveIndex()}</Code>, menus: <Code>{controller.getMenuCount()}</Code>.
        Press <Code>Alt + F</Code> to open the File menu from anywhere.
      </Text>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
