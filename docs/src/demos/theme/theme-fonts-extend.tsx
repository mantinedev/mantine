import React from 'react';
import { Group, Button, Code, Title, MantineProvider, useMantineColorScheme } from '@mantine/core';
import CodeDemo from '../../components/Demo/CodeDemo/CodeDemo';

const code = `import { Button, Code, Title, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{
      fontFamily: 'Verdana, sans-serif',
      fontFamilyMonospace: 'Monaco, Courier, monospace',
      headings: { fontFamily: 'Greycliff CF, sans-serif' },
    }}>
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}`;

export function ThemeFontsExtendDemo() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <CodeDemo code={code} language="tsx">
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: 'Verdana, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: 'Greycliff CF, sans-serif' },
        }}
      >
        <Title style={{ textAlign: 'center', marginBottom: 10 }} order={3}>
          Greycliff CF or sans-serif title
        </Title>

        <Group position="center">
          <Button>Verdana button</Button>
          <Code>Monaco, Courier Code</Code>
        </Group>
      </MantineProvider>
    </CodeDemo>
  );
}
