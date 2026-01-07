# RingProgress
Package: @mantine/core
Import: import { RingProgress } from '@mantine/core';
Description: Give user feedback for status of the task with circle diagram

## Usage

Set `sections` prop to an array of:

* `value` – number between 0 and 100 – amount of space filled by segment
* `color` – segment color from theme or any other css color value

#### Example: usage

```tsx
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" ta="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  );
}
```


## Size, thickness & rounded caps

Use `size`, `thickness` & `roundCaps` props to configure RingProgress, size and thickness values:

#### Example: configurator

```tsx
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  )
}
```


## Sections tooltips

Add `tooltip` property to section to display floating [Tooltip](https://mantine.dev/core/tooltip/) when user hovers over it:

#### Example: tooltip

```tsx
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      size={170}
      thickness={16}
      label={
        <Text size="xs" ta="center" px="xs" style={{ pointerEvents: 'none' }}>
          Hover sections to see tooltips
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan', tooltip: 'Documents – 40 Gb' },
        { value: 25, color: 'orange', tooltip: 'Apps – 25 Gb' },
        { value: 15, color: 'grape', tooltip: 'Other – 15 Gb' },
      ]}
    />
  );
}
```


## Root color

Use `rootColor` property to change the root color:

#### Example: rootColor

```tsx
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
```


## Sections props

You can add any additional props to sections:

#### Example: sectionsProps

```tsx
import { useState } from 'react';
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  const [hovered, setHovered] = useState(-1);
  const reset = () => setHovered(-1);
  return (
    <>
      <RingProgress
        onMouseLeave={() => setHovered(-1)}
        size={140}
        sections={[
          { value: 40, color: 'cyan', onMouseEnter: () => setHovered(0), onMouseLeave: reset },
          { value: 20, color: 'blue', onMouseEnter: () => setHovered(1), onMouseLeave: reset },
          { value: 15, color: 'indigo', onMouseEnter: () => setHovered(2), onMouseLeave: reset },
        ]}
      />
      <Text>Hovered section: {hovered === -1 ? 'none' : hovered}</Text>
    </>
  );
}
```


## Customize label

You can add any React node as label, for example [Text](https://mantine.dev/core/text/) component with some additional styles
or [ThemeIcon](https://mantine.dev/core/theme-icon/):

#### Example: label

```tsx
import { ActionIcon, RingProgress, Text, Center } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text c="blue" fw={700} ta="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ActionIcon color="teal" variant="light" radius="xl" size="xl">
              <IconCheck size={22} />
            </ActionIcon>
          </Center>
        }
      />
    </>
  );
}
```


## Filled segment transition

By default, transitions are disabled, to enable them, set `transitionDuration` prop
to a number of milliseconds:

#### Example: transitions

```tsx
import { useState } from 'react';
import { Button, RingProgress, Stack, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(30);

  return (
    <Stack align="center">
      <RingProgress
        sections={[{ value, color: 'blue' }]}
        transitionDuration={250}
        label={<Text ta="center">{value}%</Text>}
      />

      <Button onClick={() => setValue(Math.floor(Math.random() * 100))}>Set random value</Button>
    </Stack>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | React.ReactNode | - | Label displayed in the center of the ring |
| rootColor | MantineColor | - | Color of the root section, key of theme.colors or CSS color value |
| roundCaps | boolean | - | Sets whether the edges of the progress circle are rounded |
| sections | RingProgressSection[] | required | Ring sections |
| size | number | - | Width and height of the progress ring |
| thickness | number | - | Ring thickness |
| transitionDuration | number | - | Transition duration of filled section styles changes in ms |


#### Styles API

RingProgress component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**RingProgress selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-RingProgress-root | Root element |
| svg | .mantine-RingProgress-svg | svg element |
| curve | .mantine-RingProgress-curve | circle element |
| label | .mantine-RingProgress-label | Label element |

**RingProgress CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --rp-label-offset | Label offset on the left and right sides of the ring |
| root | --rp-size | Controls `height` and `width` of svg and root elements |
| root | --rp-transition-duration | Controls transition duration of filled segments |