import React from 'react';
import { Tooltip, TooltipProps, Group, Button } from '@mantine/core';
import { FLOATING_POSITION_DATA } from '../../../shared/floating-position-data';

const Wrapper = (props: TooltipProps) => (
  <div style={{ padding: 30 }}>
    <Group position="center">
      <Tooltip label="Tooltip" {...props}>
        <Button variant="outline" size="xl">
          With tooltip
        </Button>
      </Tooltip>
    </Group>
  </div>
);

const codeTemplate = (props: string) => `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      label="Tooltip"
     ${props}
    >
      <Button variant="outline" size="xl">
        With tooltip
      </Button>
    </Tooltip>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: 'color',
      type: 'color',
      initialValue: 'blue',
    },
    {
      name: 'position',
      type: 'select',
      data: FLOATING_POSITION_DATA,
      initialValue: 'top',
      defaultValue: 'top',
    },
    { name: 'withArrow', type: 'boolean', initialValue: true, defaultValue: false },
  ],
};
