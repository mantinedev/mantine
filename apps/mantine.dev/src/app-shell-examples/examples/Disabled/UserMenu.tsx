import { CaretDownIcon } from '@phosphor-icons/react';
import { Avatar, Group, Menu, Text, UnstyledButton } from '@mantine/core';

export function UserMenu() {
  return (
    <Menu width={200} position="bottom-end">
      <Menu.Target>
        <UnstyledButton aria-label="Sarah Johnson, account menu">
          <Group gap="xs">
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
              radius="xl"
              size="sm"
            />
            <Text size="sm" fw={500} visibleFrom="sm">
              Sarah Johnson
            </Text>
            <CaretDownIcon size={12} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Account settings</Menu.Item>
        <Menu.Divider />
        <Menu.Item color="red">Log out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
