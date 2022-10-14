import React from 'react';
import { IconTable, IconSearch } from '@tabler/icons';
import { WithinOverlays } from '@mantine/storybook';
import { Menu } from './Menu';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import { Text } from '../Text';

export default { title: 'Menu' };

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
          <Menu.Item disabled>Disabled</Menu.Item>

          <Menu.Item
            icon={<IconSearch size={14} />}
            rightSection={
              <Text size="xs" color="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Label 2</Menu.Label>
          <Menu.Item color="red" icon={<IconTable size={14} />}>
            Red color
          </Menu.Item>
          <Menu.Item icon={<IconTable size={14} />}>Button item 3</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export function _WithinOverlays() {
  return (
    <WithinOverlays>
      <Usage />
    </WithinOverlays>
  );
}

export function MenuTargetWithTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <Menu>
        <Tooltip label="Tooltip first">
          <Menu.Target>
            <Button>Tooltip first</Button>
          </Menu.Target>
        </Tooltip>

        <Menu.Dropdown>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu>
        <Menu.Target>
          <Tooltip label="Tooltip last">
            <Button ml="xl">Tooltip last</Button>
          </Tooltip>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
