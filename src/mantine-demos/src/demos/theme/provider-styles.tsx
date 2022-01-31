import React from 'react';
import { MantineProvider, Button, Badge, Group, useMantineColorScheme } from '@mantine/core';

const code = `
import { MantineProvider, Button, Badge } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      styles={{
        Button: (theme) => ({
          // Shared button styles are applied to all buttons
          root: { height: 42, padding: '0 30px' },

          // These styles are applied only to buttons with outline variant
          outline: {
            // You can use any selectors inside (the same way as in createStyles function)
            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          },
        }),

        // Use raw styles object if you do not need theme dependency
        Badge: {
          dot: {
            borderWidth: 2,
          },
        },
      }}
    >
      <Button variant="outline">Outline button</Button>
      <Button variant="filled">Filled button</Button>
      <Badge variant="dot">Dot badge</Badge>
    </MantineProvider>
  );
}
`;

function Demo() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <MantineProvider
      theme={{ colorScheme }}
      styles={{
        Button: (theme) => ({
          // Shared button styles are applied to all buttons
          root: { height: 42, padding: '0 30px' },

          // These styles are applied only to buttons with outline variant
          outline: {
            // You can use any selectors inside (the same way as in createStyles function)
            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          },
        }),

        // Use raw styles object if you do not need theme dependency
        Badge: {
          dot: {
            borderWidth: 2,
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="outline">Outline button</Button>
        <Button variant="filled">Filled button</Button>
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
