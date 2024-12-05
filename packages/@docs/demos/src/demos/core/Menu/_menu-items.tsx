import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';
import { Button, Menu, Text } from '@mantine/core';

export function DemoMenuItems({ widthRightSection = true, withTarget = true }) {
  return (
    <>
      {withTarget && (
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>
      )}

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>Gallery</Menu.Item>
        {widthRightSection && (
          <Menu.Item
            leftSection={<IconSearch size={14} />}
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>
        )}
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
        <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </>
  );
}
