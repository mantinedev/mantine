import React from 'react';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import { Menu, Text, Button, rem } from '@mantine/core';

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
        <Menu.Item icon={<IconSettings size={rem(14)} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={rem(14)} />}>Messages</Menu.Item>
        <Menu.Item icon={<IconPhoto size={rem(14)} />}>Gallery</Menu.Item>
        {widthRightSection && (
          <Menu.Item
            icon={<IconSearch size={rem(14)} />}
            rightSection={
              <Text size="xs" color="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>
        )}
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconArrowsLeftRight size={rem(14)} />}>Transfer my data</Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={rem(14)} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </>
  );
}
