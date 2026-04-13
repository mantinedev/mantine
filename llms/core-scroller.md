# Scroller
Package: @mantine/core
Import: import { Scroller } from '@mantine/core';
Description: Horizontal scroll container with navigation controls

## Usage

`Scroller` is a horizontal scroll container that displays navigation controls (chevron buttons)
when content overflows its container. It supports native scrolling via trackpad, shift + mouse wheel,
or touch gestures.

```tsx
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
```


## Mouse drag scrolling

Set `draggable` prop to enable scrolling by clicking and dragging with the mouse:

```tsx
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller draggable>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
```


## Scroll amount

Use the `scrollAmount` prop to control how many pixels the container scrolls when clicking
the navigation buttons. The default value is `200`.

```tsx
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller scrollAmount={300}>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 30 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
```


## Control size

Use the `controlSize` prop to change the size of the navigation buttons. It accepts any valid
Mantine size value (`xs`, `sm`, `md`, `lg`, `xl`) or a number (converted to pixels).

```tsx
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller controlSize="xl">
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
```


## Custom icons

Use `startControlIcon` and `endControlIcon` props to replace default chevron icons
with custom icons:

```tsx
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller
      startControlIcon={<ArrowLeftIcon size={16} />}
      endControlIcon={<ArrowRightIcon size={16} />}
    >
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
```


## Usage with Tabs

Use `Scroller` inside [Tabs.List](https://mantine.dev/llms/core-tabs.md) to make the tabs list scrollable when there are too many tabs to fit in the available space:

```tsx
import { Scroller, Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="tab-1">
      <Tabs.List>
        <Scroller>
          <Tabs.Tab value="tab-1">First tab</Tabs.Tab>
          <Tabs.Tab value="tab-2">Second tab</Tabs.Tab>
          <Tabs.Tab value="tab-3">Third tab</Tabs.Tab>
          <Tabs.Tab value="tab-4">Fourth tab</Tabs.Tab>
          <Tabs.Tab value="tab-5">Fifth tab</Tabs.Tab>
          <Tabs.Tab value="tab-6">Sixth tab</Tabs.Tab>
          <Tabs.Tab value="tab-7">Seventh tab</Tabs.Tab>
          <Tabs.Tab value="tab-8">Eighth tab</Tabs.Tab>
          <Tabs.Tab value="tab-9">Ninth tab</Tabs.Tab>
          <Tabs.Tab value="tab-10">Tenth tab</Tabs.Tab>
        </Scroller>
      </Tabs.List>
    </Tabs>
  );
}
```



#### Props

**Scroller props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Content to display |
| controlSize | string \| number | - | Size of the control buttons, |
| draggable | boolean | - | Determines whether content can be scrolled by dragging with mouse, `true` by default |
| edgeGradientColor | string | - | Background color for the gradient fade on controls, `'var(--mantine-color-body)'` by default |
| endControlIcon | React.ReactNode | - | Icon component for the end control, AccordionChevron by default |
| endControlProps | React.ComponentProps<"button"> | - | Props passed to the end control button |
| scrollAmount | number | - | Amount of pixels to scroll when clicking the control buttons, `200` by default |
| showEndControl | boolean | - | Determines whether end control should always be visible regardless of scroll position, `false` by default |
| showStartControl | boolean | - | Determines whether start control should always be visible regardless of scroll position, `false` by default |
| startControlIcon | React.ReactNode | - | Icon component for the start control, AccordionChevron by default |
| startControlProps | React.ComponentProps<"button"> | - | Props passed to the start control button |


#### Styles API

Scroller component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Scroller selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Scroller-root | Root element |
| container | .mantine-Scroller-container | Scrollable container |
| content | .mantine-Scroller-content | Wraps component children |
| control | .mantine-Scroller-control | Start and end scroll control buttons |
| chevron | .mantine-Scroller-chevron | Chevron icon inside controls |

**Scroller CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --scroller-control-size | Controls width and chevron size |
| root | --scroller-background-color | Background color for the control edge gradients |

**Scroller data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| container | data-draggable | `draggable` prop is set | - |
| control | data-position | - | "start" or "end" depending on control position |
| control | data-hidden | Control is hidden because scrolling is not available in that direction | - |
