# Radio
Package: @mantine/core
Import: import { Radio } from '@mantine/core';
Description: Wrapper for input type radio

## Usage

#### Example: configurator

```tsx
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      
    />
  );
}
```


## Controlled

```tsx
import { useState } from 'react';
import { Radio } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Radio
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}
```

## States

#### Example: states

```tsx
import { Radio, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Radio checked={false} onChange={() => {}} label="Default radio" />
      <Radio checked onChange={() => {}} label="Checked radio" />
      <Radio checked variant="outline" onChange={() => {}} label="Outline checked radio" />
      <Radio disabled label="Disabled radio" />
      <Radio disabled checked onChange={() => {}} label="Disabled checked radio" />
    </Stack>
  );
}
```


## Change icon

#### Example: icon

```tsx
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
```


## Change icon color

#### Example: iconColor

```tsx
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
```


## Disabled state

#### Example: disabled

```tsx
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
```


## Pointer cursor

By default, radio input and label have `cursor: default` (same as native `input[type="radio"]`).
To change cursor to pointer, set `cursorType` on [theme](https://mantine.dev/theming/theme-object/):

```tsx
import { createTheme, MantineProvider, Radio } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Radio label="Pointer cursor" />
    </MantineProvider>
  );
}
```

## Radio with tooltip

You can change target element to which tooltip is attached with `refProp`:

* If `refProp` is not set, the tooltip is attached to the checkbox input
* If `refProp="rootRef"` is set, the tooltip is attached to the root element (contains label, input and other elements)

#### Example: tooltip

```tsx
import { Tooltip, Radio } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
```


<WrapperProps component="Radio" />

## Wrapper props

Radio supports additional props that are passed to the wrapper element for more customization options.

## Radio.Group component

#### Example: groupConfigurator

```tsx
import { Radio, Group } from '@mantine/core';


function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
      
    >
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}
```


## Radio.Group disabled state



## Controlled Radio.Group

```tsx
import { useState } from 'react';
import { Radio } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('react');

  return (
    <Radio.Group
      value={value}
      onChange={setValue}
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
      withAsterisk
    >
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </Radio.Group>
  );
}
```

## Radio.Indicator

`Radio.Indicator` looks exactly the same as `Radio` component, but it does not
have any semantic meaning, it's just a visual representation of radio state. You
can use it in any place where you need to display radio state without any interaction
related to the indicator. For example, it is useful in cards based on buttons, trees, etc.

Note that `Radio.Indicator` cannot be focused or selected with keyboard. It is not
accessible and should not be used as a replacement for `Radio` component.

#### Example: indicator

```tsx
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio.Indicator />
      <Radio.Indicator checked />
      <Radio.Indicator disabled />
      <Radio.Indicator disabled checked />
    </Group>
  );
}
```


## Radio.Card component

`Radio.Card` component can be used as a replacement for `Radio` to build custom
cards/buttons/other things that work as radios. The root element of the component
has `role="radio"` attribute, it is accessible by default and supports the same
keyboard interactions as `input[type="radio"]`.

#### Example: card

```tsx
import { useState } from 'react';
import { Radio, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio.Card
      className={classes.root}
      radius="md"
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>@mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Radio.Card>
  );
}
```


You can use `Radio.Card` with `Radio.Group` the same way as `Radio` component:

#### Example: cardGroup

```tsx
import { useState } from 'react';
import { Radio, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: '@mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  const cards = data.map((item) => (
    <Radio.Card className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        label="Pick one package to install"
        description="Choose a package that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Radio.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value || '–'}
      </Text>
    </>
  );
}
```


<GetElementRef component="Radio" refType="input" />

## Get element ref

```tsx
import { useRef } from 'react';
import { Radio } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <Radio ref={ref} />;
}
```

#### Example: stylesApi

```tsx
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      label="Radio"
      description="Radio description"
      error="Radio error"
      defaultChecked
     
    />
  );
}
```


## Accessibility

Set `aria-label` or `label` prop to make the radio accessible:

```tsx
import { Radio } from '@mantine/core';

// Not ok, input is not labeled
function Bad() {
  return <Radio />;
}

// Ok, input is labelled by aria-label
function GoodAriaLabel() {
  return <Radio aria-label="My radio" />;
}

// Ok, input is labelled by label element
function GoodLabel() {
  return <Radio label="My radio" />;
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color to set input color in checked state |
| description | React.ReactNode | - | Description displayed below the label |
| error | React.ReactNode | - | Error displayed below the label |
| icon | FC<RadioIconProps> | - | A component that replaces default check icon |
| iconColor | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color to set icon color, by default value depends on <code>theme.autoContrast</code> |
| label | React.ReactNode | - | Content of the <code>label</code> associated with the radio |
| labelPosition | "left" | "right" | - | Position of the label relative to the input |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius,</code> |
| rootRef | ForwardedRef<HTMLDivElement> | - | Assigns ref of the root element |
| size | MantineSize | (string & {}) | - | Controls size of the component |
| wrapperProps | Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & DataAttributes | - | Props passed down to the root element |


#### Styles API

Radio component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Radio selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Radio-root | Root element |
| radio | .mantine-Radio-radio | Input element (`input[type="radio"]`) |
| icon | .mantine-Radio-icon | Radio icon, used to display checked icon |
| inner | .mantine-Radio-inner | Wrapper for `icon` and `input` |
| body | .mantine-Radio-body | Input body, contains all other elements |
| labelWrapper | .mantine-Radio-labelWrapper | Contains `label`, `description` and `error` |
| label | .mantine-Radio-label | Label element |
| description | .mantine-Radio-description | Description displayed below the label |
| error | .mantine-Radio-error | Error message displayed below the label |

**Radio CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --radio-color | Controls checked radio `background-color` |
| root | --radio-radius | Controls radio `border-radius` |
| root | --radio-size | Controls radio `width` and `height` |
| root | --radio-icon-color | Controls radio icon `color` |
| root | --radio-icon-size | Controls radio icon `width` and `height` |

**Radio data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| radio | data-error | - | - |
| inner | data-label-position | - | Value of  |

**Radio.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-RadioGroup-root | Root element |
| label | .mantine-RadioGroup-label | Label element |
| required | .mantine-RadioGroup-required | Required asterisk element, rendered inside label |
| description | .mantine-RadioGroup-description | Description element |
| error | .mantine-RadioGroup-error | Error element |

**Radio.Indicator selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| indicator | .mantine-RadioIndicator-indicator | Root element |
| icon | .mantine-RadioIndicator-icon | Radio icon |

**Radio.Indicator CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| indicator | --radio-color | Controls checked radio `background-color` |
| indicator | --radio-radius | Controls radio `border-radius` |
| indicator | --radio-size | Controls radio `width` and `height` |
| indicator | --radio-icon-color | Controls radio icon `color` |
| indicator | --radio-icon-size | Controls radio icon `width` and `height` |

**Radio.Indicator data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| indicator | data-checked | - | - |
| indicator | data-disabled | - | - |

**Radio.Card selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| card | .mantine-RadioCard-card | Root element |

**Radio.Card CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| card | --card-radius | Controls card `border-radius` |

**Radio.Card data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| card | data-checked | - | - |
| card | data-with-border | - | - |