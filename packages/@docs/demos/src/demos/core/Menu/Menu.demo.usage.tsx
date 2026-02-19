import { Menu } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu, Button, Text } from '@mantine/core';
import { GearSixIcon, MagnifyingGlassIcon, ImageIcon, ChatCircleIcon, TrashIcon, IconArrowsLeftRight } from '@phosphor-icons/react';

function Demo() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<GearSixIcon size={14} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<ChatCircleIcon size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<ImageIcon size={14} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<MagnifyingGlassIcon size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight size={14} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<TrashIcon size={14} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu shadow="md" width={200} withinPortal>
      <DemoMenuItems />
    </Menu>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
