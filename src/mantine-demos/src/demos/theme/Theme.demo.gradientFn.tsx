import React from 'react';
import { MantineProvider, Center, Group } from '@mantine/core';

const code = `
import { MantineProvider, Center, Group } from '@mantine/core';
function Demo() {
  return (
    <MantineProvider inherit theme={{ defaultGradient: { from: 'blue', to: 'teal', deg: 20 } }}>
      <Group position="center" grow>
        <Center
          sx={(theme) => ({
            height: 40,
            backgroundImage: theme.fn.gradient(),
            color: theme.white,
          })}
        >
          Default gradient
        </Center>

        <Center
          sx={(theme) => ({
            height: 40,
            backgroundImage: theme.fn.gradient({ from: 'red', to: 'orange', deg: 45 }),
            color: theme.white,
          })}
        >
          Custom gradient
        </Center>
      </Group>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineProvider inherit theme={{ defaultGradient: { from: 'blue', to: 'teal', deg: 20 } }}>
      <Group position="center" grow>
        <Center
          sx={(theme) => ({
            height: 40,
            backgroundImage: theme.fn.gradient(),
            color: theme.white,
          })}
        >
          Default gradient
        </Center>

        <Center
          sx={(theme) => ({
            height: 40,
            backgroundImage: theme.fn.gradient({ from: 'red', to: 'orange', deg: 45 }),
            color: theme.white,
          })}
        >
          Custom gradient
        </Center>
      </Group>
    </MantineProvider>
  );
}

export const gradientFn: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
