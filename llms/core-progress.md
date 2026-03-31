# Progress
Package: @mantine/core
Import: import { Progress } from '@mantine/core';
Description: Give user feedback for status of the task

## Usage

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress color="blue" radius="md" size="md" value={50} striped={false} animated={false} />;
}
```


## Compound components

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
```


## Vertical orientation

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Progress value={80} orientation="vertical" h={200} />
      <Progress value={60} color="orange" size="xl" orientation="vertical" h={200} animated />

      <Progress.Root size="xl" autoContrast orientation="vertical" h={200}>
        <Progress.Section value={40} color="lime.4">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
        <Progress.Section value={20} color="yellow.4">
          <Progress.Label>Apps</Progress.Label>
        </Progress.Section>
        <Progress.Section value={20} color="cyan.7">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </Group>
  );
}
```


## With tooltips

```tsx
import { Progress, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size={40}>
      <Tooltip label="Documents – 33Gb">
        <Progress.Section value={33} color="cyan">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Photos – 28Gb">
        <Progress.Section value={28} color="pink">
          <Progress.Label>Photos</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Other – 15Gb">
        <Progress.Section value={15} color="orange">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Tooltip>
    </Progress.Root>
  );
}
```


## Section width transition

Set `transitionDuration` to a number of milliseconds to enable width transition:

```tsx
import { useState } from 'react';
import { Button, Progress } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  return (
    <>
      <Progress value={value} size="lg" transitionDuration={200} />
      <Button onClick={() => setValue(Math.random() * 100)} mt="md">
        Set random value
      </Button>
    </>
  );
}
```


## Accessibility

* Progress section has the `role="progressbar"` attribute
* Progress section has the `aria-valuenow` attribute with the current value
* `aria-valuemin` and `aria-valuemax` attributes are always set to `0` and `100` as the component does not support other values

Set the `aria-label` attribute to label the progress:

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress aria-label="Uploading progress" value={10} />;
}

function DemoCompound() {
  return (
    <Progress.Root>
      <Progress.Section aria-label="Uploading progress" value={10} />
    </Progress.Root>
  );
}
```


#### Props

**Progress props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animated | boolean | - | If set, the sections stripes are animated (automatically enables striped) |
| autoContrast | boolean | - | If set, adjusts label text color based on section background color for readability |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS value |
| orientation | "horizontal" \| "vertical" | - | Controls orientation |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| size | MantineSize \| number | - | Controls track height |
| striped | boolean | - | If set, the section has stripes |
| transitionDuration | number | - | Controls sections width transition duration, value is specified in ms |
| value | number | required | Value of the progress |

**Progress.Section props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animated | boolean | - | If set, the sections stripes are animated, `striped` prop is ignored |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS value |
| striped | boolean | - | If set, the section has stripes |
| value | number | required | Value of the section in 0–100 range |
| withAria | boolean | - | Determines whether `aria-*` props should be added to the root element |

**Progress.Root props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts label text color based on section background color for readability |
| orientation | "horizontal" \| "vertical" | - | Controls orientation |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| size | MantineSize \| number | - | Controls track height |
| transitionDuration | number | - | Controls sections width transition duration, value is specified in ms |


#### Styles API

Progress component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Progress selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Progress-root | Root element |
| section | .mantine-Progress-section | `Progress.Section` root element |
| label | .mantine-Progress-label | `Progress.Label` root element |

**Progress CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --progress-radius | Controls `border-radius` of track and sections |
| root | --progress-size | Controls height of progress bar |
| root | --progress-transition-duration | Controls width `transition-duration` of progress bar |

**Progress data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-orientation | `orientation` prop | vertical \| horizontal |
| section | data-striped | `striped` or `animated` props are set | - |
| section | data-animated | `animated` prop is set | - |
