import React from 'react';
import { Table } from 'tabler-icons-react';
import { Menu } from './Menu';
import { Button } from '../Button';

export default { title: 'Menu2' };

export function Usage() {
  return (
    <div style={{ padding: 40, display: 'flex', justifyContent: 'center' }}>
      <Menu width={200} shadow="md">
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Label 1</Menu.Label>
          <Menu.Item component="a" href="https://google.com">
            Link item
          </Menu.Item>
          <Menu.Item closeMenuOnClick={false}>Won&apos;t close on click</Menu.Item>

          <Menu.Divider />

          <Menu.Label>Label 2</Menu.Label>
          <Menu.Item color="red" icon={<Table size={14} />}>
            Red color
          </Menu.Item>
          <Menu.Item icon={<Table size={14} />}>Button item 3</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
