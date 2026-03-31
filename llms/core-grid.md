# Grid
Package: @mantine/core
Import: import { Grid } from '@mantine/core';
Description: Responsive 12 columns grid system

## Usage

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

The `Grid.Col` `span` prop controls the ratio of column width to the total width of the row.
By default, grid uses a 12 columns layout, so the `span` prop can be any number from 1 to 12.

Examples:

* `<Grid.Col span={3} />` – 3 / 12 = 25% of row width
* `<Grid.Col span={4} />` – 4 / 12 = 33% of row width
* `<Grid.Col span={6} />` – 6 / 12 = 50% of row width
* `<Grid.Col span={12} />` – 12 / 12 = 100% of row width

The `span` prop also supports object syntax to change column width based on viewport width.
It accepts `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12. The syntax
is the same as in [style props](https://mantine.dev/llms/styles-style-props.md).

In the following example `span={{ base: 12, md: 6, lg: 3 }}`:

* `base` – 12 / 12 = 100% of row width when viewport width is less than `md` breakpoint
* `md` – 6 / 12 = 50% of row width when viewport width is between `md` and `lg` breakpoints
* `lg` – 3 / 12 = 25% of row width when viewport width is greater than `lg` breakpoint

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


## Gap

Set the `gap` prop to control spacing between columns and rows. The prop works the same
way as [style props](https://mantine.dev/llms/styles-style-props.md) – you can reference `theme.spacing` values
with `xs`, `sm`, `md`, `lg` and `xl` strings and use object syntax to change gap
based on viewport width:

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gap={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
```


## Row and column gap

Use `rowGap` and `columnGap` props to set different spacing for rows and columns.
`rowGap` and `columnGap` override `gap` prop if both are set:

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gap="md" rowGap="xl" columnGap="sm">
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
      <Grid.Col span={3}>4</Grid.Col>
      <Grid.Col span={3}>5</Grid.Col>
      <Grid.Col span={3}>6</Grid.Col>
      <Grid.Col span={3}>7</Grid.Col>
      <Grid.Col span={3}>8</Grid.Col>
    </Grid>
  );
}
```


## Grow

If the `grow` prop is set, the column will grow to fill the remaining space in the row:

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid grow={true} gap="md">
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

Set the `offset` prop on the `Grid.Col` component to add gaps to the grid. The `offset` prop
supports the same syntax as the `span` prop: a number from 1 to 12 or an object with `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12.

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

Set the `order` prop on the `Grid.Col` component to change the order of columns. The `order` prop
supports the same syntax as the `span` prop: a number from 1 to 12 or an object with `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12.

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

Once the columns' `span` and `offset` sum exceeds the `columns` prop (12 by default),
columns are moved to the next row:

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

You can control the `justify-content` and `align-items` CSS properties with the `justify` and `align` props on the `Grid` component:

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid justify="flex-start" align="flex-start">
      <Grid.Col span={3} h={80}>1</Grid.Col>
      <Grid.Col span={3} h={120}>2</Grid.Col>
      <Grid.Col span={3} h={100}>3</Grid.Col>
    </Grid>
  );
}
```


## Column alignment

Use the `align` prop on individual `Grid.Col` components to control the `align-self` CSS property
for each column. This allows you to override the grid's `align` prop for specific columns:

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid align="stretch">
      <Grid.Col span={4} align="flex-start">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          flex-start
        </div>
      </Grid.Col>
      <Grid.Col span={4} align="center">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          center
        </div>
      </Grid.Col>
      <Grid.Col span={4} align="flex-end">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          flex-end
        </div>
      </Grid.Col>
    </Grid>
  );
}
```


## Auto sized columns

All columns in a row with `span="auto"` grow as much as they can to fill the row.
In the following example, the second column takes up 50% of the row while the other two columns automatically resize to fill the remaining space:

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

By default, grid uses a 12 columns layout. You can change it by setting the `columns` prop on the `Grid` component.
Note that in this case, columns span and offset will be calculated relative to this value.

In the following example, the first column takes 50% with 12 span (12/24), second and third take 25% (6/24):

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


## Browser support

Grid component uses flexbox with native `gap` for layout, which is supported in all modern browsers.

### Container queries

When using `type="container"`, the Grid component uses [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries).
Container queries are supported in the following browsers:

* Chrome 105+
* Safari 16+
* Firefox 110+
* Edge 105+

If you need to support older browsers, use the default `type="media"` which uses standard media queries
instead of container queries.

Example with media queries (default):

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gap="md">
      <Grid.Col span={{ base: 12, md: 6 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>2</Grid.Col>
    </Grid>
  );
}
```

Example with container queries:

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid
      type="container"
      breakpoints={{ xs: '100px', sm: '200px', md: '300px', lg: '400px', xl: '500px' }}
      gap="md"
    >
      <Grid.Col span={{ base: 12, md: 6 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>2</Grid.Col>
    </Grid>
  );
}
```


#### Props

**Grid props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | AlignItems | - | Sets `align-items` |
| breakpoints | GridBreakpoints | - | Breakpoints values, only used with `type="container"` |
| columnGap | StyleProp<MantineSpacing> | - | Column gap, overrides `gap` for horizontal spacing |
| columns | number | - | Number of columns in each row |
| gap | StyleProp<MantineSpacing> | - | Gap between columns and rows, key of `theme.spacing` or any valid CSS value |
| grow | boolean | - | If set, columns in the last row expand to fill all available space |
| justify | JustifyContent | - | Sets `justify-content` |
| overflow | Overflow | - | Sets `overflow` CSS property on the root element |
| rowGap | StyleProp<MantineSpacing> | - | Row gap, overrides `gap` for vertical spacing |
| type | "media" \| "container" | - | Type of queries used for responsive styles |

**Grid.Col props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | StyleProp<AlignSelf> | - | Vertical alignment of the column, controls `align-self` CSS property |
| offset | StyleProp<number> | - | Column start offset – number of empty columns before this column |
| order | StyleProp<number> | - | Column order, use to reorder columns at different viewport sizes |
| span | StyleProp<ColSpan> | - | Column span |


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

**Grid data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-with-gap | CSS variables for gap, rowGap, and columnGap are set. Variables include: --grid-gap, --grid-row-gap, --grid-column-gap, --grid-margin, --grid-col-padding-x, --grid-col-padding-y | true |
| col | data-with-col-vars | CSS variables for column layout are set. Variables include: --col-flex-grow, --col-flex-basis, --col-width, --col-max-width, --col-offset, --col-order, --col-align-self | true |
