# Group
Package: @mantine/core
Import: import { Group } from '@mantine/core';
Description: Compose elements and components in a horizontal flex container

## Usage

`Group` is a horizontal flex container. If you need a vertical flex container, use [Stack](https://mantine.dev/core/stack)
component instead. If you need to have full control over flex container properties, use [Flex](https://mantine.dev/core/flex) component.

#### Example: usage

```tsx
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
```


## preventGrowOverflow

`preventGrowOverflow` prop allows you to control how `Group` children should behave when there is not enough
space to fit them all on one line. By default, children are not allowed to take more space than
`(1 / children.length) * 100%` of parent width (`preventGrowOverflow` is set to `true`). To change
this behavior, set `preventGrowOverflow` to `false` and children will be allowed to grow and take
as much space as they need.

#### Example: preventGrowOverflow

```tsx
import { Group, Button, Box, Text } from '@mantine/core';

function Demo() {
  return (
    <Box style={{ overflow: 'hidden' }}>
      <Box maw={500} p="md" mx="auto" bg="var(--mantine-color-blue-light)">
        <Text size="sm" mb={5}>
          preventGrowOverflow: true – each child width is always limited to 33% of parent width
          (since there are 3 children)
        </Text>

        <Group grow wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>

        <Text size="sm" mb={5} mt="md">
          preventGrowOverflow: false – children will grow based on their content, they can take more
          than 33% of parent width
        </Text>

        <Group grow preventGrowOverflow={false} wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>
      </Box>
    </Box>
  );
}
```


## Group children

**!important** `Group` works correctly only with React elements.
Strings, numbers, fragments may have incorrect styles if `grow` prop is set:

```tsx
// Invalid Group usage, do not do this
import { Group } from '@mantine/core';

function InvalidDemo() {
  return (
    <Group grow>
      First string
      <>
        <div>element inside fragment</div>
        <div>another inside fragment</div>
      </>
      {20}
    </Group>
  );
}
```

<FlexboxGapSupport component="Group" />

## Browser support

Flex component uses CSS flexbox gap to add spacing between children. Flexbox gap is supported by all modern browsers, but if you need to support older browsers, use Space component instead.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | AlignItems | - | Controls <code>align-items</code> CSS property |
| gap | MantineSpacing | - | Key of <code>theme.spacing</code> or any valid CSS value for <code>gap</code>, numbers are converted to rem |
| grow | boolean | - | Determines whether each child element should have <code>flex-grow: 1</code> style |
| justify | JustifyContent | - | Controls <code>justify-content</code> CSS property |
| preventGrowOverflow | boolean | - | Determines whether children should take only dedicated amount of space (<code>max-width</code> style is set based on the number of children) |
| wrap | FlexWrap | - | Controls <code>flex-wrap</code> CSS property |


#### Styles API

Group component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Group-root | Root element |

**Group CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --group-align | Controls `align-items` property |
| root | --group-justify | Controls `justify-content` property |
| root | --group-gap | Controls `gap` property |
| root | --group-wrap | Controls `flex-wrap` property |

**Group data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-grow | - | - |