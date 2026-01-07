# Grid
Package: @mantine/core
Import: import { Grid } from '@mantine/core';
Description: Responsive 12 columns grid system

## Usage

#### Example: usage

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
```


## Columns span

`Grid.Col` `span` prop controls the ratio of column width to the total width of the row.
By default, grid uses 12 columns layout, so `span` prop can be any number from 1 to 12.

Examples:

* `<Grid.Col span={3} />` – 3 / 12 = 25% of row width
* `<Grid.Col span={4} />` – 4 / 12 = 33% of row width
* `<Grid.Col span={6} />` – 6 / 12 = 50% of row width
* `<Grid.Col span={12} />` – 12 / 12 = 100% of row width

`span` prop also supports object syntax to change column width based on viewport width,
it accepts `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12. The syntax
is the same as in [style props](https://mantine.dev/styles/style-props).

In the following example `span={{ base: 12, md: 6, lg: 3 }}`:

* `base` – 12 / 12 = 100% of row width when viewport width is less than `md` breakpoint
* `md` – 6 / 12 = 50% of row width when viewport width is between `md` and `lg` breakpoints
* `lg` – 3 / 12 = 25% of row width when viewport width is greater than `lg` breakpoint

#### Example: responsive

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
```


## Gutter

Set `gutter` prop to control spacing between columns. The prop works the same
way as [style props](https://mantine.dev/styles/style-props) – you can reference `theme.spacing` values
with `xs`, `sm`, `md`, `lg` and `xl` strings and use object syntax to change gutter
based on viewport width:

#### Example: gutter

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
```


## Grow

If `grow` prop is set, column will grow to fill the remaining space in the row:

#### Example: growConfigurator

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
      <Grid.Col span={4}>5</Grid.Col>
    </Grid>
  );
}
```


## Column offset

Set `offset` prop on `Grid.Col` component to add gaps to the grid. `offset` prop
supports the same syntax as `span` prop: a number from 1 to 12 or an object with `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12.

#### Example: offset

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3} offset={3}>3</Grid.Col>
    </Grid>
  );
}
```


## Order

Set the `order` prop on `Grid.Col` component to change the order of columns. `order` prop
supports the same syntax as `span` prop: a number from 1 to 12 or an object with `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12.

#### Example: order

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>3</Grid.Col>
      <Grid.Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>1</Grid.Col>
    </Grid>
  );
}
```


## Multiple rows

Once columns `span` and `offset` sum exceeds `columns` prop (12 by default),
columns are moved to the next row:

#### Example: rows

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
    </Grid>
  );
}
```


## Justify and align

You can control `justify-content` and `align-items` CSS properties with `justify` and `align` props on `Grid` component:

#### Example: flexConfigurator

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} h={80}>1</Grid.Col>
      <Grid.Col span={3} h={120}>2</Grid.Col>
      <Grid.Col span={3} h={100}>3</Grid.Col>
    </Grid>
  );
}
```


## Auto sized columns

All columns in a row with `span="auto"` grow as much as they can to fill the row.
In the following example, the second column takes up 50% of the row while the other two columns automatically resize to fill the remaining space:

#### Example: auto

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="auto">1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span="auto">3</Grid.Col>
    </Grid>
  );
}
```


## Fit column content

If you set `span="content"`, the column's size will automatically adjust to match the width of its content:

#### Example: content

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="content">fit content</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
```


## Change columns count

By default, grid uses 12 columns layout, you can change it by setting `columns` prop on `Grid` component.
Note that in this case, columns span and offset will be calculated relative to this value.

In the following example, first column takes 50% with 12 span (12/24), second and third take 25% (6/24):

#### Example: columns

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}
```


## Container queries

To use [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
instead of media queries, set `type="container"`. With container queries, all responsive values
are adjusted based on the container width, not the viewport width.

Note that, when using container queries, it is also required to set `breakpoints` prop
to the exact container width values.

To see how the grid changes, resize the root element of the demo
with the resize handle located at the bottom right corner of the demo:

#### Example: container

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only.
    // It is not required in real projects.
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <Grid
        type="container"
        breakpoints={{ xs: '100px', sm: '200px', md: '300px', lg: '400px', xl: '500px' }}
      >
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
      </Grid>
    </div>
  );
}
```


## overflow: hidden

By default, `Grid` has `overflow: visible` style on the root element. In some cases
you might want to change it to `overflow: hidden` to prevent negative margins from
overflowing the grid container. For example, if you use `Grid` without parent container
which has padding.

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid overflow="hidden">
      <Grid.Col span={6}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | AlignItems | - | Sets <code>align-items</code> |
| breakpoints | GridBreakpoints | - | Breakpoints values, only used with <code>type="container"</code> |
| columns | number | - | Number of columns in each row |
| grow | boolean | - | If set, columns in the last row expand to fill all available space |
| gutter | StyleProp<MantineSpacing> | - | Gutter between columns, key of <code>theme.spacing</code> or any valid CSS value |
| justify | JustifyContent | - | Sets <code>justify-content</code> |
| overflow | Overflow | - | Sets <code>overflow</code> CSS property on the root element |
| type | "media" | "container" | - | Type of queries used for responsive styles |


#### Styles API

Grid component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Grid selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| container | .mantine-Grid-container | Container element, only used with `type="container"` prop |
| root | .mantine-Grid-root | Root element |
| inner | .mantine-Grid-inner | Columns wrapper |
| col | .mantine-Grid-col | `Grid.Col` root element |

**Grid CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --grid-overflow | Controls `overflow` property |
| root | --grid-align | Controls `align-items` property |
| root | --grid-justify | Controls `justify-content` property |