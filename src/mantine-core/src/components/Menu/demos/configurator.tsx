import React from 'react';
import { Menu, MenuProps, MenuItem } from '../Menu';
import { Group } from '../../Group/Group';

function Wrapper(props: MenuProps) {
  return (
    <Group position="center" style={{ height: 200 }}>
      <Menu {...props}>
        <MenuItem>Discard changes</MenuItem>
        <MenuItem>Save draft</MenuItem>
        <MenuItem color="red">Delete</MenuItem>
      </Menu>
    </Group>
  );
}

const codeTemplate = (props: string) => `<Menu${props}>
  <MenuItem>Discard changes</MenuItem>
  <MenuItem>Save draft</MenuItem>
  <MenuItem color="red">Delete</MenuItem>
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
