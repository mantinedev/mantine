import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useColorSchemeValue, useColorScheme } from '@mantine/hooks';

const code = `
import { Badge } from '@mantine/core';
import { useColorSchemeValue, useColorScheme } from '@mantine/hooks';

function Demo() {

  const colorScheme = useColorScheme();

  return (
    Your System  color scheme is {colorScheme}
    <Badge color={useColorSchemeValue('teal', 'blue')} variant="filled">
      Your Badge color scheme is {useColorSchemeValue('teal', 'blue')}
    </Badge>
  );
}
`;

function Demo() {
  const colorScheme = useColorScheme();
  return (
    <Group position="center">
      Your System color scheme is {colorScheme}
      <Badge color={useColorSchemeValue('teal', 'blue')} variant="filled">
        Your Badge color scheme is{useColorSchemeValue('teal', 'blue')}
      </Badge>
    </Group>
  );
}

export const useColorSchemeValueDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
