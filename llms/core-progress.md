# Progress
Package: @mantine/core
Import: import { Progress } from '@mantine/core';
Description: Give user feedback for status of the task

## Usage

#### Example: usage

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress />;
}
```


## Compound components

#### Example: compound

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

#### Example: vertical

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

#### Example: tooltips

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

Set `transitionDuration` to a number of ms to enable width transition:

#### Example: transition

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


## Example: progress with segments

#### Example: segments

```tsx
import { useState } from 'react';
import { Group, PasswordInput, Progress } from '@mantine/core';

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[DEMOPLACEHOLDER::ProgressDemos.segments::END+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  if (password.length < 5) {
    return 10;
  }

  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function getStrengthColor(strength: number) {
  switch (true) {
    case strength < 30:
      return 'red';
    case strength < 50:
      return 'orange';
    case strength < 70:
      return 'yellow';
    default:
      return 'teal';
  }
}

function Demo() {
  const [value, setValue] = useState('');
  const strength = getStrength(value);
  const color = getStrengthColor(strength);

  return (
    <div>
      <PasswordInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder="Enter password"
        label="Enter password"
      />

      <Group grow gap={5} mt="xs">
        <Progress
          size="xs"
          color={color}
          value={value.length > 0 ? 100 : 0}
          transitionDuration={0}
        />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 30 ? 0 : 100} />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 50 ? 0 : 100} />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 70 ? 0 : 100} />
      </Group>
    </div>
  );
}
```


#### Example: stylesApi

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35}>
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
```


## Accessibility

* Progress section has `role="progressbar"` attribute
* Progress section has `aria-valuenow` attribute with current value
* `aria-valuemin` and `aria-valuemax` attributes are always set to `0` and `100` as component does not support other values

Set `aria-label` attribute to label progress:

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animated | boolean | - | If set, the sections stripes are animated, <code>striped</code> prop is ignored |
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS value |
| orientation | "horizontal" | "vertical" | - | Controls orientation |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code> |
| size | number | MantineSize | (string & {}) | - | Controls track height |
| striped | boolean | - | If set, the section has stripes |
| transitionDuration | number | - | Controls sections width transition duration, value is specified in ms |
| value | number | required | Value of the progress |


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
| section | data-striped | - | - |
| section | data-animated | - | - |