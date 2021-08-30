import React from 'react';
import { Avatar } from '../Avatar';
import { Group } from '../../Group/Group';

const code = `
<Avatar
  component="a"
  href="https://github.com/rtivital"
  target="_blank"
  src="avatar.png"
  alt="it's me"
/>
`;

function Demo() {
  return (
    <Group position="center">
      <Avatar
        component="a"
        href="https://github.com/rtivital"
        target="_blank"
        src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
        alt="it's me"
      />
    </Group>
  );
}

export const link: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
