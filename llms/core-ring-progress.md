# RingProgress
Package: @mantine/core
Import: import { RingProgress } from '@mantine/core';
Description: Give user feedback for status of the task with circle diagram

## Usage

The `sections` prop accepts an array of objects with the following properties:

* `value` – number between 0 and 100 representing the percentage of the ring to fill
* `color` – segment color from theme.colors or any CSS color value
* `tooltip` (optional) – React node to display when hovering over the section
* Any valid SVG `<circle>` element props (onClick, onMouseEnter, style, etc.)

**Note:** Section values should sum to 100% or less for expected behavior. Values exceeding 100% total will cause sections to overlap.

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

Use the `size`, `thickness` & `roundCaps` props to configure the RingProgress size and thickness values:

```tsx
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
       size={120} thickness={12} roundCaps={true}
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

Add a `tooltip` property to a section to display a floating [Tooltip](https://mantine.dev/llms/core-tooltip.md) when the user hovers over it:

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


## Section gaps

Use the `sectionGap` prop to add visual separation between sections. The gap is specified in degrees:

```tsx
import { RingProgress, Stack, Text } from '@mantine/core';

function Demo() {
  const sections = [
    { value: 40, color: 'cyan' },
    { value: 25, color: 'orange' },
    { value: 15, color: 'grape' },
  ];

  return (
    <Stack align="center">
      <div>
        <Text size="sm" ta="center" mb="xs">
          No gap (default)
        </Text>
        <RingProgress sections={sections} />
      </div>

      <div>
        <Text size="sm" ta="center" mb="xs">
          5° gap
        </Text>
        <RingProgress sections={sections} sectionGap={5} />
      </div>

      <div>
        <Text size="sm" ta="center" mb="xs">
          10° gap
        </Text>
        <RingProgress sections={sections} sectionGap={10} />
      </div>
    </Stack>
  );
}
```


## Start angle

Use the `startAngle` prop to control where the progress starts. The angle is specified in degrees,
where `0` = right, `90` = bottom, `180` = left, and `270` = top (default):

```tsx
import { Group, RingProgress, Stack, Text } from '@mantine/core';

function Demo() {
  const sections = [{ value: 40, color: 'cyan' }];

  return (
    <Group justify="center">
      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={0} />
        <Text size="sm">0° (right)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={90} />
        <Text size="sm">90° (bottom)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={180} />
        <Text size="sm">180° (left)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={270} />
        <Text size="sm">270° (top)</Text>
      </Stack>
    </Group>
  );
}
```


## Background color

Use the `rootColor` prop to customize the color of the unfilled portion of the ring (the background):

```tsx
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
```


## Section events

Each section can receive any valid SVG `<circle>` element props, including event handlers like `onClick`, `onMouseEnter`, and `onMouseLeave`:

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

You can add any React node as a label, for example a [Text](https://mantine.dev/llms/core-text.md) component with custom styling
or an [ActionIcon](https://mantine.dev/llms/core-action-icon.md):

```tsx
import { ActionIcon, RingProgress, Text, Center } from '@mantine/core';
import { CheckIcon } from '@phosphor-icons/react';

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
              <CheckIcon size={22} />
            </ActionIcon>
          </Center>
        }
      />
    </>
  );
}
```


## Filled segment transition

By default, transitions are disabled. To enable them, set the `transitionDuration` prop
to a number of milliseconds:

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

**RingProgress props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | React.ReactNode | - | Label displayed in the center of the ring |
| rootColor | MantineColor | - | Color of the unfilled portion of the ring (background). Defaults to gray-2 in light mode, dark-4 in dark mode |
| roundCaps | boolean | - | Applies rounded line caps to the start and end of visible sections |
| sectionGap | number | - | Gap between sections in degrees. Reduces the visual size of each section |
| sections | RingProgressSection[] | required | Array of sections to display in the ring. Each section should have a `value` (0-100), `color`, and optional `tooltip`. Sections can also receive any valid SVG circle element props. |
| size | number | - | Width and height of the progress ring |
| startAngle | number | - | Starting angle in degrees. 0 = right, 90 = bottom, 180 = left, 270 = top |
| thickness | number | - | Ring thickness in pixels. Cannot exceed size / 4 and will be automatically clamped if necessary |
| transitionDuration | number | - | Transition duration in milliseconds for section value and color changes |


#### Styles API

RingProgress component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**RingProgress selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-RingProgress-root | Root container element |
| svg | .mantine-RingProgress-svg | SVG element containing all ring sections |
| curve | .mantine-RingProgress-curve | Individual ring section (circle element) |
| label | .mantine-RingProgress-label | Label displayed in the center of the ring |

**RingProgress CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --rp-label-offset | Controls horizontal spacing between label and ring edges |
| root | --rp-size | Controls width and height of the entire component |
| root | --rp-transition-duration | Controls animation duration for value and color changes |
