import React from 'react';
import { Menu, Group, Text, Avatar, Divider, useMantineTheme } from '@mantine/core';
import {
  Logout,
  Heart,
  Star,
  Message,
  Settings,
  PlayerPause,
  Trash,
  SwitchHorizontal,
  ChevronRight,
} from 'tabler-icons-react';

export function UserMenu() {
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Menu withArrow size={300} placement="center" transition="pop">
        <Menu.Item rightSection={<ChevronRight size={14} />}>
          <Group>
            <Avatar
              radius="xl"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            />

            <div>
              <Text weight={500}>Nancy Eggshacker</Text>
              <Text size="xs" color="dimmed">
                neggshaker@mantine.dev
              </Text>
            </div>
          </Group>
        </Menu.Item>

        <Divider />

        <Menu.Item icon={<Heart size={14} color={theme.colors.red[6]} />}>Liked posts</Menu.Item>
        <Menu.Item icon={<Star size={14} color={theme.colors.yellow[6]} />}>Saved posts</Menu.Item>
        <Menu.Item icon={<Message size={14} color={theme.colors.blue[6]} />}>
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item icon={<Settings size={14} />}>Account settings</Menu.Item>
        <Menu.Item icon={<SwitchHorizontal size={14} />}>Change account</Menu.Item>
        <Menu.Item icon={<Logout size={14} />}>Logout</Menu.Item>

        <Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<PlayerPause size={14} />}>Pause subscription</Menu.Item>
        <Menu.Item color="red" icon={<Trash size={14} />}>
          Delete account
        </Menu.Item>
      </Menu>
    </Group>
  );
}
