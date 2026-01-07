# SegmentedControl
Package: @mantine/core
Import: import { SegmentedControl } from '@mantine/core';
Description: A linear set of two or more segments

## Usage

#### Example: usage

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl data={['React', 'Angular', 'Vue']} />;
}
```


## Controlled

```tsx
import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('react');

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'ng' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
      ]}
    />
  );
}
```

## Data prop

`SegmentedControl` support two different data formats:

1. An array of strings – used when `value` and `label` are the same
2. An array of objects – used when `value` and `label` are different

```tsx
import { SegmentedControl } from '@mantine/core';

function ArrayOfStrings() {
  return (
    <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />
  );
}

function ArrayOfObjects() {
  return (
    <SegmentedControl
      data={[
        { value: 'React', label: 'React' },
        { value: 'Angular', label: 'Angular' },
        { value: 'Svelte', label: 'Svelte' },
        { value: 'Vue', label: 'Vue' },
      ]}
    />
  );
}
```

## Disabled

To disable `SegmentedControl` item, use array of objects `data` format and set `disabled: true`
on the item that you want to disable. To disable the entire component, use `disabled` prop.

#### Example: disabled

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <Stack align="center">
      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled control
        </Text>
        <SegmentedControl
          disabled
          data={[
            {
              value: 'preview',
              label: 'Preview',
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </div>

      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled option
        </Text>
        <SegmentedControl
          data={[
            {
              value: 'preview',
              label: 'Preview',
              disabled: true,
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </div>
    </Stack>
  );
}
```


## React node as label

You can use any React node as label:

#### Example: labels

```tsx
import { Center, SegmentedControl } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <IconEye size={16} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCode size={16} />
              <span>Code</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <IconExternalLink size={16} />
              <span>Export</span>
            </Center>
          ),
        },
      ]}
    />
  );
}
```


## Color

By default, `SegmentedControl` uses `theme.white` with shadow in light color scheme and `var(--mantine-color-dark-6)` background color for indicator.
Set `color` prop to change indicator `background-color`:

#### Example: configurator

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
```


## Transitions

Change transition properties with:

* `transitionDuration` – all transitions duration in ms, `200` by default
* `transitionTimingFunction` – all transitions timing function, `ease` by default

#### Example: transitions

```tsx
import { SegmentedControl, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" fw={500} mt={3}>
        No transitions
      </Text>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} transitionDuration={0} />

      <Text size="sm" fw={500} mt="md">
        500ms linear transition
      </Text>
      <SegmentedControl
        data={['React', 'Angular', 'Vue', 'Svelte']}
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}
```


## readOnly

Set `readOnly` prop to prevent value from being changed:

#### Example: readOnly

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
```


#### Example: stylesApi

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl data={['React', 'Angular', 'Vue']} />;
}
```


## Accessibility and usability

`SegmentedControl` uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels.
Component support the same keyboard events as a regular radio group.

In case you do not have text in labels (for example, when you want to use `SegmentedControl` with icons only),
use [VisuallyHidden](https://mantine.dev/core/visually-hidden) to make component accessible:

#### Example: iconsOnly

```tsx
import { SegmentedControl, VisuallyHidden } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  const iconProps = {
    style: { display: 'block' },
    size: 20,
    stroke: 1.5,
  };

  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <>
              <IconEye {...iconProps} />
              <VisuallyHidden>Preview</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'code',
          label: (
            <>
              <IconCode {...iconProps} />
              <VisuallyHidden>Code</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'export',
          label: (
            <>
              <IconExternalLink {...iconProps} />
              <VisuallyHidden>Export</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color, changes color of indicator, by default color is based on current color scheme |
| data | (string | SegmentedControlItem)[] | required | Data based on which controls are rendered |
| defaultValue | string | - | Uncontrolled component default value |
| disabled | boolean | - | Determines whether the component is disabled |
| fullWidth | boolean | - | Determines whether the component should take 100% width of its parent |
| name | string | - | Name of the radio group, by default random name is generated |
| onChange | (value: string) => void | - | Called when value changes |
| orientation | "horizontal" | "vertical" | - | Component orientation |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| readOnly | boolean | - | If set to <code>false</code>, prevents changing the value |
| size | MantineSize | (string & {}) | - | Controls <code>font-size</code>, <code>padding</code> and <code>height</code> properties |
| transitionDuration | number | - | Indicator <code>transition-duration</code> in ms, set <code>0</code> to turn off transitions |
| transitionTimingFunction | string | - | Indicator <code>transition-timing-function</code> property |
| value | string | - | Controlled component value |
| withItemsBorders | boolean | - | Determines whether there should be borders between items |


#### Styles API

SegmentedControl component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**SegmentedControl selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-SegmentedControl-root | Root element |
| control | .mantine-SegmentedControl-control | Wrapper element for input and label |
| input | .mantine-SegmentedControl-input | Input element (`input[type="radio"]`), hidden by default |
| label | .mantine-SegmentedControl-label | Label element associated with input |
| indicator | .mantine-SegmentedControl-indicator | Floating indicator that moves between items |
| innerLabel | .mantine-SegmentedControl-innerLabel | Wrapper of label element children |

**SegmentedControl CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --sc-color | Control `background-color` of `indicator` |
| root | --sc-font-size | Controls `font-size` of labels |
| root | --sc-padding | Controls `padding` of control |
| root | --sc-radius | Controls `border-radius` of `indicator` and `root` elements |
| root | --sc-shadow | Controls `box-shadow` of indicator |

**SegmentedControl data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-full-width | - | - |
| root | data-with-items-border | - | - |
| root | data-disabled | Value of  | - |
| control | data-orientation | - | Value of  |