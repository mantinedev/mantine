import { IconBell, IconLogout, IconSearch, IconSettings, IconUser } from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Burger,
  Group,
  Indicator,
  Kbd,
  Menu,
  Text,
  TextInput,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';

interface AppHeaderProps {
  navbarOpened: boolean;
  onNavbarToggle: () => void;
}

export function AppHeader({ navbarOpened, onNavbarToggle }: AppHeaderProps) {
  return (
    <Group h="100%" px="md" justify="space-between" wrap="nowrap">
      <Group gap="sm" wrap="nowrap">
        <Burger
          opened={navbarOpened}
          onClick={onNavbarToggle}
          hiddenFrom="sm"
          size="sm"
          aria-label="Toggle navigation"
        />
        <ThemeIcon size="md" radius="md">
          <Text fw={700} size="sm" c="inherit">
            T
          </Text>
        </ThemeIcon>
        <Text fw={700}>Trackline</Text>
      </Group>

      <Group gap="sm" wrap="nowrap">
        <TextInput
          placeholder="Search tasks"
          aria-label="Search tasks"
          leftSection={<IconSearch size={16} />}
          rightSection={<Kbd size="xs">/</Kbd>}
          w={260}
          visibleFrom="md"
        />
        <Indicator size={8} offset={6} processing>
          <ActionIcon variant="default" size="input-sm" aria-label="Notifications">
            <IconBell size={18} />
          </ActionIcon>
        </Indicator>
        <Menu position="bottom-end" width={200}>
          <Menu.Target>
            <UnstyledButton aria-label="Account menu">
              <Avatar name="Ines Duarte" color="initials" />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Ines Duarte</Menu.Label>
            <Menu.Item leftSection={<IconUser size={16} />}>Profile</Menu.Item>
            <Menu.Item leftSection={<IconSettings size={16} />}>Settings</Menu.Item>
            <Menu.Divider />
            <Menu.Item color="red" leftSection={<IconLogout size={16} />}>
              Log out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  );
}
