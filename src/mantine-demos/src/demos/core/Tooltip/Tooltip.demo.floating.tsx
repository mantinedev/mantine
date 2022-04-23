import React from 'react';
import { TooltipFloatingProps, Group, Button, Tooltip } from '@mantine/core';

const Wrapper = (props: TooltipFloatingProps) => (
  <div style={{ padding: 30 }}>
    <Group position="center">
      <Tooltip.Floating label="Tooltip" {...props}>
        <Button variant="outline" size="xl">
          With floating tooltip
        </Button>
      </Tooltip.Floating>
    </Group>
  </div>
);

const codeTemplate = (props: string) => `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Tooltip"${props}>
      <Button variant="outline" size="xl">
        With floating tooltip
      </Button>
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
      initialValue: 'gray',
      defaultValue: 'gray',
    },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
  ],
};
