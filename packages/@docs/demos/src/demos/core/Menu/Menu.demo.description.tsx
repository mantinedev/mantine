import { BellIcon, LinkIcon, TrashIcon, UserPlusIcon } from '@phosphor-icons/react';
import { Button, Menu } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { BellIcon, LinkIcon, TrashIcon, UserPlusIcon } from '@phosphor-icons/react';
import { Button, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu shadow="md" width={260}>
      <Menu.Target>
        <Button>Share</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Share</Menu.Label>
        <Menu.Item
          leftSection={<LinkIcon size={14} />}
          description="Anyone with the link can view"
        >
          Copy link
        </Menu.Item>
        <Menu.Item
          leftSection={<UserPlusIcon size={14} />}
          description="Send an email invitation"
        >
          Invite people
        </Menu.Item>
        <Menu.Item
          leftSection={<BellIcon size={14} />}
          description="Digest, mentions or everything"
        >
          Notifications
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={<TrashIcon size={14} />}
          description="Moves the file to trash"
        >
          Delete file
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu shadow="md" width={260} withinPortal>
      <Menu.Target>
        <Button>Share</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Share</Menu.Label>
        <Menu.Item leftSection={<LinkIcon size={14} />} description="Anyone with the link can view">
          Copy link
        </Menu.Item>
        <Menu.Item leftSection={<UserPlusIcon size={14} />} description="Send an email invitation">
          Invite people
        </Menu.Item>
        <Menu.Item
          leftSection={<BellIcon size={14} />}
          description="Digest, mentions or everything"
        >
          Notifications
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={<TrashIcon size={14} />}
          description="Moves the file to trash"
        >
          Delete file
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export const description: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
