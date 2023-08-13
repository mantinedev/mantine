import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group, Button, Code, Title, MantineProvider, useMantineColorScheme } from '@mantine/core';

const code = `
import { Button, Code, Title, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}
`;

function Demo() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <MantineProvider
      theme={{
        colorScheme,
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Title mb="xs" style={{ textAlign: 'center' }} order={3}>
        Greycliff CF or sans-serif title
      </Title>

      <Group position="center">
        <Button>Verdana button</Button>
        <Code>Monaco, Courier Code</Code>
      </Group>
    </MantineProvider>
  );
}

export const themeFontsExtend: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
