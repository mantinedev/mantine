# Chip
Package: @mantine/core
Import: import { Chip } from '@mantine/core';
Description: Pick one or multiple values with inline controls

## Usage

#### Example: configurator

```tsx
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked>Awesome chip</Chip>
}
```


## Controlled

```tsx
import { useState } from 'react';
import { Chip } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>
      My chip
    </Chip>
  );
}
```

## Change checked icon

#### Example: icon

```tsx
import { Chip } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <Chip
      icon={<IconX size={16} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
```


## States

#### Example: states

```tsx
function Demo() {
  return (
    <>
      <Chip.Group multiple value={['checked', 'checked-disabled']}>
        <Group justify="center">
          <Chip value="default" variant="outline">
            Outline default
          </Chip>
          <Chip value="checked" variant="outline">
            Outline checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="outline">
            Outline checked disabled
          </Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple value={['checked', 'checked-disabled']}>
        <Group justify="center" mt="md">
          <Chip value="default" variant="light">
            Light default
          </Chip>
          <Chip value="checked" variant="light">
            Light checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="light">
            Light checked disabled
          </Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple value={['checked', 'checked-disabled']}>
        <Group justify="center" mt="md">
          <Chip value="default" variant="filled">
            Filled default
          </Chip>
          <Chip value="checked" variant="filled">
            Filled checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="filled">
            Filled checked disabled
          </Chip>
        </Group>
      </Chip.Group>
    </>
  );
}
```


## Chip with tooltip

To use `Chip` with [Tooltip](https://mantine.dev/core/tooltip/) and other similar components, set `refProp="rootRef"`
on the Tooltip component:

#### Example: tooltip

```tsx
import { Tooltip, Chip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
```


<WrapperProps component="Chip" />

## Wrapper props

Chip supports additional props that are passed to the wrapper element for more customization options.

## Chip.Group

`Chip.Group` component manages state of child Chip components,
set `multiple` prop to allow multiple chips to be selected at a time:

#### Example: group

```tsx
import { Chip, Group } from '@mantine/core';

function Demo() {
  return (
    <>
      <Chip.Group>
        <Group justify="center">
          <Chip value="1">Single chip</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple>
        <Group justify="center" mt="md">
          <Chip value="1">Multiple chips</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>
    </>
  );
}
```


## Controlled Chip.Group

```tsx
import { useState } from 'react';
import { Chip } from '@mantine/core';

function Single() {
  // string value when multiple is false (default)
  const [value, setValue] = useState('react');

  return (
    <Chip.Group multiple={false} value={value} onChange={setValue}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chip.Group>
  );
}

function Multiple() {
  // array of strings value when multiple is true
  const [value, setValue] = useState(['react']);

  return (
    <Chip.Group multiple value={value} onChange={setValue}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chip.Group>
  );
}
```

## Deselect radio chip

#### Example: deselect

```tsx
import { useState } from 'react';
import { Chip, Group } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>('first');
  const handleChipClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === value) {
      setValue(null);
    }
  };

  return (
    <Chip.Group multiple={false} value={value} onChange={setValue}>
      <Group>
        <Chip value="first" onClick={handleChipClick}>
          First
        </Chip>
        <Chip value="second" onClick={handleChipClick}>
          Second
        </Chip>
        <Chip value="third" onClick={handleChipClick}>
          Third
        </Chip>
      </Group>
    </Chip.Group>
  );
}
```


## Accessibility

`Chip` and `Chip.Group` components are accessible by default – they are built with native radio/checkbox inputs,
all keyboard events work the same as with native controls.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| checked | boolean | - | Checked state for controlled component |
| children | React.ReactNode | required | <code>label</code> element associated with the input |
| color | MantineColor | - | Controls components colors based on <code>variant</code> prop. Key of <code>theme.colors</code> or any valid CSS color. |
| defaultChecked | boolean | - | Default checked state for uncontrolled component |
| icon | React.ReactNode | - | Any element or component to replace default icon |
| id | string | - | Unique input id |
| onChange | (checked: boolean) => void | - | Calls when checked state changes |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code> |
| rootRef | ForwardedRef<HTMLDivElement> | - | Assigns ref of the root element |
| size | MantineSize | - | Controls various properties related to component size |
| type | "checkbox" | "radio" | - | Chip input type |
| wrapperProps | Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & DataAttributes | - | Props passed down to the root element |


#### Styles API

Chip component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Chip selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Chip-root | Root element |
| checkIcon | .mantine-Chip-checkIcon | Check icon, visible when checked prop is true |
| iconWrapper | .mantine-Chip-iconWrapper | Wraps `checkIcon` for alignment |
| input | .mantine-Chip-input | Input element, hidden by default |
| label | .mantine-Chip-label | Input label, used as a chip body |

**Chip CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chip-fz | Controls `font-size` |
| root | --chip-size | Controls `height` |
| root | --chip-icon-size | Controls width and height of the icon |
| root | --chip-padding | Controls horizontal padding when chip is not checked |
| root | --chip-checked-padding | Controls horizontal padding when chip is checked |
| root | --chip-radius | Controls `border-radius` |
| root | --chip-bg | Controls `background-color` when chip is checked |
| root | --chip-hover | Controls `background-color` when chip is checked and hovered |
| root | --chip-color | Controls `color` when chip is checked |
| root | --chip-bd | Controls border when chip is checked |
| root | --chip-spacing | Controls spacing between check icon and label |

**Chip data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| label | data-checked | Chip is checked | - |
| label | data-disabled | - | - |