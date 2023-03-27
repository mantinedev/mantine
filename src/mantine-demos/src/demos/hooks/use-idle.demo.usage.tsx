import React from 'react';
import { Group, Badge } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useIdle } from '@mantine/hooks';

const code = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000);

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
