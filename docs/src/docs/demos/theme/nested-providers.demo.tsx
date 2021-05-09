import React, { useContext } from 'react';
import { ElementsGroup, Button, Text, MantineProvider } from '@mantine/core';
import { ColorSchemeContext } from '../../../components/Layout/ColorScheme.context';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button, MantineProvider, Text } from '@mantine/core';

function Demo() {
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
  const { colorScheme } = useContext(ColorSchemeContext);
  return (
    <CodeDemo code={code} language="tsx">
      <MantineProvider theme={{ fontFamily: 'Georgia, serif', colorScheme }}>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>Georgia or serif text</Text>

        <MantineProvider theme={{ fontFamily: 'Verdana, sans-serif', colorScheme }}>
          <ElementsGroup position="center">
            <Button>Verdana button</Button>
          </ElementsGroup>
        </MantineProvider>
      </MantineProvider>
    </CodeDemo>
  );
}
