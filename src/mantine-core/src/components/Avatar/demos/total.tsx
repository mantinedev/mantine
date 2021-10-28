import React from 'react';
import { Avatar } from '../Avatar';
import { Group } from '../../Group/Group';
import { AvatarsGroup } from '../AvatarsGroup/AvatarsGroup';

const code = `
<AvatarsGroup limit={2} total={7}>
  <Avatar src="avatar.png" component="a" href="https://github.com/rtivital" />
  <Avatar src="avatar.png" />
</AvatarsGroup>
`;

function Demo() {
  return (
    <Group position="center">
      <AvatarsGroup spacing="lg" limit={2} total={7}>
        <Avatar
          component="a"
          href="https://github.com/rtivital"
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          alt="it's me"
        />
        <Avatar
          radius="xl"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
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
