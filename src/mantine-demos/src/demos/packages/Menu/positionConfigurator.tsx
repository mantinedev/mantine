import React from 'react';
import { Menu, MenuProps, Group } from '@mantine/core';
import { menuItems } from './_menu-items';

function Wrapper(props: MenuProps) {
  return (
    <Group position="center">
      <Menu opened trapFocus={false} {...props}>
        {menuItems}
      </Menu>
    </Group>
  );
}

const codeTemplate = (props: string) => `<Menu${props}>
  {/* Menu items */}
</Menu>`;

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
        { label: 'Bottom', value: 'bottom' },
        { label: 'Top', value: 'top' },
        { label: 'Right', value: 'right' },
        { label: 'Left', value: 'left' },
      ],
    },
    {
      name: 'placement',
      type: 'select',
      initialValue: 'start',
      defaultValue: 'start',
      data: [
        { label: 'Start', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'end' },
      ],
    },
    {
      name: 'gutter',
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
