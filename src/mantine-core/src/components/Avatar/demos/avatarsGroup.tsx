import React from 'react';
import { avatars } from '@mantine/mockdata';
import { Avatar } from '../Avatar';
import { Group } from '../../Group/Group';
import { AvatarsGroup } from '../AvatarsGroup/AvatarsGroup';

const code = `
<AvatarsGroup limit={3}>
  <Avatar src="avatar.png" component="a" href="https://github.com/rtivital" />
  <Avatar src="avatar.png" />
  <Avatar src="avatar.png" />
  {/* ...other items */}
</AvatarsGroup>
`;

function Demo() {
  return (
    <Group position="center">
      <AvatarsGroup spacing="lg" limit={3}>
        <Avatar component="a" href="https://github.com/rtivital" src={avatars[0]} alt="it's me" />
        <Avatar color="blue" radius="xl" src={avatars[1]} />
        <Avatar radius="xl" src={avatars[2]} />
        <Avatar color="cyan" radius="xl" src={avatars[2]} />
        <Avatar color="cyan" radius="xl" src={avatars[2]} />
      </AvatarsGroup>
    </Group>
  );
}

export const avatarsGroup: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
