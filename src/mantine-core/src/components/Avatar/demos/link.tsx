import React from 'react';
import { avatars } from '@mantine/mockdata';
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
        src={avatars[0]}
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
