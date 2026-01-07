# Switch
Package: @mantine/core
Import: import { Switch } from '@mantine/core';
Description: Capture boolean input from user

## Usage

#### Example: configurator

```tsx
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      defaultChecked
      
    />
  );
}
```


## Controlled

```tsx
import { useState } from 'react';
import { Switch } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}
```

## States

#### Example: states

```tsx
import { Switch, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Switch value="value" label="Default switch" />
      <Switch checked value="value" label="Checked switch" />
      <Switch disabled value="value" label="Disabled switch" />
      <Switch checked disabled value="value" label="Disabled checked switch" />
    </Stack>
  );
}
```


## Inner Labels

#### Example: labels

```tsx
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="xl" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}
```


## Icon labels

#### Example: iconLabels

```tsx
import { Switch } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  return (
    <Switch
      size="md"
      color="dark.4"
      onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
      offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
    />
  );
}
```


## Thumb icon

#### Example: thumbIcon

```tsx
import { useState } from 'react';
import { Switch } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck size={12} color="var(--mantine-color-teal-6)" stroke={3} />
        ) : (
          <IconX size={12} color="var(--mantine-color-red-6)" stroke={3} />
        )
      }
    />
  );
}
```


## With tooltip

Set `refProp="rootRef"` on [Tooltip](https://mantine.dev/core/tooltip/) and other similar components to make them work with `Switch`:

#### Example: tooltip

```tsx
import { Switch, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}
```


## Pointer cursor

By default, switch input and label have `cursor: default` (same as native `input[type="checkbox"]`).
To change cursor to pointer, set `cursorType` on [theme](https://mantine.dev/theming/theme-object/):

```tsx
import { createTheme, MantineProvider, Switch } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Switch label="Pointer cursor" />
    </MantineProvider>
  );
}
```

<WrapperProps component="Switch" />

## Wrapper props

Switch supports additional props that are passed to the wrapper element for more customization options.

## Switch.Group

#### Example: groupConfigurator

```tsx
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
      
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
```


## Switch.Group disabled



## Controlled Switch.Group

```tsx
import { useState } from 'react';
import { Switch } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Switch.Group value={value} onChange={setValue}>
      <Switch value="react" label="React" />
      <Switch value="svelte" label="Svelte" />
    </Switch.Group>
  );
}
```

## Change styles based on checked state

#### Example: styles

```tsx
// Demo.module.css
.track {
  transition:
    background-color 200ms ease,
    border-color 200ms ease;

  input:checked + & {
    background-color: var(--mantine-color-lime-5);
    border-color: var(--mantine-color-lime-5);

    & > .thumb {
      background-color: var(--mantine-color-black);

      &::before {
        background-color: var(--mantine-color-lime-5);
      }
    }
  }
}

// Demo.tsx
import { Switch } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Switch classNames={classes} size="lg" />;
}
```


#### Example: stylesApi

```tsx
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch label="Switch component" description="Switch description" error="Switch error />;
}
```


## Get input ref

```tsx
import { useRef } from 'react';
import { Switch } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <Switch ref={ref} />;
}
```

## Accessibility

`Switch` is a regular `input[type="checkbox"]`. Set `aria-label` if the `Switch` is used without `label` prop:

```tsx
import { Switch } from '@mantine/core';

// -> not ok, input is not labeled
function Bad() {
  return <Switch />;
}

// -> ok, input has aria-label
function Good() {
  return <Switch aria-label="I agree to everything" />;
}

// -> ok, input has associated label
function AlsoGood() {
  return <Switch label="I agree to everything" />;
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color to set input color in checked state |
| description | React.ReactNode | - | Description displayed below the label |
| error | React.ReactNode | - | Error displayed below the label |
| id | string | - | Id used to bind input and label, if not passed, unique id will be generated instead |
| label | React.ReactNode | - | Content of the <code>label</code> associated with the radio |
| labelPosition | "left" | "right" | - | Position of the label relative to the input |
| offLabel | React.ReactNode | - | Inner label when the <code>Switch</code> is in unchecked state |
| onLabel | React.ReactNode | - | Inner label when the <code>Switch</code> is in checked state |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius,</code> |
| rootRef | ForwardedRef<HTMLDivElement> | - | Assigns ref of the root element |
| size | MantineSize | (string & {}) | - | Controls size of all elements |
| thumbIcon | React.ReactNode | - | Icon inside the thumb of the switch |
| withThumbIndicator | boolean | - | If set, the indicator will be displayed inside thumb |
| wrapperProps | Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & DataAttributes | - | Props passed down to the root element |


#### Styles API

Switch component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Switch selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Switch-root | Root element |
| track | .mantine-Switch-track | Switch track, contains `thumb` and `trackLabel` |
| trackLabel | .mantine-Switch-trackLabel | Label displayed inside `track` |
| thumb | .mantine-Switch-thumb | Thumb displayed inside `track` |
| input | .mantine-Switch-input | Input element (`input[type="checkbox"]`), hidden by default |
| body | .mantine-Switch-body | Input body, contains all other elements |
| labelWrapper | .mantine-Switch-labelWrapper | Contains `label`, `description` and `error` |
| label | .mantine-Switch-label | Label element |
| description | .mantine-Switch-description | Description displayed below the label |
| error | .mantine-Switch-error | Error message displayed below the label |

**Switch CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --switch-radius | Controls `border-radius` of `track` and `thumb` |
| root | --switch-height | Controls height of `track` |
| root | --switch-width | Controls min-width of `track` |
| root | --switch-thumb-size | Controls width and height of `thumb` |
| root | --switch-label-font-size | Controls `font-size` of `trackLabel` |
| root | --switch-track-label-padding | Controls `trackLabel` offset |
| root | --switch-color | Controls track `background-color` when input is checked |

**Switch data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| track | data-error | - | - |

**Switch.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-SwitchGroup-root | Root element |
| label | .mantine-SwitchGroup-label | Label element |
| required | .mantine-SwitchGroup-required | Required asterisk element, rendered inside label |
| description | .mantine-SwitchGroup-description | Description element |
| error | .mantine-SwitchGroup-error | Error element |