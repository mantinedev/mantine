import React from 'react';
import { Group, Badge } from '@mantine/core';

const code = `
<Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Badge>
<Badge variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Badge>
<Badge variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Badge>
<Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Badge>
<Badge variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>Grape pink</Badge>
`;

function Demo() {
  return (
    <Group position="center">
      <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        Indigo cyan
      </Badge>
      <Badge variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        Lime green
      </Badge>
      <Badge variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
        Teal blue
      </Badge>
      <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        Orange red
      </Badge>
      <Badge variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>
        Grape pink
      </Badge>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
