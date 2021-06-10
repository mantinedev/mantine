import React from 'react';
import { Tooltip, TooltipProps, Group, Button } from '../../../index';

const Wrapper = (props: TooltipProps) => (
  <div style={{ padding: 30 }}>
    <Group position="center">
      <Tooltip data-mantine-composable opened {...props}>
        <Button variant="outline" color="gray" size="xl">
          With tooltip
        </Button>
      </Tooltip>
    </Group>
  </div>
);

const codeTemplate = (props: string) => `<Tooltip
  opened
 ${props}
>
  <Button variant="outline" color="gray" size="xl">
    With tooltip
  </Button>
</Tooltip>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'Tooltip',
    },
    {
      name: 'color',
      type: 'color',
      initialValue: 'gray',
      defaultValue: 'gray',
    },
    {
      name: 'position',
      type: 'select',
      data: [
        { label: 'top', value: 'top' },
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' },
        { label: 'bottom', value: 'bottom' },
      ],
      initialValue: 'top',
      defaultValue: 'top',
    },
    {
      name: 'placement',
      type: 'select',
      data: [
        { label: 'start', value: 'start' },
        { label: 'center', value: 'center' },
        { label: 'end', value: 'end' },
      ],
      initialValue: 'center',
      defaultValue: 'center',
    },
    { name: 'withArrow', type: 'boolean', initialValue: true, defaultValue: false },
  ],
};
