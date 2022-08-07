import React from 'react';
import { MantineProvider, Button, Badge, Group, ButtonStylesParams } from '@mantine/core';

const code = `
import { MantineProvider, Button, Badge, ButtonStylesParams } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            // Subscribe to theme and component params
            styles: (theme, params: ButtonStylesParams) => ({
              root: {
                height: 42,
                padding: '0 30px',
                backgroundColor:
                  params.variant === 'filled'
                    ? theme.colors[params.color || theme.primaryColor][9]
                    : undefined,
              },
            }),
          },

          Badge: {
            // Use raw styles object if you do not need theme dependency
            styles: {
              root: { borderWidth: 2 },
            },
          },
        },
      }}
    >
      <Button variant="outline">Outline button</Button>
      <Button variant="filled" color="cyan">Filled button</Button>
      <Badge variant="dot">Dot badge</Badge>
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
            // Subscribe to theme and component params
            styles: (theme, params: ButtonStylesParams) => ({
              root: {
                height: 42,
                padding: '0 30px',
                backgroundColor:
                  params.variant === 'filled'
                    ? theme.colors[params.color || theme.primaryColor][9]
                    : undefined,
              },
            }),
          },

          Badge: {
            // Use raw styles object if you do not need theme dependency
            styles: {
              root: { borderWidth: 2 },
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="outline">Outline button</Button>
        <Button variant="filled" color="cyan">
          Filled button
        </Button>
        <Badge variant="dot">Dot badge</Badge>
      </Group>
    </MantineProvider>
  );
}

export const providerStyles: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
