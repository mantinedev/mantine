import React from 'react';
import { Menu } from './Menu';
import { Button } from '../Button';

export default { title: 'Menu2' };

export function Usage() {
  return (
    <div style={{ padding: 40, display: 'flex', justifyContent: 'center' }}>
      <Menu withArrow width={200} shadow="md">
        <Menu.Trigger>
          <Button>Toggle menu</Button>
        </Menu.Trigger>

        <Menu.Dropdown>
          <Menu.Label>Label 1</Menu.Label>
          <Menu.Item component="a" href="https://google.com">
            Link item
          </Menu.Item>
          <Menu.Item>Button item 1</Menu.Item>

          <Menu.Divider />

          <Menu.Label>Label 2</Menu.Label>
          <Menu.Item>Button item 2</Menu.Item>
          <Menu.Item>Button item 3</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
