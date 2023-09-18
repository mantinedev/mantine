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
  const iconProps = { style: { width: rem(14), height: rem(14) } };

  return (
    <>
      {withTarget && (
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>
      )}

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings {...iconProps} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle {...iconProps} />}>Messages</Menu.Item>
        <Menu.Item leftSection={<IconPhoto {...iconProps} />}>Gallery</Menu.Item>
        {widthRightSection && (
          <Menu.Item
            leftSection={<IconSearch {...iconProps} />}
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
        <Menu.Item leftSection={<IconArrowsLeftRight {...iconProps} />}>Transfer my data</Menu.Item>
        <Menu.Item color="red" leftSection={<IconTrash {...iconProps} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </>
  );
}
