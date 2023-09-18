import React from 'react';
import { Badge } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useColorScheme } from '@mantine/hooks';

const code = `
import { Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

function Demo() {
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
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}

export const useColorSchemeDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
