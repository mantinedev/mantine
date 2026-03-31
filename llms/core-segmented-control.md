# SegmentedControl
Package: @mantine/core
Import: import { SegmentedControl } from '@mantine/core';
Description: A linear set of two or more segments

## Usage

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl orientation="horizontal" fullWidth={false} withItemsBorders={true} size="sm" radius="md" data={['React', 'Angular', 'Vue']} />;
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

## Uncontrolled

`SegmentedControl` can be used with uncontrolled forms the same way as a native input element.
Set the `name` attribute to include segmented control value in `FormData` object on form submission.
To control the initial value in uncontrolled forms, use the `defaultValue` prop.

Example usage of uncontrolled `SegmentedControl` with `FormData`:

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Segmented control value:', formData.get('framework'));
      }}
    >
      <SegmentedControl
        name="framework"
        defaultValue="react"
        data={[
          { label: 'React', value: 'react' },
          { label: 'Angular', value: 'ng' },
          { label: 'Vue', value: 'vue' },
          { label: 'Svelte', value: 'svelte' },
        ]}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Data prop

`SegmentedControl` supports two different data formats:

1. An array of primitive values – used when `value` and `label` are the same
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

## Generic value type

`SegmentedControl` supports generic value type. You can pass primitive values (numbers, strings, boolean, null)
as the type argument. The generic type is used for `value`, `defaultValue`, `onChange` and `data` props.

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <SegmentedControl<string | number>
      data={[
        { value: 16, label: '16' },
        { value: 17, label: '17' },
        { value: '18+', label: '18 or older' },
      ]}
    />
  );
}
```


Example with strings union:

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <SegmentedControl<'orange' | 'grape' | 'apple'>
      data={[
        { value: 'orange', label: 'Orange' },
        { value: 'grape', label: 'Grape' },
        { value: 'apple', label: 'Apple' },
      ]}
    />
  );
}
```

## Disabled

To disable a `SegmentedControl` item, use the array of objects `data` format and set `disabled: true`
on the item that you want to disable. To disable the entire component, use the `disabled` prop.

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

You can use any React node as a label:

```tsx
import { Center, SegmentedControl } from '@mantine/core';
import { EyeIcon, CodeIcon, ArrowSquareOutIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <EyeIcon size={16} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <CodeIcon size={16} />
              <span>CodeIcon</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <ArrowSquareOutIcon size={16} />
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

By default, `SegmentedControl` uses `theme.white` with shadow in the light color scheme and `var(--mantine-color-dark-6)` background color for the indicator.
Set the `color` prop to change the indicator `background-color`:

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl color="blue" data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
```


## Auto contrast

`SegmentedControl` supports `autoContrast` prop. If set to `true`, the label text color will automatically adjust
to ensure optimal contrast against the indicator background color:

```tsx
import { SegmentedControl, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <SegmentedControl color="lime.4" data={['React', 'Angular', 'Vue', 'Svelte']} />
      <SegmentedControl color="lime.4" autoContrast data={['React', 'Angular', 'Vue', 'Svelte']} />
    </Stack>
  );
}
```


## Transitions

Change transition properties with:

* `transitionDuration` – all transitions duration in ms, `200` by default
* `transitionTimingFunction` – all transitions timing function, `ease` by default

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


## Accessibility and usability

`SegmentedControl` uses radio inputs under the hood, so it is accessible by default with no extra steps required if you have text in labels.
The component supports the same keyboard events as a regular radio group.

If you do not have text in labels (for example, when you want to use `SegmentedControl` with icons only),
use [VisuallyHidden](https://mantine.dev/llms/core-visually-hidden.md) to make the component accessible:

```tsx
import { SegmentedControl, VisuallyHidden } from '@mantine/core';
import { EyeIcon, CodeIcon, ArrowSquareOutIcon } from '@phosphor-icons/react';

function Demo() {
  const iconProps = {
    style: { display: 'block' },
    size: 20,

  };

  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <>
              <EyeIcon {...iconProps} />
              <VisuallyHidden>Preview</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'code',
          label: (
            <>
              <CodeIcon {...iconProps} />
              <VisuallyHidden>CodeIcon</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'export',
          label: (
            <>
              <ArrowSquareOutIcon {...iconProps} />
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

**SegmentedControl props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, automatically adjusts label text color for optimal contrast against the indicator background color |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color, changes indicator background color. By default, uses white in light mode and dark.5 in dark mode |
| data | (Value \| SegmentedControlItem<Value>)[] | required | Data based on which controls are rendered |
| defaultValue | Primitive | - | Uncontrolled component default value |
| disabled | boolean | - | Determines whether the component is disabled |
| fullWidth | boolean | - | Determines whether the component should take 100% width of its parent |
| name | string | - | Name attribute for the radio group. A random name is auto-generated if not provided |
| onChange | (value: Value) => void | - | Called when value changes |
| orientation | "horizontal" \| "vertical" | - | Component orientation |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| readOnly | boolean | - | If set to `false`, prevents changing the value |
| size | MantineSize | - | Controls `font-size`, `padding` and `height` properties |
| transitionDuration | number | - | Indicator `transition-duration` in ms, set `0` to turn off transitions |
| transitionTimingFunction | string | - | Indicator `transition-timing-function` property |
| value | Primitive | - | Controlled component value |
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
| root | data-full-width | `fullWidth` prop is set | - |
| root | data-with-items-borders | `withItemsBorders` prop is not `false` | - |
| root | data-disabled | Value of `disabled` prop | - |
| control | data-orientation | - | Value of `orientation` prop |
