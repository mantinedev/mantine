import { PlusIcon } from '@phosphor-icons/react';
import { Button, Menu } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PlusIcon } from '@phosphor-icons/react';
import { Button, Menu } from '@mantine/core';

function Demo() {
  const workspaces: string[] = [];

  return (
    <Menu width={240}>
      <Menu.Target>
        <Button>Switch workspace</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {workspaces.length === 0 ? (
          <Menu.Empty>You have no other workspaces</Menu.Empty>
        ) : (
          workspaces.map((workspace) => <Menu.Item key={workspace}>{workspace}</Menu.Item>)
        )}

        <Menu.Divider />
        <Menu.Item leftSection={<PlusIcon size={14} />}>Create workspace</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  const workspaces: string[] = [];

  return (
    <Menu width={240}>
      <Menu.Target>
        <Button>Switch workspace</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {workspaces.length === 0 ? (
          <Menu.Empty>You have no other workspaces</Menu.Empty>
        ) : (
          workspaces.map((workspace) => <Menu.Item key={workspace}>{workspace}</Menu.Item>)
        )}

        <Menu.Divider />
        <Menu.Item leftSection={<PlusIcon size={14} />}>Create workspace</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export const emptyState: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
