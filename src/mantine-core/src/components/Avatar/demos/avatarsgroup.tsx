import React from 'react';
import { StarIcon } from '@modulz/radix-icons';
import { Avatar } from '../Avatar';
import { Group } from '../../Group/Group';
import { AvatarsGroup } from '../AvatarsGroup/AvatarsGroup';

const code = `
import { AvatarsGroup } from '@mantine/core';

function Demo() {
  return (
    <AvatarsGroup size="md" radius="xl" spacing="sm">
      <Avatar radius="xl" />
      <Avatar color="cyan" radius="xl">
        MK
      </Avatar>
      <Avatar color="blue" radius="xl">
        <StarIcon style={{ width: 24, height: 24 }} />
      </Avatar>
    </AvatarsGroup>
  );
}`;

function Demo() {
  return (
    <Group position="center">
      <AvatarsGroup size="md" radius="xl" spacing="sm" limit={3}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          alt="it's me"
        />
        <Avatar color="blue" radius="xl">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
        <Avatar radius="xl" />
        <Avatar color="cyan" radius="xl">
          MK
        </Avatar>
      </AvatarsGroup>
    </Group>
  );
}

export const avatarsgroup: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
