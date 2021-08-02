import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const code = `
import { Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function Demo() {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;

function Demo() {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Group position="center">
      <Badge color={matches ? 'teal' : 'red'} variant="filled">
        Breakpoint {matches ? 'matches' : 'does not match'}
      </Badge>
    </Group>
  );
}

export const useMediaQueryHook: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
