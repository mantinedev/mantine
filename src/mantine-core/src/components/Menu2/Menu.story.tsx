import React from 'react';
import { Menu } from './Menu';
import { Button } from '../Button';

export default { title: 'Menu2' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Menu opened>
        <Menu.Trigger>
          <Button>Toggle menu</Button>
        </Menu.Trigger>

        <Menu.Dropdown>
          <Menu.Label>Label 1</Menu.Label>
          <Menu.Item component="a" href="https://google.com">
            Item 1
          </Menu.Item>
          <Menu.Item>Item 2</Menu.Item>

          <Menu.Divider />

          <Menu.Label>Label 2</Menu.Label>
          <Menu.Item>Item 3</Menu.Item>
          <Menu.Item>Item 4</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
