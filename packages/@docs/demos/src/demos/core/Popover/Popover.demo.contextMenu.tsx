import { Avatar, Button, Group, Paper, Popover, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Avatar, Button, Group, Paper, Popover, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={260} shadow="md" position="bottom-start" offset={0}>
      <Popover.ContextMenu>
        <Paper withBorder p="xl" radius="md" style={{ userSelect: 'none', textAlign: 'center' }}>
          <Text fw={500}>Right-click anywhere inside this area</Text>
          <Text c="dimmed" size="sm" mt={4}>
            A popover will open at the cursor position
          </Text>
        </Paper>
      </Popover.ContextMenu>

      <Popover.Dropdown>
        <Stack gap="xs">
          <Group gap="sm" wrap="nowrap">
            <Avatar radius="xl" color="blue">JD</Avatar>
            <div>
              <Text size="sm" fw={500}>Jane Doe</Text>
              <Text size="xs" c="dimmed">jane@example.com</Text>
            </div>
          </Group>
          <Group grow gap="xs">
            <Button size="xs" variant="default">Message</Button>
            <Button size="xs">Follow</Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Demo() {
  return (
    <Popover width={260} shadow="md" position="bottom-start" offset={0}>
      <Popover.ContextMenu>
        <Paper withBorder p="xl" radius="md" style={{ userSelect: 'none', textAlign: 'center' }}>
          <Text fw={500}>Right-click anywhere inside this area</Text>
          <Text c="dimmed" size="sm" mt={4}>
            A popover will open at the cursor position
          </Text>
        </Paper>
      </Popover.ContextMenu>

      <Popover.Dropdown>
        <Stack gap="xs">
          <Group gap="sm" wrap="nowrap">
            <Avatar radius="xl" color="blue">
              JD
            </Avatar>
            <div>
              <Text size="sm" fw={500}>
                Jane Doe
              </Text>
              <Text size="xs" c="dimmed">
                jane@example.com
              </Text>
            </div>
          </Group>
          <Group grow gap="xs">
            <Button size="xs" variant="default">
              Message
            </Button>
            <Button size="xs">Follow</Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}

export const contextMenu: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
