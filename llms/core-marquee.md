# Marquee
Package: @mantine/core
Import: import { Marquee } from '@mantine/core';
Description: Create continuous scrolling animation for content

## Usage

`Marquee` component creates a continuous scrolling animation for its children.
It is commonly used for displaying logos, testimonials, or any repeating content.

```tsx
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee gap="lg">
      <MantineLogo width={80} type="full" color="blue" />
      <MantineLogo width={80} type="full" color="cyan" />
      <MantineLogo width={80} type="full" color="teal" />
      <MantineLogo width={80} type="full" color="green" />
      <MantineLogo width={80} type="full" color="lime" />
      <MantineLogo width={80} type="full" color="yellow" />
      <MantineLogo width={80} type="full" color="orange" />
      <MantineLogo width={80} type="full" color="red" />
    </Marquee>
  );
}
```


## Pause on hover

Set `pauseOnHover` prop to pause the animation when the user hovers over the component:

```tsx
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee pauseOnHover>
      <MantineLogo width={80} type="full" color="blue" />
      <MantineLogo width={80} type="full" color="cyan" />
      <MantineLogo width={80} type="full" color="teal" />
      <MantineLogo width={80} type="full" color="green" />
      <MantineLogo width={80} type="full" color="lime" />
      <MantineLogo width={80} type="full" color="yellow" />
      <MantineLogo width={80} type="full" color="orange" />
      <MantineLogo width={80} type="full" color="red" />
    </Marquee>
  );
}
```


## Vertical orientation

Set `orientation="vertical"` to scroll content vertically. Note that you need to set
a fixed height on the container for vertical scrolling:

```tsx
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee orientation="vertical" h={300}>
      <MantineLogo height={40} type="full" color="blue" />
      <MantineLogo height={40} type="full" color="cyan" />
      <MantineLogo height={40} type="full" color="teal" />
      <MantineLogo height={40} type="full" color="green" />
      <MantineLogo height={40} type="full" color="lime" />
      <MantineLogo height={40} type="full" color="yellow" />
      <MantineLogo height={40} type="full" color="orange" />
      <MantineLogo height={40} type="full" color="red" />
    </Marquee>
  );
}
```


## Multiple rows

You can combine multiple `Marquee` components with different directions to create
more complex layouts:

```tsx
import { Marquee, Stack } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Stack>
      <Marquee>
        <MantineLogo height={20} type="full" color="blue" />
        <MantineLogo height={20} type="full" color="cyan" />
        <MantineLogo height={20} type="full" color="teal" />
        <MantineLogo height={20} type="full" color="green" />
      </Marquee>
      <Marquee reverse>
        <MantineLogo height={20} type="full" color="lime" />
        <MantineLogo height={20} type="full" color="yellow" />
        <MantineLogo height={20} type="full" color="orange" />
        <MantineLogo height={20} type="full" color="red" />
      </Marquee>
    </Stack>
  );
}
```


## Fade edges

By default, `Marquee` displays gradient fade on edges to create a smooth transition effect.
You can customize the fade using the following props:

* `fadeEdges` – enables/disables fade gradient (default: `true`)
* `fadeEdgeColor` – color of the fade gradient (default: `var(--mantine-color-body)`)
* `fadeEdgeSize` – size of the fade area (default: `5%`)

```tsx
import { Marquee, Stack, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Stack>
      <div>
        <Text size="sm" mb="xs">Default fade (5%)</Text>
        <Marquee>
          <MantineLogo width={80} type="full" color="blue" />
          <MantineLogo width={80} type="full" color="cyan" />
          <MantineLogo width={80} type="full" color="teal" />
          <MantineLogo width={80} type="full" color="green" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">Larger fade (15%)</Text>
        <Marquee fadeEdgeSize="15%">
          <MantineLogo width={80} type="full" color="lime" />
          <MantineLogo width={80} type="full" color="yellow" />
          <MantineLogo width={80} type="full" color="orange" />
          <MantineLogo width={80} type="full" color="red" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">Custom fade color</Text>
        <Marquee fadeEdgeColor="var(--mantine-color-blue-light)">
          <MantineLogo width={80} type="full" color="violet" />
          <MantineLogo width={80} type="full" color="grape" />
          <MantineLogo width={80} type="full" color="pink" />
          <MantineLogo width={80} type="full" color="red" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">No fade</Text>
        <Marquee fadeEdges={false}>
          <MantineLogo width={80} type="full" color="blue" />
          <MantineLogo width={80} type="full" color="teal" />
          <MantineLogo width={80} type="full" color="green" />
          <MantineLogo width={80} type="full" color="yellow" />
        </Marquee>
      </div>
    </Stack>
  );
}
```


## Customization

Use the following props to customize the marquee behavior:

* `reverse` – reverses animation direction
* `pauseOnHover` – pauses animation on hover
* `orientation` – `horizontal` (default) or `vertical` scroll direction
* `repeat` – number of times children are repeated for seamless scrolling (default: 4)
* `duration` – animation duration in ms (default: 40000)
* `gap` – gap between repeated children, key of `theme.spacing` or any valid CSS value

```tsx
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee reverse={false} pauseOnHover={false} orientation="horizontal" repeat={4} duration={40000} gap="md" fadeEdges={true} mah={200} maw={400}>
      <MantineLogo width={120} type="full" color="blue" />
      <MantineLogo width={120} type="full" color="cyan" />
      <MantineLogo width={120} type="full" color="teal" />
      <MantineLogo width={120} type="full" color="green" />
      <MantineLogo width={120} type="full" color="lime" />
      <MantineLogo width={120} type="full" color="yellow" />
      <MantineLogo width={120} type="full" color="orange" />
      <MantineLogo width={120} type="full" color="red" />
    </Marquee>
  );
}
```



#### Props

**Marquee props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Content to scroll |
| duration | number | - | Animation duration in ms |
| fadeEdgeColor | string | - | Color of the fade gradient, |
| fadeEdgeSize | string | - | Size of the fade gradient, |
| fadeEdges | boolean | - | Whether to show gradient fade on edges, |
| gap | MantineSpacing | - | Gap between repeated children, key of `theme.spacing` or any valid CSS value |
| orientation | "horizontal" \| "vertical" | - | Scroll orientation |
| pauseOnHover | boolean | - | Pauses animation on hover |
| repeat | number | - | Number of times children are repeated inline for seamless scrolling |
| reverse | boolean | - | Reverses animation direction |


#### Styles API

Marquee component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Marquee selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Marquee-root | Root element |
| content | .mantine-Marquee-content | Animated scrolling container |
| group | .mantine-Marquee-group | Repeated children wrapper |

**Marquee CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --marquee-duration | Controls animation duration |
| root | --marquee-gap | Controls gap between items |
| root | --marquee-repeat | Number of times content is repeated |
| root | --marquee-fade-color | Controls the fade edge gradient color |
| root | --marquee-fade-size | Controls the size of the fade gradient |

**Marquee data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-orientation | Value depends on `orientation` prop | horizontal \| vertical |
| root | data-reverse | `reverse` prop is set | - |
| root | data-pause-on-hover | `pauseOnHover` prop is set | - |
| root | data-fade-edges | `fadeEdges` prop is `true` (default) | - |
