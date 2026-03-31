# Indicator
Package: @mantine/core
Import: import { Indicator } from '@mantine/core';
Description: Display element at the corner of another element

## Usage

```tsx
import { Indicator, Avatar } from '@mantine/core';

function Demo() {
  return (
    <Indicator color="blue" position="top-end" radius="xl" size={10} disabled={false} withBorder={false} processing={false}>
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

When the target element has a fixed width, set the `inline` prop to add `display: inline-block;` styles to
the Indicator container. Alternatively, you can set width and height with the `style` prop if you still want the root
element to keep `display: block`.

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

Set `offset` to change the indicator position. It is useful when the Indicator component is
used with children that have border-radius. You can provide a number for uniform offset or an
object with `x` and `y` properties for separate horizontal and vertical offsets:

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


## Max value

Set `maxValue` prop to display `{maxValue}+` when the label exceeds the maximum value. This is useful for
notification counters that should not show exact large numbers:

```tsx
import { Avatar, Group, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Indicator inline label={50} maxValue={99}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label={100} maxValue={99}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>

      <Indicator inline label={1000} maxValue={999}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
        />
      </Indicator>
    </Group>
  );
}
```


## Show zero

By default, the indicator is displayed when the label is `0`. Set `showZero={false}` to hide the indicator
when the label is `0`:

```tsx
import { Avatar, Group, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Indicator inline label={0}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label={0} showZero={false}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>
    </Group>
  );
}
```


## Auto contrast

Set `autoContrast` prop to automatically adjust text color based on the background color to ensure
readable contrast:

```tsx
import { Avatar, Group, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Indicator inline label="99" color="lime.4">
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label="99" color="lime.4" autoContrast>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>

      <Indicator inline label="99" color="cyan.9">
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
        />
      </Indicator>

      <Indicator inline label="99" color="cyan.9" autoContrast>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
        />
      </Indicator>
    </Group>
  );
}
```



#### Props

**Indicator props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color value |
| disabled | boolean | - | Hides the indicator when set |
| inline | boolean | - | Changes container display from block to inline-block, use when wrapping elements with fixed width |
| label | React.ReactNode | - | Label displayed inside the indicator, for example, notification count |
| maxValue | number | - | Maximum value to display. If label is a number greater than this value, it will be displayed as `{maxValue}+` |
| offset | number \| { x: number; y: number; } | - | Distance in pixels to offset the indicator from its default position, useful for elements with border-radius. Can be a number for uniform offset or an object with `x` and `y` properties for separate horizontal and vertical offsets |
| position | "bottom-end" \| "bottom-start" \| "top-end" \| "top-start" \| "bottom-center" \| "top-center" \| "middle-center" \| "middle-end" \| "middle-start" | - | Indicator position relative to the target element |
| processing | boolean | - | If set, the indicator has processing animation |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| showZero | boolean | - | Determines whether indicator with label `0` should be displayed |
| size | string \| number | - | Indicator width and height |
| withBorder | boolean | - | Adds border to the root element |
| zIndex | string \| number | - | Indicator z-index |


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
| root | data-inline | `inline` prop is set | - |
| indicator | data-with-label | `label` prop is set | - |
| indicator | data-with-border | `withBorder` prop is set | - |
| indicator | data-processing | `processing` prop is set | - |
