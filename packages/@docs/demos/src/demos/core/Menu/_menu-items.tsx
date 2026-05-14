import {
  ArrowsLeftRightIcon,
  ChatCircleIcon,
  GearSixIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from '@phosphor-icons/react';
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
        <Menu.Item leftSection={<GearSixIcon size={14} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<ChatCircleIcon size={14} />}>Messages</Menu.Item>
        <Menu.Item leftSection={<ImageIcon size={14} />}>Gallery</Menu.Item>
        {widthRightSection && (
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
        )}
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<ArrowsLeftRightIcon size={14} />}>Transfer my data</Menu.Item>
        <Menu.Item color="red" leftSection={<TrashIcon size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </>
  );
}
