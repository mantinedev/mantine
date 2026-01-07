# Table
Package: @mantine/core
Import: import { Table } from '@mantine/core';
Description: Render table with theme styles

## Usage

Table data for all examples:

```tsx
const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];
```

#### Example: usage

```tsx
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```


## data prop

You can use `data` prop to automatically generate table rows from array of React nodes.
`data` prop accepts an object with the following properties:

* `head` – an array of React nodes (`React.ReactNode[]`) to render `Table.Th` in `Table.Thead`
* `foot` – an array of React nodes (`React.ReactNode[]`) to render `Table.Th` in `Table.Tfoot`
* `body` - an array of arrays of React nodes (`React.ReactNode[][]`) to render `Table.Td` in `Table.Tbody`
* `caption` – a React node to render `Table.Caption`

#### Example: data

```tsx
import { Table, TableData } from '@mantine/core';

const tableData: TableData = {
  caption: 'Some elements from periodic table',
  head: ['Element position', 'Atomic mass', 'Symbol', 'Element name'],
  body: [
    [6, 12.011, 'C', 'Carbon'],
    [7, 14.007, 'N', 'Nitrogen'],
    [39, 88.906, 'Y', 'Yttrium'],
    [56, 137.33, 'Ba', 'Barium'],
    [58, 140.12, 'Ce', 'Cerium'],
  ],
};

function Demo() {
  return <Table data={tableData} />;
}
```


## Sticky header

Set `stickyHeader` to make table header sticky. To customize top position of the header use `stickyHeaderOffset` prop:
it is useful when you have a fixed header in your application. For example, Mantine documentation website has a fixed
header with 60px height:

#### Example: stickyHeader

```tsx
import { Table } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>Scroll page to see sticky thead</Table.Caption>
    </Table>
  );
}
```


## Spacing

To control spacing use `horizontalSpacing` and `verticalSpacing` props. Both props support spacing from `theme.spacing` and any valid CSS value to set cell padding:

#### Example: spacingConfigurator

```tsx
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table>
      {/* {...rows} */}
    </Table>
  );
}
```


## Caption and tfoot

Table support tfoot and caption elements. Set `captionSide` prop (top or bottom) to change caption position.

#### Example: captions

```tsx
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr>
      <Table.Th>Element position</Table.Th>
      <Table.Th>Element name</Table.Th>
      <Table.Th>Symbol</Table.Th>
      <Table.Th>Atomic mass</Table.Th>
    </Table.Tr>
  );

  return (
    <Table captionSide="bottom">
      <Table.Caption>Some elements from periodic table</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>{ths}</Table.Tfoot>
    </Table>
  );
}
```


## Striped and rows hover

#### Example: configurator

```tsx
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table>
      {/* {...rows} */}
    </Table>
  );
}
```


## Scroll container

To prevent viewport overflow wrap `Table` with `Table.ScrollContainer`.
The component accepts `minWidth` prop which sets minimum width below which table will be scrollable.

#### Example: scrollContainer

```tsx
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
```


By default, `Table.ScrollContainer` uses [ScrollArea](https://mantine.dev/core/scroll-area), you can change it
to native scrollbars by setting `type="native"`:

#### Example: scrollContainerNative

```tsx
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} type="native">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
```


You can also set `maxHeight` prop on `Table.ScrollContainer` to limit table height:

#### Example: scrollContainerMaxHeight

```tsx
import { Table } from '@mantine/core';

function Demo() {
  const rows = elementsLong.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} maxHeight={300}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
```


## Vertical variant

Set `variant="vertical"` to render table with vertical layout:

#### Example: vertical

```tsx
import { Table } from '@mantine/core';

export function Demo() {
  return (
    <Table variant="vertical" layout="fixed" withTableBorder>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th w={160}>Epic name</Table.Th>
          <Table.Td>7.x migration</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Status</Table.Th>
          <Table.Td>Open</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total issues</Table.Th>
          <Table.Td>135</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total story points</Table.Th>
          <Table.Td>874</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Last updated at</Table.Th>
          <Table.Td>September 26, 2024 17:41:26</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
```


## Tabular numbers

Set `tabularNums` prop to render numbers in tabular style. It sets
`font-variant-numeric: tabular-nums` which makes numbers to have equal width.
This is useful when you have columns with numbers and you want them to be aligned:

#### Example: tabularNums

```tsx
import { NumberFormatter, Table } from '@mantine/core';

const data = [
  { product: 'Apples', unitsSold: 2214411234 },
  { product: 'Oranges', unitsSold: 9983812411 },
  { product: 'Bananas', unitsSold: 1234567890 },
  { product: 'Pineapples', unitsSold: 9948810000 },
  { product: 'Pears', unitsSold: 9933771111 },
];

function Demo() {
  const rows = data.map((item) => (
    <Table.Tr key={item.product}>
      <Table.Td>{item.product}</Table.Td>
      <Table.Td>
        <NumberFormatter value={item.unitsSold} thousandSeparator />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product</Table.Th>
          <Table.Th>Units sold</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```


## Example: Table with row selection

#### Example: rowSelection

```tsx
import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| borderColor | MantineColor | - | Color of table borders, key of <code>theme.colors</code> or any valid CSS color |
| captionSide | "bottom" | "top" | - | Side of the <code>Table.Caption</code> |
| data | TableData | - | Data used to generate table, ignored if <code>children</code> prop is set |
| highlightOnHover | boolean | - | If set, table rows background changes to <code>highlightOnHoverColor</code> when hovered |
| highlightOnHoverColor | MantineColor | - | Background color of table rows when hovered, key of <code>theme.colors</code> or any valid CSS color |
| horizontalSpacing | MantineSpacing | - | Horizontal cells spacing, key of <code>theme.spacing</code> or any valid CSS value for padding, numbers are converted to rem |
| layout | TableLayout | - | Value of <code>table-layout</code> style |
| stickyHeader | boolean | - | If set, <code>Table.Thead</code> is sticky |
| stickyHeaderOffset | string | number | - | Offset from top at which <code>Table.Thead</code> should become sticky |
| striped | boolean | "odd" | "even" | - | If set, every odd/even row background changes to <code>strippedColor</code>, if set to <code>true</code>, then <code>odd</code> value will be used |
| stripedColor | MantineColor | - | Background color of striped rows, key of <code>theme.colors</code> or any valid CSS color |
| tabularNums | boolean | - | If set, <code>font-variant-numeric: tabular-nums</code> style is applied |
| verticalSpacing | MantineSpacing | - | Vertical cells spacing, key of <code>theme.spacing</code> or any valid CSS value for padding, numbers are converted to rem |
| withColumnBorders | boolean | - | If set, the table has borders between columns |
| withRowBorders | boolean | - | If set, the table has borders between rows |
| withTableBorder | boolean | - | If set, the table has the outer border |


#### Styles API

Table component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Table selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| table | .mantine-Table-table | Root `table` element (`Table` component) |
| thead | .mantine-Table-thead | `thead` element (`Table.Thead` component) |
| tbody | .mantine-Table-tbody | `tbody` element (`Table.Tbody` component) |
| tfoot | .mantine-Table-tfoot | `tfoot` element (`Table.Tfoot` component) |
| tr | .mantine-Table-tr | `tr` element (`Table.Tr` component) |
| th | .mantine-Table-th | `th` element (`Table.Th` component) |
| td | .mantine-Table-td | `td` element (`Table.Td` component) |
| caption | .mantine-Table-caption | `caption` element (`Table.Caption` component) |

**Table CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| table | --table-border-color | Controls `border-color` of all elements inside table |
| table | --table-layout | Controls `table-layout` of the table element, auto by default |
| table | --table-caption-side | Controls caption-side of the table element, `bottom` by default |
| table | --table-striped-color | Controls `background-color` of even/odd `Table.Tr` elements |
| table | --table-sticky-header-offset | Controls `top` offset of sticky header |

**Table data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| table | data-with-table-border | - | - |

**Tableofcontents selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Tableofcontents-root | Root element |
| control | .mantine-Tableofcontents-control | Control element |

**Tableofcontents CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --toc-bg | Background color of active control |
| root | --toc-color | Text color of active control |
| root | --toc-depth-offset | Offset between of control depending on depth |
| root | --toc-radius | Border-radius of control |
| root | --toc-size | Controls font-size and padding of all elements |

**Tableofcontents data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | data-active | Associated heading is currently the best match in the viewport | - |