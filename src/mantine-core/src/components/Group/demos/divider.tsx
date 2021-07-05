import React from 'react';
import { Group } from '../Group';
import { Badge } from '../../Badge/Badge';
import { Divider } from '../../Divider/Divider';

const code = `
<Group position="center">
  <Badge>Badge</Badge>
  <Divider orientation="vertical" margins="sm" />
  <Badge>Badge</Badge>
  <Divider orientation="vertical" margins="sm" />
  <Badge>Badge</Badge>
</Group>
`;

function Demo() {
  return (
    <Group position="center">
      <Badge>Badge</Badge>
      <Divider orientation="vertical" margins="sm" />
      <Badge>Badge</Badge>
      <Divider orientation="vertical" margins="sm" />
      <Badge>Badge</Badge>
    </Group>
  );
}

export const divider: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
