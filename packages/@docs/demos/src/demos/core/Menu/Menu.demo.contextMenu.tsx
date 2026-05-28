import { Menu, Paper, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Menu, Paper, Text } from '@mantine/core';

function Demo() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.ContextMenu>
        <Paper withBorder p="xl" radius="md" style={{ userSelect: 'none', textAlign: 'center' }}>
          <Text fw={500}>Right-click anywhere inside this area</Text>
          <Text c="dimmed" size="sm" mt={4}>
            The menu will open at the cursor position
          </Text>
        </Paper>
      </Menu.ContextMenu>

      <Menu.Dropdown>
        <Menu.Label>Actions</Menu.Label>
        <Menu.Item>Open</Menu.Item>
        <Menu.Item>Rename</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Divider />
        <Menu.Item color="red">Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.ContextMenu>
        <Paper withBorder p="xl" radius="md" style={{ userSelect: 'none', textAlign: 'center' }}>
          <Text fw={500}>Right-click anywhere inside this area</Text>
          <Text c="dimmed" size="sm" mt={4}>
            The menu will open at the cursor position
          </Text>
        </Paper>
      </Menu.ContextMenu>

      <Menu.Dropdown>
        <Menu.Label>Actions</Menu.Label>
        <Menu.Item>Open</Menu.Item>
        <Menu.Item>Rename</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Divider />
        <Menu.Item color="red">Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export const contextMenu: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
