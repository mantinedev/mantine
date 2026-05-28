import { useState } from 'react';
import { Button, Menu } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Menu } from '@mantine/core';

function Demo() {
  const [columns, setColumns] = useState({
    name: true,
    email: true,
    role: false,
    lastSeen: false,
  });

  const setColumn = (key: keyof typeof columns) => (checked: boolean) =>
    setColumns((current) => ({ ...current, [key]: checked }));

  return (
    <Menu shadow="md" width={220} closeOnItemClick={false}>
      <Menu.Target>
        <Button>Columns</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Visible columns</Menu.Label>
        <Menu.CheckboxItem checked={columns.name} onChange={setColumn('name')}>
          Name
        </Menu.CheckboxItem>
        <Menu.CheckboxItem checked={columns.email} onChange={setColumn('email')}>
          Email
        </Menu.CheckboxItem>
        <Menu.CheckboxItem checked={columns.role} onChange={setColumn('role')}>
          Role
        </Menu.CheckboxItem>
        <Menu.CheckboxItem checked={columns.lastSeen} onChange={setColumn('lastSeen')}>
          Last seen
        </Menu.CheckboxItem>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  const [columns, setColumns] = useState({
    name: true,
    email: true,
    role: false,
    lastSeen: false,
  });

  const setColumn = (key: keyof typeof columns) => (checked: boolean) =>
    setColumns((current) => ({ ...current, [key]: checked }));

  return (
    <Menu shadow="md" width={220} closeOnItemClick={false}>
      <Menu.Target>
        <Button>Columns</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Visible columns</Menu.Label>
        <Menu.CheckboxItem checked={columns.name} onChange={setColumn('name')}>
          Name
        </Menu.CheckboxItem>
        <Menu.CheckboxItem checked={columns.email} onChange={setColumn('email')}>
          Email
        </Menu.CheckboxItem>
        <Menu.CheckboxItem checked={columns.role} onChange={setColumn('role')}>
          Role
        </Menu.CheckboxItem>
        <Menu.CheckboxItem checked={columns.lastSeen} onChange={setColumn('lastSeen')}>
          Last seen
        </Menu.CheckboxItem>
      </Menu.Dropdown>
    </Menu>
  );
}

export const checkboxItem: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
