import React from 'react';
import { Avatar } from '../Avatar';
import { Group } from '../../Group/Group';
import { AvatarsGroup } from '../AvatarsGroup/AvatarsGroup';

const code = `
<AvatarsGroup limit={3} total={50}>
  <Avatar src="avatar.png" component="a" href="https://github.com/rtivital" />
  <Avatar src="avatar.png" />
  <Avatar src="avatar.png" />
  {/* ...other items */}
</AvatarsGroup>
`;

function Demo() {
  return (
    <Group position="center">
      <AvatarsGroup spacing="lg" limit={2} total={50}>
        <Avatar
          component="a"
          href="https://github.com/rtivital"
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          alt="it's me"
        />
        <Avatar
          color="blue"
          radius="xl"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
        <Avatar
          radius="xl"
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
        />
        <Avatar
          color="cyan"
          radius="xl"
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
        />
      </AvatarsGroup>
    </Group>
  );
}

export const total: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
