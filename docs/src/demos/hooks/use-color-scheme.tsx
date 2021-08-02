import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

const code = `
import { Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

export function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Group position="center">
      <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
        Your system color scheme is {colorScheme}
      </Badge>
    </Group>
  );
}

export const useColorSchemeHooks: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
