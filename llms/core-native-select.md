# NativeSelect
Package: @mantine/core
Import: import { NativeSelect } from '@mantine/core';
Description: Native select element based on Input

## Usage

<InputFeatures component="NativeSelect" element="select" />

NativeSelect component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all select element props. NativeSelect documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect data={['React', 'Angular', 'Vue']} />;
}
```


## Controlled

```tsx
import { useState } from 'react';
import { NativeSelect } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <NativeSelect
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
```

## Adding options

`NativeSelect` allows passing options in two ways:

* `data` prop array
* `children` prop with `option` components

Note that if `children` is used, `data` will be ignored.

### data prop

`data` prop accepts values in one of the following formats:

1. Array of strings:

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect data={['React', 'Angular', 'Svelte', 'Vue']} />
  );
}
```

2. Array of objects with `label`, `value` and `disabled` keys:

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'angular' },
        { label: 'Svelte', value: 'svelte', disabled: true },
        { label: 'Vue', value: 'vue' },
      ]}
    />
  );
}
```

3. Array of grouped options (string format):

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: ['React', 'Angular', 'Svelte', 'Vue'],
        },
        {
          group: 'Backend libraries',
          items: ['Express', 'Koa', 'Django'],
        },
      ]}
    />
  );
}
```

4. Array of grouped options (object format):

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
```

Example of `data` prop with array of grouped options:

#### Example: data

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
```


### children options

To add options with `children` prop, use `option` elements to add options and `optgroup`
elements to group them:

#### Example: options

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With children options">
      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue" disabled>
          Vue
        </option>
      </optgroup>

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
```


## With dividers

Use `hr` tags to add dividers between options:

#### Example: dividers

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With dividers">
      <option>Select library</option>

      <hr />

      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </optgroup>

      <hr />

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
```


<InputSections component="NativeSelect" />

## Input sections

NativeSelect supports left and right sections to display icons, buttons or other content alongside the input.

#### Example: sections

```tsx
import { NativeSelect } from '@mantine/core';
import { IconChevronDown, IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<IconHash size={16} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<IconChevronDown size={16} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
```


## Disabled state

#### Example: disabled

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
```


## Error state

#### Example: error

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <NativeSelect error label="Boolean error" data={['React', 'Angular']} />
      <NativeSelect
        error="Error message"
        label="React node error"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
```


#### Example: stylesApi

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect data={['React', 'Angular']} label="NativeSelect label" description="NativeSelect description" error="NativeSelect error" withAsterisk />;
}
```


<InputAccessibility component="NativeSelect" />

## Accessibility

NativeSelect provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | ComboboxData | - | Data used to render options, can be replaced with <code>children</code> |
| description | React.ReactNode | - | Contents of <code>Input.Description</code> component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the <code>Input.Description</code> component |
| disabled | boolean | - | Sets <code>disabled</code> attribute on the <code>input</code> element |
| error | React.ReactNode | - | Contents of <code>Input.Error</code> component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the <code>Input.Error</code> component |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | <code>size</code> attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of <code>Input.Label</code> component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the <code>Input.Label</code> component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>leftSection</code> element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>leftSection</code> element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set <code>width</code> of the section and input <code>padding-left</code>, by default equals to the input height |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>rightSection</code> element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>rightSection</code> element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set <code>width</code> of the section and input <code>padding-right</code>, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input <code>height</code> and horizontal <code>padding</code> |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides <code>required</code> prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the <code>error</code> prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

NativeSelect component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**NativeSelect selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-NativeSelect-root | Root element |
| label | .mantine-NativeSelect-label | Label element |
| required | .mantine-NativeSelect-required | Required asterisk element, rendered inside label |
| description | .mantine-NativeSelect-description | Description element |
| error | .mantine-NativeSelect-error | Error element |
| wrapper | .mantine-NativeSelect-wrapper | Root element of the Input |
| input | .mantine-NativeSelect-input | Input element |
| section | .mantine-NativeSelect-section | Left and right sections |