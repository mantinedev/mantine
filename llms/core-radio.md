# Radio
Package: @mantine/core
Import: import { Radio } from '@mantine/core';
Description: Wrapper for input type radio

## Usage

```tsx
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
       labelPosition="right" label="I cannot be unchecked" description="" error="" size="sm" color="blue" variant="filled"
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

## Uncontrolled

`Radio` can be used with uncontrolled forms the same way as a native `input[type="radio"]`.
Set the `name` and `value` attributes to include radio value in `FormData` object on form submission.
To control the initial checked state in uncontrolled forms, use `defaultChecked` prop.

Example usage of uncontrolled `Radio` with `FormData`:

```tsx
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Radio value:', formData.get('option'));
      }}
    >
      <Radio name="option" value="option1" label="Option 1" />
      <Radio name="option" value="option2" label="Option 2" defaultChecked />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## States

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

```tsx
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
```


## Change icon color

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

By default, the radio input and label have `cursor: default` (same as native `input[type="radio"]`).
To change the cursor to pointer, set `cursorType` on the [theme](https://mantine.dev/llms/theming-theme-object.md):

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

You can change the target element to which the tooltip is attached with `refProp`:

* If `refProp` is not set, the tooltip is attached to the radio input
* If `refProp="rootRef"` is set, the tooltip is attached to the root element (contains label, input, and other elements)

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


## Wrapper props

Radio supports additional props that are passed to the wrapper element for more customization options.

## Radio.Group component

```tsx
import { Radio, Group } from '@mantine/core';


function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
       label="Select your favorite framework/library" description="This is anonymous" error="" withAsterisk={true}
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

```tsx
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Radio.Group
      disabled
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
    >
      <Group mt="xs">
        <Radio label="React" value="react" />
        <Radio label="Angular" value="nu" />
        <Radio label="Svelte" value="sv" />
      </Group>
    </Radio.Group>
  );
}
```


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

`Radio.Indicator` looks exactly the same as the `Radio` component, but it does not
have any semantic meaning; it's just a visual representation of the radio state. You
can use it in any place where you need to display the radio state without any interaction
related to the indicator. For example, it is useful in cards based on buttons, trees, etc.

Note that `Radio.Indicator` cannot be focused or selected with the keyboard. It is not
accessible and should not be used as a replacement for the `Radio` component.

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


## Accessibility

Set the `aria-label` or `label` prop to make the radio accessible:

```tsx
import { Radio } from '@mantine/core';

// Not ok, input is not labeled
function Bad() {
  return <Radio />;
}

// Ok, input is labeled by aria-label
function GoodAriaLabel() {
  return <Radio aria-label="My radio" />;
}

// Ok, input is labeled by label element
function GoodLabel() {
  return <Radio label="My radio" />;
}
```


#### Props

**Radio props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for `filled` variant |
| color | MantineColor | - | Key of theme.colors or any valid CSS color to set radio background color in checked state |
| description | React.ReactNode | - | Description displayed below the label |
| error | React.ReactNode | - | Error displayed below the label |
| icon | FC<RadioIconProps> | - | A component that replaces the default radio icon (centered dot) |
| iconColor | MantineColor | - | Key of theme.colors or any valid CSS color to set icon color. When not set, icon color is determined automatically based on theme.autoContrast setting |
| label | React.ReactNode | - | Content of the `label` associated with the radio |
| labelPosition | "left" \| "right" | - | Position of the label relative to the input |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| rootRef | Ref<HTMLDivElement> | - | Assigns ref of the root element |
| size | MantineSize | - | Controls size of the component |
| withErrorStyles | boolean | - | If set, applies error styles to the radio when `error` prop is set |
| wrapperProps | React.ComponentProps<"div"> | - | Props passed down to the root element |

**Radio.GroupContext props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|

**Radio.Group props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | `Radio` components and any other elements |
| defaultValue | string \| null | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute, prevents interactions |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| id | string | - | Static id used as base to generate `aria-` attributes, by default generates random id |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelElement | "div" \| "label" | - | Root element for the label. Use `'div'` when wrapper contains multiple input elements and you need to handle `htmlFor` manually. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| name | string | - | `name` attribute of child radio inputs. By default, `name` is generated randomly. |
| onChange | (value: Value) => void | - | Called when value changes |
| readOnly | boolean | - | If set, value cannot be changed |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| size | MantineSize | - | Controls size of the `Input.Wrapper` |
| value | string \| null | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| wrapperProps | React.ComponentProps<"div"> | - | Props passed down to the `Input.Wrapper` |

**Radio.Indicator props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for `filled` variant |
| checked | boolean | - | Checked state |
| color | MantineColor | - | Key of theme.colors or any valid CSS color to set indicator background color in checked state |
| disabled | boolean | - | Disabled state |
| icon | FC<RadioIconProps> | - | A component that replaces the default radio icon (centered dot) |
| iconColor | MantineColor | - | Key of theme.colors or any valid CSS color to set icon color. When not set, icon color is determined automatically based on theme.autoContrast setting |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| size | MantineSize | - | Controls size of the component |

**Radio.CardContext props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|

**Radio.Card props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | - | Checked state |
| name | string | - | Value used to associate all related radio cards, required for accessibility if used outside of `Radio.Group` |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| value | string | - | Value of the radio, used with Radio.Group |
| withBorder | boolean | - | Adds border to the root element |


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
| radio | data-error | `error` prop is set | - |
| inner | data-label-position | - | Value of `labelPosition` prop |

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
| indicator | data-checked | `checked` prop is set | - |
| indicator | data-disabled | `disabled` prop is set | - |

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
| card | data-checked | `checked` prop is set | - |
| card | data-with-border | `withBorder` prop is set | - |
