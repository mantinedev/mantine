import React from 'react';
import { Group, Text, MantineProvider } from '@mantine/core';

const code = `
import { Group, Text, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <>
      <MantineProvider
        inherit
        theme={{
          fontSizes: {
            sm: '14px',
            lg: '1.25rem',
            xl: '1.5em',
          },
          spacing: {
            md: '1em',
            lg: '1.25rem',
          },
          radius: {
            md: '1.2em',
            lg: '1.25rem',
          },
          breakpoints: {
            md: 997,
            lg: '1080px',
          },
        }}
      >
        <Group mt="xl">
          <Text size="sm">SM</Text>
          <Text size="md">MD</Text>
          <Text size="lg">LG</Text>
          <Text size="xl">XL</Text>
        </Group>
      </MantineProvider>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <MantineProvider
        inherit
        theme={{
          fontSizes: {
            sm: '14px',
            lg: '1.25rem',
            xl: '1.5em',
          },
          spacing: {
            md: '1em',
            lg: '1.25rem',
          },
          radius: {
            md: '1.2em',
            lg: '1.25rem',
          },
          breakpoints: {
            md: 997,
            lg: '1080px',
          },
        }}
      >
        <Group mt="xl">
          <Text size="sm">SM</Text>
          <Text size="md">MD</Text>
          <Text size="lg">LG</Text>
          <Text size="xl">XL</Text>
        </Group>
      </MantineProvider>
    </>
  );
}

export const customUnit: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
