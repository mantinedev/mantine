import React from 'react';
import { Menu, MenuProps } from '../Menu';
import { Group } from '../../Group/Group';
import { menuItems } from './_menu-items';

function Wrapper(props: MenuProps) {
  return (
    <Group position="center" style={{ height: 200 }}>
      <Menu {...props}>{menuItems.slice(0, 3)}</Menu>
    </Group>
  );
}

const codeTemplate = (props: string) => `<Menu${props}>
  {/* Menu items */}
</Menu>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'shadow', type: 'size', initialValue: 'md', defaultValue: 'md' },
  ],
};
