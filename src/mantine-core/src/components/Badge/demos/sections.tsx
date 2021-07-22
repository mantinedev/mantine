import React from 'react';
import { Cross1Icon } from '@modulz/radix-icons';
import { Badge } from '../Badge';
import { Group } from '../../Group/Group';
import { ActionIcon } from '../../ActionIcon/ActionIcon';
import { Avatar } from '../../Avatar/Avatar';

const code = `
import React from 'react';
import { ActionIcon, Avatar, Badge, Group } from '@mantine/core';

function Demo() {
  const avatar = (
    <Avatar
      alt="Avatar for badge"
      size={24}
      style={{ marginRight: 5 }}
      src="image-link"
    />
  );

  const removeButton = (
    <ActionIcon size="xs" color="blue" radius="xl" variant="transparent">
      <Cross1Icon style={{ width: 10, height: 10 }} />
    </ActionIcon>
  );

  return (
    <Group>
      <Badge style={{ paddingLeft: 0 }} size="lg" color="teal" leftSection={avatar}>
        Badge with Avatar
      </Badge>

      <Badge variant="outline" style={{ paddingRight: 3 }} rightSection={removeButton}>
        Badge with right section
      </Badge>

      <Badge variant="outline" style={{ paddingLeft: 3 }} leftSection={removeButton}>
        Badge with left section
      </Badge>
    </Group>
  );
}
`;

const avatar = (
  <Avatar
    alt="Avatar for badge"
    size={24}
    style={{ marginRight: 5 }}
    src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
  />
);

const removeButton = (
  <ActionIcon size="xs" color="blue" radius="xl" variant="transparent">
    <Cross1Icon style={{ width: 10, height: 10 }} />
  </ActionIcon>
);

function Demo() {
  return (
    <Group>
      <Badge style={{ paddingLeft: 0 }} size="lg" color="teal" leftSection={avatar}>
        Badge with Avatar
      </Badge>
      <Badge variant="outline" style={{ paddingRight: 3 }} rightSection={removeButton}>
        Badge with right section
      </Badge>
      <Badge variant="outline" style={{ paddingLeft: 3 }} leftSection={removeButton}>
        Badge with left section
      </Badge>
    </Group>
  );
}

export const sections: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
