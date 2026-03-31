# Switch
Package: @mantine/core
Import: import { Switch } from '@mantine/core';
Description: Capture boolean input from user

## Usage

```tsx
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      defaultChecked
       color="blue" withThumbIndicator={true} labelPosition="right" label="I agree to sell my privacy" description="" error="" size="sm" radius="xl" disabled={false}
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

## Uncontrolled

`Switch` can be used with uncontrolled forms the same way as a native `input[type="checkbox"]`.
Set the `name` attribute to include switch value in `FormData` object on form submission.
To control the initial checked state in uncontrolled forms, use `defaultChecked` prop.

Example usage of uncontrolled `Switch` with `FormData`:

```tsx
import { Switch } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Switch value:', !!formData.get('notifications'));
      }}
    >
      <Switch label="Enable notifications" name="notifications" defaultChecked />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## States

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

```tsx
import { Switch } from '@mantine/core';
import { SunIcon, MoonStarsIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Switch
      size="md"
      color="dark.4"
      onLabel={<SunIcon size={16} color="var(--mantine-color-yellow-4)" />}
      offLabel={<MoonStarsIcon size={16} color="var(--mantine-color-blue-6)" />}
    />
  );
}
```


## Thumb icon

```tsx
import { useState } from 'react';
import { Switch } from '@mantine/core';
import { CheckIcon, XIcon } from '@phosphor-icons/react';

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
          <CheckIcon size={12} color="var(--mantine-color-teal-6)" />
        ) : (
          <XIcon size={12} color="var(--mantine-color-red-6)" />
        )
      }
    />
  );
}
```


## With tooltip

Set `refProp="rootRef"` on [Tooltip](https://mantine.dev/llms/core-tooltip.md) and other similar components to make them work with `Switch`:

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

By default, the switch input and label have `cursor: default` (same as native `input[type="checkbox"]`).
To change the cursor to pointer, set `cursorType` on the [theme](https://mantine.dev/llms/theming-theme-object.md):

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

## Wrapper props

Switch supports additional props that are passed to the wrapper element for more customization options.

## Switch.Group

```tsx
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
       label="Select your favorite framework/library" description="This is anonymous" error="" withAsterisk={true}
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


## Switch.Group with uncontrolled forms

`Switch.Group` can be used with uncontrolled forms, it renders a hidden input
which joins all checked values into a single string using `hiddenInputValuesSeparator` prop.

Props for usage with uncontrolled forms:

* `name` – name attribute passed to the hidden input
* `hiddenInputValuesSeparator` – string used to join checked values into a single string, `','` by default
* `hiddenInputProps` – additional props passed to the hidden input

```tsx
export function UncontrolledForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Switch group value:', formData.get('frameworks'));
      }}
    >
      <Switch.Group label="Frameworks" name="frameworks" hiddenInputValuesSeparator="|">
        <Switch label="React" value="react" />
        <Switch label="Angular" value="ng" />
      </Switch.Group>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## maxSelectedValues

Use `maxSelectedValues` prop to limit the number of selected values in `Switch.Group`.
When the limit is reached, the remaining switches are disabled and cannot be selected.

```tsx
import { Group, Switch } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group defaultValue={['react']} maxSelectedValues={2}>
      <Group>
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

```tsx
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      disabled
      label="Select your favorite framework/library"
      description="This is anonymous"
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

`Switch` is a regular `input[type="checkbox"]`. Set `aria-label` if the `Switch` is used without the `label` prop:

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

**Switch props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color to set input color in checked state |
| description | React.ReactNode | - | Description displayed below the label |
| error | React.ReactNode | - | Error displayed below the label |
| id | string | - | Id used to bind input and label, if not passed, unique id will be generated instead |
| label | React.ReactNode | - | Content of the label associated with the switch |
| labelPosition | "left" \| "right" | - | Position of the label relative to the input |
| offLabel | React.ReactNode | - | Inner label when the `Switch` is in unchecked state |
| onLabel | React.ReactNode | - | Inner label when the `Switch` is in checked state |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| rootRef | Ref<HTMLDivElement> | - | Assigns ref of the root element |
| size | MantineSize | - | Controls size of all elements |
| thumbIcon | React.ReactNode | - | Icon inside the thumb of the switch |
| withThumbIndicator | boolean | - | If set, displays a colored dot inside the thumb that matches the track background color |
| wrapperProps | React.ComponentProps<"div"> | - | Props passed down to the root element |

**Switch.Group props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|


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
| track | data-error | `error` prop is set | - |

**Switch.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-SwitchGroup-root | Root element |
| label | .mantine-SwitchGroup-label | Label element |
| required | .mantine-SwitchGroup-required | Required asterisk element, rendered inside label |
| description | .mantine-SwitchGroup-description | Description element |
| error | .mantine-SwitchGroup-error | Error element |
