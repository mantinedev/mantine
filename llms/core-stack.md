# Stack
Package: @mantine/core
Import: import { Stack } from '@mantine/core';
Description: Compose elements and components in a vertical flex container

## Usage

`Stack` is a vertical flex container. If you need a horizontal flex container, use [Group](https://mantine.dev/core/group)
component instead. If you need to have full control over flex container properties, use [Flex](https://mantine.dev/core/flex) component.

#### Example: configurator

```tsx
import { Stack, Button } from '@mantine/core';

function Demo() {
  return (
    <Stack
      h={300}
      bg="var(--mantine-color-body)"
      
    >
      <Button variant="default">1</Button>
      <Button variant="default">2</Button>
      <Button variant="default">3</Button>
    </Stack>
  );
}
```


<FlexboxGapSupport component="Stack" />

## Browser support

Flex component uses CSS flexbox gap to add spacing between children. Flexbox gap is supported by all modern browsers, but if you need to support older browsers, use Space component instead.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | AlignItems | - | Controls <code>align-items</code> CSS property |
| gap | MantineSpacing | - | Key of <code>theme.spacing</code> or any valid CSS value to set <code>gap</code> property, numbers are converted to rem |
| justify | JustifyContent | - | Controls <code>justify-content</code> CSS property |


#### Styles API

Stack component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Stack selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Stack-root | Root element |

**Stack CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --stack-align | Controls `align-items` property |
| root | --stack-justify | Controls `justify-content` property |
| root | --stack-gap | Controls `gap` property |