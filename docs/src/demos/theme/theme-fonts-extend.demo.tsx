import React from 'react';
import { ElementsGroup, Button, Code, Title } from '@mantine/core';
import { MantineProvider } from '@mantine/theme';
import CodeDemo from '../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button } from '@mantine/core';

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
  return (
    <CodeDemo code={code} language="tsx">
      <MantineProvider
        theme={{
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
