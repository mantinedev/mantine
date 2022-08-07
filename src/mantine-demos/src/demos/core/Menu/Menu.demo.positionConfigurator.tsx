import React from 'react';
import { Menu, MenuProps, Group } from '@mantine/core';
import { DemoMenuItems } from './_menu-items';

function Wrapper(props: MenuProps) {
  return (
    <Group position="center">
      <Menu opened trigger="hover" {...props}>
        <DemoMenuItems />
      </Menu>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu${props}>
      {/* Menu items */}
    </Menu>
  );
}
`;

export const positionConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'position',
      type: 'select',
      initialValue: 'bottom',
      defaultValue: 'bottom',
      data: [
        { label: 'bottom', value: 'bottom' },
        { label: 'bottom-start', value: 'bottom-start' },
        { label: 'bottom-end', value: 'bottom-end' },
        { label: 'top', value: 'top' },
        { label: 'top-start', value: 'top-start' },
        { label: 'top-end', value: 'top-end' },
        { label: 'left', value: 'left' },
        { label: 'left-start', value: 'left-start' },
        { label: 'left-end', value: 'left-end' },
        { label: 'right', value: 'right' },
        { label: 'right-start', value: 'right-start' },
        { label: 'right-end', value: 'right-end' },
      ],
    },
    {
      name: 'offset',
      type: 'number',
      initialValue: 5,
      defaultValue: 5,
      max: 20,
      min: -20,
    },
    {
      name: 'withArrow',
      type: 'boolean',
      initialValue: false,
      defaultValue: false,
    },
  ],
};
