import React from 'react';
import { Group, Badge } from '@mantine/core';

const code = `
<Badge>Default light badge</Badge>
<Badge variant="dot">Dot badge</Badge>
<Badge variant="outline">Outline badge</Badge>
<Badge variant="filled">Filled badge</Badge>
`;

function Demo() {
  return (
    <Group position="center">
      <Badge>Default light badge</Badge>
      <Badge variant="dot">Dot badge</Badge>
      <Badge variant="outline">Outline badge</Badge>
      <Badge variant="filled">Filled badge</Badge>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
