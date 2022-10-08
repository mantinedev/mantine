import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group, Button, Text, MantineProvider, useMantineColorScheme } from '@mantine/core';

const code = `import { Button, MantineProvider, Text } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ fontFamily: 'Georgia, serif' }}>
      <Text align="center" mb="xs">Georgia or serif text</Text>

      <MantineProvider theme={{ fontFamily: 'Greycliff CF, sans-serif' }}>
        <Button>Greycliff CF button</Button>
      </MantineProvider>
    </MantineProvider>
  );
}`;

function Demo() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <MantineProvider theme={{ fontFamily: 'Georgia, serif', colorScheme }}>
      <Text align="center" mb="xs">
        Georgia or serif text
      </Text>

      <MantineProvider theme={{ fontFamily: 'Greycliff CF, sans-serif', colorScheme }}>
        <Group position="center">
          <Button>Greycliff CF button</Button>
        </Group>
      </MantineProvider>
    </MantineProvider>
  );
}

export const nestedProviders: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
