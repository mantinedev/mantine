import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TooltipFloatingProps, Group, Tooltip, Box } from '@mantine/core';

const Wrapper = (props: TooltipFloatingProps) => (
  <Box p="xl">
    <Group position="center">
      <Tooltip.Floating label="Tooltip" {...props}>
        <Box
          sx={(theme) => ({
            padding: theme.spacing.xl,
            cursor: 'default',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          })}
        >
          Hover over the box to see tooltip
        </Box>
      </Tooltip.Floating>
    </Group>
  </Box>
);

const codeTemplate = (props: string) => `
import { Tooltip, Box } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Tooltip"${props}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          cursor: 'default',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        })}
      >
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`;

export const floating: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'color',
      type: 'color',
      initialValue: 'blue',
    },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
  ],
};
