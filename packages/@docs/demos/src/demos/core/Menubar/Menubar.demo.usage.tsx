import { Menu, Menubar, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Menu, Menubar, Text } from '@mantine/core';

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu width={220}>
        <Menubar.Target>File</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘N</Text>}>New file</Menu.Item>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘⇧N</Text>}>New window</Menu.Item>
          <Menu.Sub>
            <Menu.Sub.Target>
              <Menu.Sub.Item>Open recent</Menu.Sub.Item>
            </Menu.Sub.Target>
            <Menu.Sub.Dropdown>
              <Menu.Item>project-alpha</Menu.Item>
              <Menu.Item>project-beta</Menu.Item>
              <Menu.Item>project-gamma</Menu.Item>
            </Menu.Sub.Dropdown>
          </Menu.Sub>
          <Menu.Divider />
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘S</Text>}>Save</Menu.Item>
          <Menu.Item>Save as…</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Edit</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘Z</Text>}>Undo</Menu.Item>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘⇧Z</Text>}>Redo</Menu.Item>
          <Menu.Divider />
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Help</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Documentation</Menu.Item>
          <Menu.Item>Keyboard shortcuts</Menu.Item>
          <Menu.Item>About</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}
`;

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu width={220}>
        <Menubar.Target>File</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘N
              </Text>
            }
          >
            New file
          </Menu.Item>
          <Menu.Item
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘⇧N
              </Text>
            }
          >
            New window
          </Menu.Item>
          <Menu.Sub>
            <Menu.Sub.Target>
              <Menu.Sub.Item>Open recent</Menu.Sub.Item>
            </Menu.Sub.Target>
            <Menu.Sub.Dropdown>
              <Menu.Item>project-alpha</Menu.Item>
              <Menu.Item>project-beta</Menu.Item>
              <Menu.Item>project-gamma</Menu.Item>
            </Menu.Sub.Dropdown>
          </Menu.Sub>
          <Menu.Divider />
          <Menu.Item
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘S
              </Text>
            }
          >
            Save
          </Menu.Item>
          <Menu.Item>Save as…</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Edit</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘Z
              </Text>
            }
          >
            Undo
          </Menu.Item>
          <Menu.Item
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘⇧Z
              </Text>
            }
          >
            Redo
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Help</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Documentation</Menu.Item>
          <Menu.Item>Keyboard shortcuts</Menu.Item>
          <Menu.Item>About</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
