import { useState } from 'react';
import { IconSearch, IconTable } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '../Button';
import { Input } from '../Input';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import { Menu } from './Menu';

export default { title: 'Menu' };

export function DisabledFirstItem() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item disabled>Disabled</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export function FormTab() {
  return (
    <div>
      <form>
        <input />
        <input />
      </form>

      <Menu keepMounted>
        <Menu.Target>
          <Button>Hey</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <form>
        <input />
        <input />
      </form>
    </div>
  );
}

export function Unstyled() {
  return (
    <Menu unstyled>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item disabled>Disabled</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export function KeepMounted() {
  return (
    <Menu keepMounted>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item disabled>Disabled</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

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
            leftSection={<IconSearch size={14} />}
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Label 2</Menu.Label>
          <Menu.Item color="red" leftSection={<IconTable size={14} />}>
            Red color
          </Menu.Item>
          <Menu.Item leftSection={<IconTable size={14} />}>Button item 3</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
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

export function Controlled() {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ padding: 100 }}>
      <Menu opened={opened} onChange={setOpened}>
        <Menu.Target>
          <Button>Toggle controlled menu</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export function WithUseDisclosure() {
  const [opened, handle] = useDisclosure(false);

  return (
    <div style={{ padding: 40 }}>
      <Menu opened={opened} onChange={() => handle.toggle()}>
        <Menu.Target>
          <Button>UseDisclosureToggle controlled menu</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export function WithKeepMounted() {
  return (
    <div className="App">
      <Menu keepMounted>
        {/* Menu without keepMounted will let you 'TAB' through form-fields */}
        {/* <Menu> */}
        <Menu.Target>
          <Button>Hey</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Baby</Menu.Item>
          <Menu.Item>Girl</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <form>
        <Input />
        <Input />
      </form>
    </div>
  );
}
