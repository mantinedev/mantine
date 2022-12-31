import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MantineProvider, Button, Group } from '@mantine/core';

const code = `
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            sizes: {
              xxxs: () => ({
                root: {
                  height: 20,
                  padding: 5,
                  fontSize: 8,
                },
              }),

              xxl: (theme) => ({
                root: {
                  fontSize: 28,
                  height: 80,
                  padding: theme.spacing.xl,
                },
              }),
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button size="xxxs">XXXS button</Button>
        <Button size="xxl">XXL button</Button>
      </Group>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            sizes: {
              xxxs: () => ({
                root: {
                  height: 20,
                  padding: 5,
                  fontSize: 8,
                },
              }),

              xxl: (theme) => ({
                root: {
                  fontSize: 28,
                  height: 80,
                  padding: theme.spacing.xl,
                },
              }),
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button size="xxxs">XXXS button</Button>
        <Button size="xxl">XXL button</Button>
      </Group>
    </MantineProvider>
  );
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
