import { useEffect, useState } from 'react';
import { MagnifyingGlassIcon, TableIcon } from '@phosphor-icons/react';
import { useDisclosure } from '@mantine/hooks';
import { DirectionProvider } from '../../core';
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
              <Text size="xs" opacity={0.6}>
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

export function SubItemOnClick() {
  const [log, setLog] = useState<string[]>([]);
  const append = (entry: string) => setLog((current) => [...current, entry]);

  return (
    <div style={{ padding: 40 }}>
      <Menu width={220} position="bottom-start">
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Sub>
            <Menu.Sub.Target>
              <Menu.Sub.Item onClick={() => append('Opens submenu')}>Opens submenu</Menu.Sub.Item>
            </Menu.Sub.Target>
            <Menu.Sub.Dropdown>
              <Menu.Item>Sub 1</Menu.Item>
              <Menu.Item>Sub 2</Menu.Item>
            </Menu.Sub.Dropdown>
          </Menu.Sub>
          <Menu.Sub>
            <Menu.Sub.Target>
              <Menu.Sub.Item closeMenuOnClick onClick={() => append('Closes menu')}>
                Closes menu
              </Menu.Sub.Item>
            </Menu.Sub.Target>
            <Menu.Sub.Dropdown>
              <Menu.Item>Sub 3</Menu.Item>
            </Menu.Sub.Dropdown>
          </Menu.Sub>
        </Menu.Dropdown>
      </Menu>
      <Text mt="md" data-testid="sub-item-click-log">
        {log.length === 0 ? 'No clicks' : log.join(', ')}
      </Text>
    </div>
  );
}

function useDocumentRtl() {
  useEffect(() => {
    const previous = document.documentElement.getAttribute('dir');
    document.documentElement.setAttribute('dir', 'rtl');
    return () => {
      if (previous === null) {
        document.documentElement.removeAttribute('dir');
      } else {
        document.documentElement.setAttribute('dir', previous);
      }
    };
  }, []);
}

export function WithSubMenuRtl() {
  useDocumentRtl();
  return (
    <DirectionProvider initialDirection="rtl" detectDirection={false}>
      <div dir="rtl" style={{ padding: 400 }}>
        <Menu width={200} position="bottom-start">
          <Menu.Target>
            <Button>Toggle menu</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Sub>
              <Menu.Sub.Target>
                <Menu.Sub.Item>Sub Menu item</Menu.Sub.Item>
              </Menu.Sub.Target>

              <Menu.Sub.Dropdown>
                <Menu.Item closeMenuOnClick={false}>Sub 1</Menu.Item>
                <Menu.Sub>
                  <Menu.Sub.Target>
                    <Menu.Sub.Item>Nested sub item</Menu.Sub.Item>
                  </Menu.Sub.Target>

                  <Menu.Sub.Dropdown>
                    <Menu.Item closeMenuOnClick={false}>Nested 1</Menu.Item>
                    <Menu.Item closeMenuOnClick={false}>Nested 2</Menu.Item>
                  </Menu.Sub.Dropdown>
                </Menu.Sub>
              </Menu.Sub.Dropdown>
            </Menu.Sub>
            <Menu.Item>Item 3</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </DirectionProvider>
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

export function NestedSubIgnoresWithinPortal() {
  const [pinned, setPinned] = useState<Record<string, string>>({ a: 'false', b: 'false' });

  return (
    <div style={{ padding: 60 }}>
      <Menu width={220} position="bottom-start">
        <Menu.Target>
          <Button>Pin columns</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>Reset</Menu.Item>
          {/* withinPortal is intentionally not supported and must be ignored */}
          <Menu.Sub {...({ withinPortal: true } as any)}>
            <Menu.Sub.Target>
              <Menu.Sub.Item>Pin</Menu.Sub.Item>
            </Menu.Sub.Target>

            <Menu.Sub.Dropdown>
              <Menu.Item closeMenuOnClick={false}>Unpin all</Menu.Item>
              <Menu.Divider />
              {['a', 'b'].map((id) => (
                <Menu.Sub key={id} {...({ withinPortal: true } as any)}>
                  <Menu.Sub.Target>
                    <Menu.Sub.Item>Column {id}</Menu.Sub.Item>
                  </Menu.Sub.Target>

                  <Menu.Sub.Dropdown>
                    <Menu.RadioGroup
                      value={pinned[id]}
                      onChange={(value) => setPinned((current) => ({ ...current, [id]: value }))}
                    >
                      <Menu.RadioItem value="start" closeMenuOnClick={false}>
                        Pinned left
                      </Menu.RadioItem>
                      <Menu.RadioItem value="end" closeMenuOnClick={false}>
                        Pinned right
                      </Menu.RadioItem>
                      <Menu.RadioItem value="false" closeMenuOnClick={false}>
                        Unpinned
                      </Menu.RadioItem>
                    </Menu.RadioGroup>
                  </Menu.Sub.Dropdown>
                </Menu.Sub>
              ))}
            </Menu.Sub.Dropdown>
          </Menu.Sub>
          <Menu.Item>Other</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export function FilledVariant() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40 }}>
      <Menu width={220} shadow="md" variant="filled" position="bottom-start" opened>
        <Menu.Target>
          <Button>Filled variant</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item leftSection={<MagnifyingGlassIcon size={14} />}>Settings</Menu.Item>
          <Menu.Item
            leftSection={<TableIcon size={14} />}
            rightSection={
              <Text size="xs" opacity={0.6}>
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>
          <Menu.Item disabled>Disabled</Menu.Item>
          <Menu.Sub>
            <Menu.Sub.Target>
              <Menu.Sub.Item>Products</Menu.Sub.Item>
            </Menu.Sub.Target>
            <Menu.Sub.Dropdown>
              <Menu.Item>All products</Menu.Item>
              <Menu.Item>Categories</Menu.Item>
            </Menu.Sub.Dropdown>
          </Menu.Sub>
          <Menu.Divider />
          <Menu.Label>Danger zone</Menu.Label>
          <Menu.CheckboxItem defaultChecked>Confirm before delete</Menu.CheckboxItem>
          <Menu.Item color="red" leftSection={<TableIcon size={14} />}>
            Delete my account
          </Menu.Item>
          <Menu.Item color="teal.7">Teal shade 7</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export function WithDescription() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 300 }}>
      {(['default', 'filled'] as const).map((variant) => (
        <Menu
          key={variant}
          width={260}
          shadow="md"
          variant={variant}
          position="bottom-start"
          opened
        >
          <Menu.Target>
            <Button>{variant}</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Share</Menu.Label>
            <Menu.Item
              leftSection={<MagnifyingGlassIcon size={14} />}
              description="Anyone with the link can view"
            >
              Copy link
            </Menu.Item>
            <Menu.Item
              leftSection={<TableIcon size={14} />}
              description="Send an email invitation"
              rightSection={
                <Text size="xs" opacity={0.6}>
                  ⌘I
                </Text>
              }
            >
              Invite people
            </Menu.Item>
            <Menu.Item description="No description wrapper on this item">Plain item</Menu.Item>
            <Menu.Item>Plain item</Menu.Item>
            <Menu.Divider />
            <Menu.Item color="red" description="Moves the file to trash">
              Delete file
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ))}
    </div>
  );
}
