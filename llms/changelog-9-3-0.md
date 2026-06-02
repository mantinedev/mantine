# Changelog930

## Support Mantine development

You can now sponsor Mantine development with [OpenCollective](https://opencollective.com/mantinedev).
All funds are used to improve Mantine and create new features and components.

## Pagination responsive layout

[Pagination](https://mantine.dev/llms/core-pagination.md) component now supports `layout="responsive"` prop that uses CSS container
queries to switch between page number buttons and a compact "Page X of Y" label based on the available width.

```tsx
import { Box, Pagination } from '@mantine/core';

function Demo() {
  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 200, maxWidth: '100%' }}>
      <Pagination total={20} layout="responsive" />
    </Box>
  );
}
```


## Text textWrap prop

[Text](https://mantine.dev/llms/core-text.md) and [Blockquote](https://mantine.dev/llms/core-blockquote.md) components now support
`textWrap` prop that controls the `text-wrap` CSS property. You can use it to balance line lengths
or prevent orphaned words in paragraphs.

```tsx
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text textWrap="wrap">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Text>
  );
}
```


## use-splitter hook

New [use-splitter](https://mantine.dev/llms/hooks-use-splitter.md) hook provides resizable split-pane functionality
with pointer drag, keyboard navigation (WAI-ARIA Window Splitter pattern), collapsible panels
and min/max constraints:

```tsx
import React from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

const colors = ['var(--mantine-color-blue-filled)', 'var(--mantine-color-teal-filled)'];
const labels = ['Panel A', 'Panel B'];

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 50, min: 20 },
      { defaultSize: 50, min: 20 },
    ],
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      {splitter.sizes.map((size, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              {...splitter.getHandleProps({ index: i - 1 })}
              style={{
                width: 4,
                flexShrink: 0,
                cursor: 'col-resize',
                touchAction: 'none',
                backgroundColor: 'var(--mantine-color-default-border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 8,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--mantine-radius-xs)',
                  backgroundColor: 'var(--mantine-color-default)',
                  border: '1px solid var(--mantine-color-default-border)',
                  color: 'var(--mantine-color-dimmed)',
                }}
              >
                <DotsSixVerticalIcon />
              </div>
            </div>
          )}
          <div
            style={{
              width: `${size}%`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[i],
              color: 'var(--mantine-color-white)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              gap: 2,
            }}
          >
            {labels[i]} ({Math.round(size)}%)
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
```


## Splitter component

New [Splitter](https://mantine.dev/llms/core-splitter.md) component provides declarative resizable split pane layout
built on top of the [use-splitter](https://mantine.dev/llms/hooks-use-splitter.md) hook:

```tsx
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter orientation="horizontal" h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}
```


## CodeHighlight line numbers

[CodeHighlight](https://mantine.dev/llms/x-code-highlight.md) component now supports `withLineNumbers` prop
to display line numbers alongside the code:


```tsx
...
```

```tsx
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = `...`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" withLineNumbers />;
}
```


## OverflowList collapseFrom

[OverflowList](https://mantine.dev/llms/core-overflow-list.md) component now supports `collapseFrom` prop that controls
from which direction items are collapsed when they overflow. Set `collapseFrom="start"` to
collapse items from the beginning – this is useful for breadcrumb-like patterns where
the last items should remain visible.

```tsx
// OverflowListDemo.tsx
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        collapseFrom="start"
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}

// data.ts
export const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];
```


## Textarea bottomSection

[Textarea](https://mantine.dev/llms/core-textarea.md) component now supports `bottomSection` prop that renders content
inside the input border at the bottom. This is useful for displaying character counters
or other supplementary information:

```tsx
import { useState } from 'react';
import { Text, Textarea } from '@mantine/core';

function Demo() {
  const maxLength = 500;
  const [value, setValue] = useState('');

  return (
    <Textarea
      label="Your message"
      placeholder="Type your message..."
      autosize
      minRows={4}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value.slice(0, maxLength))}
      bottomSection={
        <Text size="xs" c="dimmed">
          {value.length}/{maxLength} characters
        </Text>
      }
    />
  );
}
```


## Combobox floatingHeight

[Combobox](https://mantine.dev/llms/core-combobox.md), [Select](https://mantine.dev/llms/core-select.md), [MultiSelect](https://mantine.dev/llms/core-multi-select.md),
[Autocomplete](https://mantine.dev/llms/core-autocomplete.md) and [TagsInput](https://mantine.dev/llms/core-tags-input.md) now support
`floatingHeight="viewport"`. When set, the dropdown grows to fill the available vertical
space in the viewport and the `flip` middleware is disabled – useful when working with
large option lists:

```tsx
import { useState } from 'react';
import { Combobox, Input, InputBase, ScrollArea, useCombobox } from '@mantine/core';

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia',
  'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
  'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso',
  'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Chad', 'Chile', 'China', 'Colombia',
  'Comoros', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti',
  'Dominica', 'Ecuador', 'Egypt', 'El Salvador', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji',
  'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada',
  'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia',
  'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya',
  'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
  'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives',
  'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = countries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      floatingHeight="viewport"
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick a country</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize mah="var(--combobox-floating-options-max-height)" type="scroll">
            {options}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## Menu submenu safe polygon

[Menu](https://mantine.dev/llms/core-menu.md) submenus now use a safe polygon when moving the cursor from
the parent item to the dropdown. This allows you to move the cursor diagonally
across other menu items without accidentally closing the submenu.

```tsx
import { Button, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu width={200} position="bottom-start">
      <Menu.Target>
        <Button>Toggle Menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Dashboard</Menu.Item>

        <Menu.Sub openDelay={120} closeDelay={150}>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Products</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>All products</Menu.Item>
            <Menu.Item>Categories</Menu.Item>
            <Menu.Item>Tags</Menu.Item>
            <Menu.Item>Attributes</Menu.Item>
            <Menu.Item>Shipping classes</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>

        <Menu.Item>Customers</Menu.Item>
        <Menu.Item>Reports</Menu.Item>

        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Orders</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>Open</Menu.Item>
            <Menu.Item>Completed</Menu.Item>
            <Menu.Item>Cancelled</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>

        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Settings</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Security</Menu.Item>
            <Menu.Item>Notifications</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Menu search

[Menu](https://mantine.dev/llms/core-menu.md) now supports `Menu.Search` – a search input that filters items
without taking focus away from the input. Use `ArrowUp`/`ArrowDown` to move the
highlight, `Enter` to trigger the highlighted item. Filtering logic is controlled
by the user: pass `value`/`onChange` and filter `Menu.Item` children based on the query.
The search value is cleared automatically after the menu close transition completes; set
`clearSearchOnClose={false}` to keep the query between openings.

```tsx
import { useState } from 'react';
import { Button, Menu, Text } from '@mantine/core';

const data = [
  'Dashboard',
  'Customers',
  'Products',
  'Orders',
  'Reports',
  'Settings',
  'Integrations',
  'Billing',
  'Team members',
  'Help center',
];

function Demo() {
  const [query, setQuery] = useState('');
  const items = data.filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()));

  return (
    <Menu shadow="md" width={240}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Search
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          placeholder="Search items"
        />

        {items.length > 0 ? (
          items.map((item) => <Menu.Item key={item}>{item}</Menu.Item>)
        ) : (
          <Text c="dimmed" size="sm" ta="center" py="xs">
            Nothing found
          </Text>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Menu checkbox and radio items

[Menu](https://mantine.dev/llms/core-menu.md) now supports `Menu.CheckboxItem`, `Menu.RadioItem`, and `Menu.RadioGroup`
for building option menus. Checkbox and radio items render an indicator slot at the start
and do not close the menu on click by default. The new `alignItemsLabels` prop on `Menu`
controls how indicator slot space is reserved so labels stay aligned when mixing plain
and indicator items.

```tsx
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
```


```tsx
import { useState } from 'react';
import { Button, Menu } from '@mantine/core';

function Demo() {
  const [sort, setSort] = useState('newest');

  return (
    <Menu shadow="md" width={220} closeOnItemClick={false}>
      <Menu.Target>
        <Button>Sort by</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Order</Menu.Label>
        <Menu.RadioGroup value={sort} onChange={setSort}>
          <Menu.RadioItem value="newest">Newest first</Menu.RadioItem>
          <Menu.RadioItem value="oldest">Oldest first</Menu.RadioItem>
          <Menu.RadioItem value="popular">Most popular</Menu.RadioItem>
          <Menu.RadioItem value="commented">Most commented</Menu.RadioItem>
        </Menu.RadioGroup>
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Menu context menu

[Menu](https://mantine.dev/llms/core-menu.md) now supports `Menu.ContextMenu` – a target replacement that opens the
dropdown at the cursor position when the wrapped element is right-clicked. The browser's
default context menu is suppressed, and right-clicking again repositions the dropdown to
the new coordinates.

```tsx
import { Menu, Paper, Text } from '@mantine/core';

function Demo() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.ContextMenu>
        <Paper withBorder p="xl" radius="md" style={{ userSelect: 'none', textAlign: 'center' }}>
          <Text fw={500}>Right-click anywhere inside this area</Text>
          <Text c="dimmed" size="sm" mt={4}>
            The menu will open at the cursor position
          </Text>
        </Paper>
      </Menu.ContextMenu>

      <Menu.Dropdown>
        <Menu.Label>Actions</Menu.Label>
        <Menu.Item>Open</Menu.Item>
        <Menu.Item>Rename</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Divider />
        <Menu.Item color="red">Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Popover context menu

[Popover](https://mantine.dev/llms/core-popover.md) now supports `Popover.ContextMenu` – a target replacement that
opens the dropdown at the cursor position on right-click. Unlike `Menu.ContextMenu`,
`Popover.Dropdown` can contain any content.

```tsx
import { Avatar, Button, Group, Paper, Popover, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={260} shadow="md" position="bottom-start" offset={0}>
      <Popover.ContextMenu>
        <Paper withBorder p="xl" radius="md" style={{ userSelect: 'none', textAlign: 'center' }}>
          <Text fw={500}>Right-click anywhere inside this area</Text>
          <Text c="dimmed" size="sm" mt={4}>
            A popover will open at the cursor position
          </Text>
        </Paper>
      </Popover.ContextMenu>

      <Popover.Dropdown>
        <Stack gap="xs">
          <Group gap="sm" wrap="nowrap">
            <Avatar radius="xl" color="blue">JD</Avatar>
            <div>
              <Text size="sm" fw={500}>Jane Doe</Text>
              <Text size="xs" c="dimmed">jane@example.com</Text>
            </div>
          </Group>
          <Group grow gap="xs">
            <Button size="xs" variant="default">Message</Button>
            <Button size="xs">Follow</Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Menu type-ahead navigation

When focus is inside [Menu](https://mantine.dev/llms/core-menu.md) dropdown (and `Menu.Search` is not used), pressing a
printable character key now moves focus to the next item whose label starts with the typed
character. Pressing the same character cycles through matches, and multiple characters typed
within 500ms match items by full prefix.

```tsx
import { Menu, Button, Text } from '@mantine/core';
import { GearSixIcon, MagnifyingGlassIcon, ImageIcon, ChatCircleIcon, TrashIcon, IconArrowsLeftRight } from '@phosphor-icons/react';

function Demo() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<GearSixIcon size={14} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<ChatCircleIcon size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<ImageIcon size={14} />}>
          Gallery
        </Menu.Item>
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

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight size={14} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<TrashIcon size={14} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Highlight accent and case insensitive matching

[Highlight](https://mantine.dev/llms/core-highlight.md) component now supports `caseInsensitive` and `accentInsensitive`
props. Both are enabled by default – matching is case-insensitive and accent-insensitive,
so `cafe` matches `café`, `CAFÉ`, etc. Set either prop to `false` to opt out:

```tsx
import { Highlight, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb={5}>
          With accent-insensitive matching (default)
        </Text>
        <Highlight highlight="cafe">We visited café and cafe.</Highlight>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          {'With accent-sensitive matching (accentInsensitive={false})'}
        </Text>
        <Highlight highlight="cafe" accentInsensitive={false}>
          We visited café and cafe.
        </Highlight>
      </div>
    </Stack>
  );
}
```


## PieChart and DonutChart labelsType="name"

[PieChart](https://mantine.dev/llms/charts-pie-chart.md) and [DonutChart](https://mantine.dev/llms/charts-donut-chart.md) components now support
`labelsType="name"` to display segment names as labels instead of values or percentages:

```tsx
// Demo.tsx
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} withLabelsLine labelsPosition="outside" labelsType="name" withLabels />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## Tooltip merge arrow position

[Tooltip](https://mantine.dev/llms/core-tooltip.md), [Popover](https://mantine.dev/llms/core-popover.md) and other components based on [Popover](https://mantine.dev/llms/core-popover.md)
now support `arrowPosition="merge"`. When set, the arrow forms a right triangle merged
with the corresponding corner of the dropdown, and the border radius of that corner is removed.

```tsx
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip arrowPosition="center" arrowOffset={10} arrowSize={4} arrowRadius={0} label="Tooltip" withArrow opened position="top-start">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
```


## Popover preventPositionChangeWhenVisible default

[Popover](https://mantine.dev/llms/core-popover.md) and all components built on top of it ([Combobox](https://mantine.dev/llms/core-combobox.md),
[Select](https://mantine.dev/llms/core-select.md), [MultiSelect](https://mantine.dev/llms/core-multi-select.md), [Autocomplete](https://mantine.dev/llms/core-autocomplete.md),
[TagsInput](https://mantine.dev/llms/core-tags-input.md), [Menu](https://mantine.dev/llms/core-menu.md), [HoverCard](https://mantine.dev/llms/core-hover-card.md), [Tooltip](https://mantine.dev/llms/core-tooltip.md),
[ColorInput](https://mantine.dev/llms/core-color-input.md), date pickers and others) now treat `preventPositionChangeWhenVisible`
as `true` by default.

With this behavior, the dropdown picks its side once on open – respecting the `position` prop
when there is enough room – and then stays on that side until the dropdown is closed. Scrolling,
resizing, or changes to the dropdown content (for example narrowing a searchable `Select`) no
longer cause the dropdown to flip between top and bottom while it is open. The next open recalculates
the side from scratch.

The flip is also more predictable: when neither side fits, the dropdown falls back to the
preferred `position` prop instead of the side with marginally more space.

To restore the previous behavior – where the dropdown could re-flip while open whenever
available space changed – pass `preventPositionChangeWhenVisible={false}`:

```tsx
<Select
  comboboxProps={{ preventPositionChangeWhenVisible: false }}
  data={['React', 'Angular', 'Svelte']}
/>
```

## Schedule getCurrentTime

[DayView](https://mantine.dev/llms/schedule-day-view.md) and [WeekView](https://mantine.dev/llms/schedule-week-view.md) components now support `getCurrentTime`
prop – a function that returns the current time used by the current time indicator. It is called on
every tick, so the indicator keeps updating automatically. Combined with the timezone-agnostic event
strings, this allows displaying the indicator in any timezone without re-implementing the update loop:

```tsx
// Demo.tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Select, Stack } from '@mantine/core';
import { DayView } from '@mantine/schedule';
import { getEvents } from './data';

dayjs.extend(utc);
dayjs.extend(timezone);

const timezones = ['UTC', 'America/New_York', 'Europe/Berlin', 'Asia/Kolkata', 'Asia/Tokyo'];

function Demo() {
  const [tz, setTz] = useState('UTC');

  // getCurrentTime is called on every tick, so the indicator keeps updating
  const getCurrentTime = () => dayjs().tz(tz).format('YYYY-MM-DD HH:mm:ss');
  const currentDate = getCurrentTime().split(' ')[0];

  return (
    <Stack>
      <Select
        label="Display timezone"
        data={timezones}
        value={tz}
        onChange={(value) => setTz(value!)}
        allowDeselect={false}
      />

      <DayView
        date={currentDate}
        events={getEvents(currentDate)}
        getCurrentTime={getCurrentTime}
        startScrollTime={dayjs(getCurrentTime()).subtract(2, 'hour').format('HH:mm:ss')}
        withCurrentTimeIndicator
        withCurrentTimeBubble
      />
    </Stack>
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleEventData } from '@mantine/schedule';

export function getEvents(date: string): ScheduleEventData[] {
  return [
    { id: 1, title: 'Morning standup', start: `${date} 09:00:00`, end: `${date} 09:30:00`, color: 'blue' },
    { id: 2, title: 'Team meeting', start: `${date} 12:00:00`, end: `${date} 13:00:00`, color: 'teal' },
    { id: 3, title: 'Code review', start: `${date} 16:00:00`, end: `${date} 17:00:00`, color: 'grape' },
  ];
}
```

