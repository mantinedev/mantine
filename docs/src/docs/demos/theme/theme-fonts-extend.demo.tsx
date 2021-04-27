import React, { useContext } from 'react';
import { ElementsGroup, Button, Code, Title, MantineProvider } from '@mantine/core';
import { ColorSchemeContext } from '../../../components/Layout/ColorScheme.context';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button, MantineProvider } from '@mantine/core';

function FontsExtendDemo() {
  return (
    <MantineProvider theme={{
      fontFamily: 'Verdana, sans-serif',
      fontFamilyMonospace: 'Courier, monospace',
      headings: { fontFamily: 'Georgia, serif' },
    }}>
      <Title order={3}>Georgia or serif title</Title>
      <Button>Verdana button</Button>
      <Code>Courier Code</Code>
    </MantineProvider>
  );
}`;

export function ThemeFontsExtendDemo() {
  const { colorScheme } = useContext(ColorSchemeContext);
  return (
    <CodeDemo code={code} language="tsx">
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: 'Verdana, sans-serif',
          fontFamilyMonospace: 'Courier, monospace',
          headings: { fontFamily: 'Georgia, serif' },
        }}
      >
        <Title style={{ textAlign: 'center', marginBottom: 10 }} order={3}>
          Georgia or serif title
        </Title>

        <ElementsGroup position="center">
          <Button>Verdana button</Button>
          <Code data-mantine-composable>Courier Code</Code>
        </ElementsGroup>
      </MantineProvider>
    </CodeDemo>
  );
}
