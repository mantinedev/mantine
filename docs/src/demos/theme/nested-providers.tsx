import React from 'react';
import { Group, Button, Text, MantineProvider, useMantineColorScheme } from '@mantine/core';
import CodeDemo from '../../components/Demo/CodeDemo/CodeDemo';

const code = `import { Button, MantineProvider, Text } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ fontFamily: 'Georgia, serif' }}>
      <Text style={{ textAlign: 'center', marginBottom: 10 }}>Georgia or serif text</Text>

      <MantineProvider theme={{ fontFamily: 'Greycliff CF, sans-serif' }}>
        <Button>Greycliff CF button</Button>
      </MantineProvider>
    </MantineProvider>
  );
}`;

export function NestedProvidersDemo() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <CodeDemo code={code} language="tsx">
      <MantineProvider theme={{ fontFamily: 'Georgia, serif', colorScheme }}>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>Georgia or serif text</Text>

        <MantineProvider theme={{ fontFamily: 'Greycliff CF, sans-serif', colorScheme }}>
          <Group position="center">
            <Button>Greycliff CF button</Button>
          </Group>
        </MantineProvider>
      </MantineProvider>
    </CodeDemo>
  );
}
