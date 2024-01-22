import React from 'react';
import { Button, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'bright-pink',
        colors: {
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}
    >
      <Group>
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </MantineProvider>
  );
}

`;

function Demo() {
  return (
    <Group>
      <Button color="bright-pink">Primary button</Button>
      <Button color="blue">Blue button</Button>
    </Group>
  );
}

export const primaryColor: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
