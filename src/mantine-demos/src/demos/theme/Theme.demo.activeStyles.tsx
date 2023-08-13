import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button, MantineProvider, Group } from '@mantine/core';

const code = `
import { Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ activeStyles: { transform: 'scale(0.95)' } }}>
      <Button>Press me</Button>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineProvider inherit theme={{ activeStyles: { transform: 'scale(0.95)' } }}>
      <Group position="center">
        <Button>Press me</Button>
      </Group>
    </MantineProvider>
  );
}

export const activeStyles: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
