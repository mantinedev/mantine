import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';
import { Button, Menu, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Menu, Tooltip } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>

        <Tooltip label="Tooltip for disabled button">
          <Menu.Item
            leftSection={<IconSearch size={14} />}
            data-disabled
            onClick={(event) => event.preventDefault()}
          >
            Search
          </Menu.Item>
        </Tooltip>

        {/* Other items ... */}
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>Gallery</Menu.Item>
        <Tooltip label="Tooltip for disabled button">
          <Menu.Item
            leftSection={<IconSearch size={14} />}
            data-disabled
            onClick={(event) => event.preventDefault()}
          >
            Search
          </Menu.Item>
        </Tooltip>
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
        <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export const disabledTooltip: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
