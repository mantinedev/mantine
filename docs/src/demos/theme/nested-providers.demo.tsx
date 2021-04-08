import React from 'react';
import { ElementsGroup, Button, Text } from '@mantine/core';
import { MantineProvider } from '@mantine/theme';
import CodeDemo from '../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button } from '@mantine/core';

function NestedProvidersDemo() {
  return (
    <MantineProvider theme={{ fontFamily: 'Georgia, serif' }}>
      <Text style={{ textAlign: 'center', marginBottom: 10 }}>Georgia or serif text</Text>

      <MantineProvider theme={{ fontFamily: 'Verdana, sans-serif' }}>
        <Button>Verdana button</Button>
      </MantineProvider>
    </MantineProvider>
  );
}`;

export function NestedProvidersDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <MantineProvider theme={{ fontFamily: 'Georgia, serif' }}>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>Georgia or serif text</Text>

        <MantineProvider theme={{ fontFamily: 'Verdana, sans-serif' }}>
          <ElementsGroup position="center">
            <Button>Verdana button</Button>
          </ElementsGroup>
        </MantineProvider>
      </MantineProvider>
    </CodeDemo>
  );
}
