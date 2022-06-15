import React from 'react';
import { TooltipFloatingProps, Group, Tooltip, Box } from '@mantine/core';

const Wrapper = (props: TooltipFloatingProps) => (
  <div style={{ padding: 30 }}>
    <Group position="center">
      <Tooltip.Floating label="Tooltip" {...props}>
        <Box
          sx={(theme) => ({
            padding: theme.spacing.xl * 1.5,
            cursor: 'default',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          })}
        >
          Hover over the box to see tooltip
        </Box>
      </Tooltip.Floating>
    </Group>
  </div>
);

const codeTemplate = (props: string) => `
import { Tooltip, Box } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Tooltip"${props}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl * 1.5,
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
