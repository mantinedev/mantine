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
            variants: {
              danger: (theme) => ({
                root: {
                  backgroundColor: theme.colors.red[9],
                  color: theme.colors.red[0],
                  ...theme.fn.hover({ backgroundColor: theme.colors.red[8] }),
                },
              }),

              success: (theme) => ({
                root: {
                  backgroundImage: theme.fn.linearGradient(
                    45,
                    theme.colors.cyan[theme.fn.primaryShade()],
                    theme.colors.teal[theme.fn.primaryShade()],
                    theme.colors.green[theme.fn.primaryShade()]
                  ),
                  color: theme.white,
                },
              }),
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="danger">Danger variant</Button>
        <Button variant="success">Success variant</Button>
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
            variants: {
              danger: (theme) => ({
                root: {
                  backgroundColor: theme.colors.red[9],
                  color: theme.colors.red[0],
                  ...theme.fn.hover({ backgroundColor: theme.colors.red[8] }),
                },
              }),

              success: (theme) => ({
                root: {
                  backgroundImage: theme.fn.linearGradient(
                    45,
                    theme.colors.cyan[theme.fn.primaryShade()],
                    theme.colors.teal[theme.fn.primaryShade()],
                    theme.colors.green[theme.fn.primaryShade()]
                  ),
                  color: theme.white,
                },
              }),
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="danger">Danger variant</Button>
        <Button variant="success">Success variant</Button>
      </Group>
    </MantineProvider>
  );
}

export const variants: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
