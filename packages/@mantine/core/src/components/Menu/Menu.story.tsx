import { useState } from 'react';
import { MagnifyingGlassIcon, TableIcon } from '@phosphor-icons/react';
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
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item closeMenuOnClick={false}>Won&apos;t close on click</Menu.Item>
          <Menu.Item disabled>Disabled</Menu.Item>

          <Menu.Item
            leftSection={<MagnifyingGlassIcon size={14} />}
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
          <Menu.Item color="red" leftSection={<TableIcon size={14} />}>
            Red color
          </Menu.Item>
          <Menu.Item leftSection={<TableIcon size={14} />}>Button item 3</Menu.Item>
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

export function WithSubMenu() {
  return (
    <div style={{ padding: 400 }}>
      <Menu width={200} position="bottom-start">
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Sub openDelay={1200} closeDelay={100}>
            <Menu.Sub.Target>
              <Menu.Sub.Item>Sub Menu item</Menu.Sub.Item>
            </Menu.Sub.Target>

            <Menu.Sub.Dropdown>
              <Menu.Item closeMenuOnClick={false}>Sub 1</Menu.Item>
              <Menu.Item closeMenuOnClick={false}>Sub 2</Menu.Item>
              <Menu.Sub openDelay={120} closeDelay={100}>
                <Menu.Sub.Target>
                  <Menu.Sub.Item>Sub Menu item</Menu.Sub.Item>
                </Menu.Sub.Target>

                <Menu.Sub.Dropdown>
                  <Menu.Item closeMenuOnClick={false}>Sub 1</Menu.Item>
                  <Menu.Item closeMenuOnClick={false}>Sub 2</Menu.Item>
                </Menu.Sub.Dropdown>
              </Menu.Sub>
            </Menu.Sub.Dropdown>
          </Menu.Sub>
          <Menu.Item>Item 3</Menu.Item>
          <Menu.Item>Item 4</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export function WithSubMenuSafeAreaPolygon() {
  return (
    <div style={{ padding: 400 }}>
      <Menu width={200} position="bottom-start">
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>Dashboard</Menu.Item>

          <Menu.Sub offset={16} safeAreaPolygon={{ buffer: 16, requireIntent: false }}>
            <Menu.Sub.Target>
              <Menu.Sub.Item>Products</Menu.Sub.Item>
            </Menu.Sub.Target>

            <Menu.Sub.Dropdown>
              <Menu.Item closeMenuOnClick={false}>All products</Menu.Item>
              <Menu.Item closeMenuOnClick={false}>Categories</Menu.Item>
              <Menu.Item closeMenuOnClick={false}>Tags</Menu.Item>
              <Menu.Item closeMenuOnClick={false}>Attributes</Menu.Item>
              <Menu.Item closeMenuOnClick={false}>Shipping classes</Menu.Item>
            </Menu.Sub.Dropdown>
          </Menu.Sub>

          <Menu.Item>Customers</Menu.Item>
          <Menu.Item>Reports</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

function SubValidationCase({
  label,
  hint,
  items,
  menuProps,
  subProps,
  withSearch,
  alignEnd,
}: {
  label: string;
  hint: string;
  items: React.ReactNode;
  menuProps?: any;
  subProps?: any;
  withSearch?: boolean;
  alignEnd?: boolean;
}) {
  const [closeCount, setCloseCount] = useState(0);
  const [opened, setOpened] = useState(false);

  return (
    <div
      style={{
        border: '1px solid var(--mantine-color-gray-3)',
        borderRadius: 8,
        padding: 12,
        width: 250,
      }}
    >
      <Text size="sm" fw={600}>
        {label}
      </Text>
      <Text size="xs" c="dimmed" mb={8}>
        {hint}
      </Text>

      <div style={{ display: 'flex', justifyContent: alignEnd ? 'flex-end' : 'flex-start' }}>
        <Menu width={200} position="bottom-start" {...menuProps}>
          <Menu.Target>
            <Button size="xs">Open menu</Button>
          </Menu.Target>

          <Menu.Dropdown>
            {withSearch && <Menu.Search placeholder="Search" />}
            <Menu.Item>Dashboard</Menu.Item>
            <Menu.Sub
              {...subProps}
              onChange={(subOpened) => {
                setOpened(subOpened);
                if (!subOpened) {
                  setCloseCount((count) => count + 1);
                }
              }}
            >
              <Menu.Sub.Target>
                <Menu.Sub.Item>Options</Menu.Sub.Item>
              </Menu.Sub.Target>
              <Menu.Sub.Dropdown>{items}</Menu.Sub.Dropdown>
            </Menu.Sub>
            <Menu.Item>Customers</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>

      <Text size="xs" mt={8} c={closeCount > 0 ? 'red' : 'dimmed'}>
        submenu {opened ? 'open' : 'closed'} · closed {closeCount}×
      </Text>
    </div>
  );
}

function ControlledRadioItems() {
  const [value, setValue] = useState('1');
  return (
    <Menu.RadioGroup value={value} onChange={setValue}>
      {['1', '2', '3'].map((option) => (
        <Menu.RadioItem key={option} value={option}>
          Option {option}
        </Menu.RadioItem>
      ))}
    </Menu.RadioGroup>
  );
}

export function SubMenuRadioValidation() {
  const radioItems = (count: number) => (
    <Menu.RadioGroup defaultValue="1">
      {Array.from({ length: count }, (_, index) => `${index + 1}`).map((option) => (
        <Menu.RadioItem key={option} value={option}>
          Option {option}
        </Menu.RadioItem>
      ))}
    </Menu.RadioGroup>
  );

  const checkboxItems = (
    <Menu.CheckboxGroup defaultValue={['1']}>
      {['1', '2', '3'].map((option) => (
        <Menu.CheckboxItem key={option} value={option}>
          Option {option}
        </Menu.CheckboxItem>
      ))}
    </Menu.CheckboxGroup>
  );

  const plainItems = ['1', '2', '3'].map((option) => (
    <Menu.Item key={option} closeMenuOnClick={false}>
      Option {option}
    </Menu.Item>
  ));

  const mixedItems = (
    <>
      <Menu.Label>Sort by</Menu.Label>
      {radioItems(3)}
      <Menu.Divider />
      <Menu.Item closeMenuOnClick={false}>Plain item</Menu.Item>
    </>
  );

  return (
    <div style={{ padding: 24, paddingInlineEnd: 300, minHeight: '100vh' }}>
      <Text size="sm" mb={4}>
        Open a menu, hover <b>Options</b> to open the submenu, then move onto the radio items and
        hover each one. The counter turns red and increments every time that submenu closes — so an
        unexpected close is recorded even if you miss it.
      </Text>
      <Text size="xs" c="dimmed" mb={16}>
        Moving back out to the parent menu closes the submenu on purpose, so reset by reopening the
        menu before each attempt.
      </Text>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        <SubValidationCase
          label="Radio group"
          hint="Baseline case from the report"
          items={radioItems(3)}
        />
        <SubValidationCase
          label="Radio group, 8 options"
          hint="Tall submenu, long diagonal reach"
          items={radioItems(8)}
        />
        <SubValidationCase
          label="Radio group, controlled"
          hint="value + onChange in a parent"
          items={<ControlledRadioItems />}
        />
        <SubValidationCase
          label="Radio + label + divider"
          hint="Mixed submenu content"
          items={mixedItems}
        />
        <SubValidationCase
          label="Checkbox group"
          hint="Same code path as radio"
          items={checkboxItems}
        />
        <SubValidationCase
          label="Plain items (control)"
          hint="If this closes too, it is not radio specific"
          items={plainItems}
        />
        <SubValidationCase
          label="closeDelay 100"
          hint="Submenu closes on a timer"
          items={radioItems(3)}
          subProps={{ closeDelay: 100 }}
        />
        <SubValidationCase
          label="offset 8"
          hint="Gap between item and submenu"
          items={radioItems(3)}
          subProps={{ offset: 8 }}
        />
        <SubValidationCase
          label="safeAreaPolygon off"
          hint="No safe area while travelling"
          items={radioItems(3)}
          subProps={{ safeAreaPolygon: false, closeDelay: 100 }}
        />
        <SubValidationCase
          label="trigger click-hover"
          hint="Root menu opens on hover too"
          items={radioItems(3)}
          menuProps={{ trigger: 'click-hover' }}
        />
        <SubValidationCase
          label="alignItemsLabels none"
          hint="Indicator slot only when checked"
          items={radioItems(3)}
          menuProps={{ alignItemsLabels: 'none' }}
        />
        <SubValidationCase
          label="With Menu.Search"
          hint="hasSearch changes item mousemove"
          items={radioItems(3)}
          withSearch
        />
      </div>

      <div style={{ position: 'fixed', top: 24, insetInlineEnd: 8 }}>
        <SubValidationCase
          label="Near right edge"
          hint="Submenu flips to the left side"
          items={radioItems(8)}
          menuProps={{ position: 'bottom-end' }}
          alignEnd
        />
      </div>
    </div>
  );
}
