import React from 'react';
import { Avatar, Group, AvatarsGroup } from '@mantine/core';
import { avatars } from './_mockdata';

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
        <Avatar component="a" href="https://github.com/rtivital" src={avatars[0]} alt="it's me" />
        <Avatar radius="xl" src={avatars[1]} />
      </AvatarsGroup>
    </Group>
  );
}

export const total: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
