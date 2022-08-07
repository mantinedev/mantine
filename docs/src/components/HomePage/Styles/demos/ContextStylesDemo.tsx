import React from 'react';
import { Link } from 'gatsby';
import { Text, Box, Anchor } from '@mantine/core';
import { Prism } from '@mantine/prism';

const code = `
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.indigo[7],
                color: theme.white,
              },
            }),
          },
          TextInput: {
            styles: (theme) => ({
              label: {
                color: theme.colors.gray[7],
                fontSize: theme.fontSizes.xs,
                textTransform: 'uppercase',
              },
            }),
          },
        },
      }}
    >
      <App />
    </MantineProvider>
  );
}
`;

export function ContextStylesDemo() {
  return (
    <Box pt="xl">
      <Text mb="sm">
        Add context styles with{' '}
        <Anchor component={Link} to="/theming/mantine-provider/">
          MantineProvider
        </Anchor>{' '}
        that will be applied to every component:
      </Text>
      <Prism
        language="tsx"
        radius="md"
        noCopy
        styles={(theme) => ({
          code: {
            backgroundColor:
              theme.colorScheme === 'dark' ? `${theme.colors.dark[7]} !important` : undefined,
          },
        })}
      >
        {code}
      </Prism>
    </Box>
  );
}
