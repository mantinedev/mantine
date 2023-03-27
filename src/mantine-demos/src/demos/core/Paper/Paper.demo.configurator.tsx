import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Text, Paper, DEFAULT_THEME, Box } from '@mantine/core';

function Wrapper(props: any) {
  return (
    <Box p="md">
      <Paper maw={400} mx="auto" {...props}>
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that require background
          with shadow
        </Text>
      </Paper>
    </Box>
  );
}

const codeTemplate = (props: string) => `
import { Text, Paper } from '@mantine/core';

function Demo() {
  return (
    <Paper${props}>
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
    </Paper>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  background: (colorScheme) =>
    colorScheme === 'dark' ? DEFAULT_THEME.colors.dark[8] : DEFAULT_THEME.colors.gray[0],
  configurator: [
    { name: 'shadow', type: 'size', initialValue: 'xs', defaultValue: 'none' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'p', label: 'Padding', type: 'size', initialValue: 'md', defaultValue: 0 },
    { name: 'withBorder', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
