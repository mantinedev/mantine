import React from 'react';
import { Avatar, Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { avatars } from './_mockdata';

const code = `
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group spacing="sm">
      <Avatar src="image.png" radius="xl" />
      <Avatar src="image.png" radius="xl" />
      <Avatar src="image.png" radius="xl" />
      <Avatar radius="xl">+5</Avatar>
    </Avatar.Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Avatar.Group spacing="sm">
        <Avatar src={avatars[0]} radius="xl" />
        <Avatar src={avatars[1]} radius="xl" />
        <Avatar src={avatars[2]} radius="xl" />
        <Avatar radius="xl">+5</Avatar>
      </Avatar.Group>
    </Group>
  );
}

export const group: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
