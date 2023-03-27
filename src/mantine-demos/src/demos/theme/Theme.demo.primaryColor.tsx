import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group, Button, MantineProvider, useMantineTheme } from '@mantine/core';

const code = `
import { Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{
      colors: {
        brand: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
      },
      primaryColor: 'brand',
    }}
    >
      <Button>Primary button</Button>
      <Button color="blue">Blue button</Button>
    </MantineProvider>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();

  return (
    <MantineProvider
      theme={{
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
        colorScheme: theme.colorScheme,
      }}
    >
      <Group position="center">
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </MantineProvider>
  );
}

export const primaryColor: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
