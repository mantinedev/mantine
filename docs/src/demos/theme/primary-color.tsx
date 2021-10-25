import React from 'react';
import { Group, Button, MantineProvider, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../components/Demo/CodeDemo/CodeDemo';

const code = `import { Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{
      colors: {
        brand: [
          '#F0BBDD',
          '#ED9BCF',
          '#EC7CC3',
          '#ED5DB8',
          '#F13EAF',
          '#F71FA7',
          '#FF00A1',
          '#E00890',
          '#C50E82',
          '#AD1374',
        ],
      },
      primaryColor: 'brand',
      colorScheme
    }}
    >
      <Button>Primary button</Button>
      <Button color="red">Red button</Button>
    </MantineProvider>
  );
}`;

export function PrimaryColorDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo code={code} language="tsx">
      <MantineProvider theme={{
        colors: {
          brand: [
            '#F0BBDD',
            '#ED9BCF',
            '#EC7CC3',
            '#ED5DB8',
            '#F13EAF',
            '#F71FA7',
            '#FF00A1',
            '#E00890',
            '#C50E82',
            '#AD1374',
          ],
        },
        primaryColor: 'brand',
        colorScheme: theme.colorScheme
      }}
      >
        <Group position="center">
          <Button>Primary button</Button>
          <Button color="red">Red button</Button>
        </Group>
      </MantineProvider>
    </CodeDemo>
  );
}
