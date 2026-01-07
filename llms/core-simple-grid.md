# SimpleGrid
Package: @mantine/core
Import: import { SimpleGrid } from '@mantine/core';
Description: Responsive grid in which each item takes equal amount of space

## Usage

`SimpleGrid` is a responsive grid system with equal-width columns.
It uses CSS grid layout. If you need to set different widths for columns, use
[Grid](https://mantine.dev/core/grid) component instead.

#### Example: usage

```tsx
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
```


## spacing and verticalSpacing props

`spacing` prop is used both for horizontal and vertical spacing if `verticalSpacing` is not set:

```tsx
import { SimpleGrid } from '@mantine/core';

// `spacing` is used for both horizontal and vertical spacing
const Spacing = () => <SimpleGrid spacing="xl" />;

// `spacing` is used for horizontal spacing, `verticalSpacing` for vertical
const VerticalSpacing = () => (
  <SimpleGrid spacing="xl" verticalSpacing="lg" />
);
```

## Responsive props

`cols`, `spacing` and `verticalSpacing` props support object notation for responsive values,
it works the same way as [style props](https://mantine.dev/styles/style-props): the object may have `base`, `xs`,
`sm`, `md`, `lg` and `xl` key, and values from those keys will be applied according to current
viewport width.

In the following example, `cols={{ base: 1, sm: 2, lg: 5 }}` means:

* 1 column if viewport width is less than `sm` breakpoint
* 2 columns if viewport width is between `sm` and `lg` breakpoints
* 5 columns if viewport width is greater than `lg` breakpoint

Same logic applies to `spacing` and `verticalSpacing` props.

#### Example: responsive

```tsx
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
```


## Container queries

To use [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
instead of media queries, set `type="container"`. With container queries, grid columns and spacing
will be adjusted based on the container width, not the viewport width.

Note that, when using container queries, `cols`, `spacing` and `verticalSpacing` props cannot
reference `theme.breakpoints` values in keys. It is required to use exact px or em values.

To see how the grid changes, resize the root element of the demo
with the resize handle located at the bottom right corner of the demo:

#### Example: container

```tsx
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // it is not required in real projects
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <SimpleGrid
        type="container"
        cols={{ base: 1, '300px': 2, '500px': 5 }}
        spacing={{ base: 10, '300px': 'xl' }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </SimpleGrid>
    </div>
  );
}
```


## Browser support

`SimpleGrid` uses [CSS Grid Layout](https://caniuse.com/css-grid), it is supported in all modern browsers.
If you need to support older browsers, use [Grid](https://mantine.dev/core/grid) (flexbox based) component instead.

When `type="container"` is set, `SimpleGrid` uses [container queries](https://caniuse.com/css-container-queries).
Since February 2023, container queries are supported in all modern browsers. If you need to support older browsers,
do not use container queries option.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| cols | StyleProp<number> | - | Number of columns |
| spacing | StyleProp<MantineSpacing> | - | Spacing between columns |
| type | "media" | "container" | - | Determines typeof of queries that are used for responsive styles |
| verticalSpacing | StyleProp<MantineSpacing> | - | Spacing between rows |


#### Styles API

SimpleGrid component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**SimpleGrid selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-SimpleGrid-root | Root element |
| container | .mantine-SimpleGrid-container | Container element, available only when `type="container"` is set |