import { Button, Code, Group, Menu, Menubar, Stack, Text, useMenubar } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Code, Group, Menu, Menubar, Stack, Text, useMenubar } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';

function Demo() {
  const menubar = useMenubar();

  // Alt + F opens the File menu and moves focus into it,
  // which the openIndex prop alone cannot do
  useWindowEvent('keydown', (event) => {
    if (event.altKey && event.code === 'KeyF') {
      event.preventDefault();
      menubar.openMenu(0);
      menubar.focusMenuItem(0, 'first');
    }
  });

  return (
    <Stack>
      <Menubar controller={menubar}>
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
        <Button variant="default" onClick={() => menubar.focusPreviousMenu()}>
          Focus previous
        </Button>
        <Button variant="default" onClick={() => menubar.focusNextMenu()}>
          Focus next
        </Button>
        <Button
          variant="default"
          onClick={() => {
            menubar.openMenu(menubar.activeIndex);
            menubar.focusMenuItem(menubar.activeIndex, 'first');
          }}
        >
          Open focused menu
        </Button>
        <Button variant="default" onClick={menubar.closeMenu}>
          Close
        </Button>
      </Group>

      <Text size="sm">
        Opened: <Code>{String(menubar.openIndex)}</Code>, focused:{' '}
        <Code>{menubar.activeIndex}</Code>, menus: <Code>{menubar.getMenuCount()}</Code>. Press{' '}
        <Code>Alt + F</Code> to open the File menu from anywhere.
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  const menubar = useMenubar();

  useWindowEvent('keydown', (event) => {
    if (event.altKey && event.code === 'KeyF') {
      event.preventDefault();
      menubar.openMenu(0);
      menubar.focusMenuItem(0, 'first');
    }
  });

  return (
    <Stack>
      <Menubar controller={menubar}>
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
        <Button variant="default" onClick={() => menubar.focusPreviousMenu()}>
          Focus previous
        </Button>
        <Button variant="default" onClick={() => menubar.focusNextMenu()}>
          Focus next
        </Button>
        <Button
          variant="default"
          onClick={() => {
            menubar.openMenu(menubar.activeIndex);
            menubar.focusMenuItem(menubar.activeIndex, 'first');
          }}
        >
          Open focused menu
        </Button>
        <Button variant="default" onClick={menubar.closeMenu}>
          Close
        </Button>
      </Group>

      <Text size="sm">
        Opened: <Code>{String(menubar.openIndex)}</Code>, focused:{' '}
        <Code>{menubar.activeIndex}</Code>, menus: <Code>{menubar.getMenuCount()}</Code>. Press{' '}
        <Code>Alt + F</Code> to open the File menu from anywhere.
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
