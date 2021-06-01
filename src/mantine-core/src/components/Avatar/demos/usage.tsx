import React from 'react';
import { StarIcon } from '@modulz/radix-icons';
import { Avatar } from '../Avatar';
import { Group } from '../../Group/Group';

const code = `
// With image
<Avatar src="avatar.png" alt="it's me" />

// Default placeholder
<Avatar radius="xl" />

// Letters with xl radius
<Avatar color="cyan" radius="xl">MK</Avatar>

// Custom placeholder icon
<Avatar color="blue" radius="sm">
  <StarIcon style={{ width: 24, height: 24 }} />
</Avatar>
`;

function Demo() {
  return (
    <Group position="center">
      <Avatar
        src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
        alt="it's me"
      />
      <Avatar radius="xl" />
      <Avatar color="cyan" radius="xl">
        MK
      </Avatar>
      <Avatar color="blue" radius="xl">
        <StarIcon style={{ width: 24, height: 24 }} />
      </Avatar>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
