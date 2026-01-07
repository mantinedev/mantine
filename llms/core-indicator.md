# Indicator
Package: @mantine/core
Import: import { Indicator } from '@mantine/core';
Description: Display element at the corner of another element

## Usage

#### Example: configurator

```tsx
import { Indicator, Avatar } from '@mantine/core';

function Demo() {
  return (
    <Indicator>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
      />
    </Indicator>
  );
}
```


## Inline

When the target element has a fixed width, set `inline` prop to add `display: inline-block;` styles to
Indicator container. Alternatively, you can set width and height with `style` prop if you still want the root
element to keep `display: block`.

#### Example: inline

```tsx
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline label="New" size={16}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
      />
    </Indicator>
  );
}
```


## Offset

Set `offset` to change indicator position. It is useful when Indicator component is
used with children that have border-radius:

#### Example: offset

```tsx
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline size={16} offset={7} position="bottom-end" color="red" withBorder>
      <Avatar
        size="lg"
        radius="xl"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
      />
    </Indicator>
  );
}
```


## Processing animation

#### Example: processing

```tsx
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline processing color="red" size={12}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
      />
    </Indicator>
  );
}
```


## Disabled

Set `disabled` to hide the indicator:

#### Example: disabled

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Avatar, Indicator, Button, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure();

  return (
    <Stack align="center">
      <Indicator inline disabled={!visible} color="red" size={12}>
        <Avatar
          size="lg"
          radius="sm"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"
        />
      </Indicator>
      <Button onClick={toggle}>Toggle indicator</Button>
    </Stack>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color value |
| disabled | boolean | - | If set, the indicator is hidden |
| inline | boolean | - | Determines whether the indicator container should be an inline element |
| label | React.ReactNode | - | Label displayed inside the indicator, for example, notification count |
| offset | number | - | Indicator offset relative to the target element, usually used for elements with border-radius |
| position | "bottom-end" | "bottom-start" | "top-end" | "top-start" | "bottom-center" | "top-center" | "middle-center" | "middle-end" | "middle-start" | - | Indicator position relative to the target element |
| processing | boolean | - | If set, the indicator has processing animation |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code> |
| size | string | number | - | Indicator width and height |
| withBorder | boolean | - | Adds border to the root element |
| zIndex | string | number | - | Indicator z-index |


#### Styles API

Indicator component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Indicator selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Indicator-root | Root element |
| indicator | .mantine-Indicator-indicator | Indicator element |

**Indicator CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --indicator-bottom | Controls `bottom` style |
| root | --indicator-left | Controls `left` style |
| root | --indicator-right | Controls `right` style |
| root | --indicator-top | Controls `top` style |
| root | --indicator-radius | Controls `border-radius` |
| root | --indicator-size | Controls `min-width` and `height` |
| root | --indicator-translate-x | Controls `translateX` style, used for positioning |
| root | --indicator-translate-y | Controls `translateY` style, used for positioning |
| root | --indicator-z-index | Controls `z-index` style |
| root | --indicator-color | Controls `background-color` |
| root | --indicator-text-color | Controls `color` |

**Indicator data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-inline | - | - |
| indicator | data-with-label | - | - |
| indicator | data-with-border | - | - |
| indicator | data-processing | - | - |