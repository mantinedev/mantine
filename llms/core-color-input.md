# ColorInput
Package: @mantine/core
Import: import { ColorInput } from '@mantine/core';
Description: Capture color from user

## Usage

<InputFeatures component="ColorInput" element="input" />

ColorInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. ColorInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
      
      placeholder="Input placeholder"
    />
  );
}
```


## Controlled

```tsx
import { useState } from 'react';
import { ColorInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <ColorInput value={value} onChange={setValue} />;
}
```

## Formats

Component supports hex, hexa, rgb, rgba, hsl and hsla color formats.
Slider to change opacity is displayed only for hexa, rgba and hsla formats:

#### Example: formatsConfigurator

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899" />;
}
```


## Preserve invalid input

By default, `ColorInput` will revert the value on blur to the last known valid value.
To change this behavior and keep invalid value, set `fixOnBlur={false}`:

#### Example: fixOnBlur

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput fixOnBlur={false} label="Value is not fixed on blur" placeholder="May contain invalid value" />;
}
```


## onChangeEnd

`onChangeEnd` is called when user stops dragging slider or changes input value.
It is useful when you need to update color only when user finished interaction with the component:

#### Example: onChangeEnd

```tsx
import { useState } from 'react';
import { ColorInput, Text } from '@mantine/core';

function Demo() {
  const [changeEndValue, setChangeEndValue] = useState('#FFFFFF');

  return (
    <>
      <Text mb="md">
        Change end value: <b>{changeEndValue}</b>
      </Text>

      <ColorInput
        label="Pick color"
        placeholder="Pick color"
        defaultValue="#FFFFFF"
        onChangeEnd={setChangeEndValue}
      />
    </>
  );
}
```


## Disable free input

To disable free input set `disallowInput` prop:

#### Example: disallowInput

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
```


## With swatches

You can add any amount of predefined color swatches:

#### Example: swatches

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors)
        .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
        .join(', ')}]}
    />
  );
}
```


By default, there will be 7 swatches per row, you can change this with `swatchesPerRow` prop,
like in [ColorPicker](https://mantine.dev/core/color-picker/) component:

#### Example: swatchesConfigurator

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="hex" swatches={[${Object.keys(DEFAULT_THEME.colors)
      .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
      .join(', ')}]} />
  );
}
```


If you need to restrict color picking to certain colors – disable color picker and disallow free input:

#### Example: swatchesOnly

```tsx
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
```


## Close dropdown on color swatch click

To close the dropdown when one of the color swatches is clicked, set `closeOnColorSwatchClick` prop:

#### Example: closeOnColorSwatchClick

```tsx
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      closeOnColorSwatchClick
      label="Dropdown is closed when color swatch is clicked"
      placeholder="Click color swatch"
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
```


## Hide dropdown

To hide dropdown, set `withPicker={false}`:

#### Example: withPicker

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
```


## Eye dropper

By default, if [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API)
is available, eye dropper icon will be displayed at the right section of the input.
To disable it, set `withEyeDropper={false}`:

#### Example: noEyeDropper

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
```


## Change eye dropper icon

You can replace eye dropper icon with any React node using `eyeDropperIcon` prop:

#### Example: eyeDropperIcon

```tsx
import { ColorInput } from '@mantine/core';
import { IconFocus2 } from '@tabler/icons-react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 size={18} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
```


<InputSections component="ColorInput" />

## Input sections

ColorInput supports left and right sections to display icons, buttons or other content alongside the input.

Note that by default, `ColorPicker` has color preview in the left section and eye dropper button
in the right section. You can replace these elements with any React node using `leftSection`
and `rightSection` props:

#### Example: sections

```tsx
import { ColorInput } from '@mantine/core';
import { IconColorPicker } from '@tabler/icons-react';

function Demo() {
  const icon = <IconColorPicker size={18} stroke={1.5} />;

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
        mt="md"
      />
    </>
  );
}
```


## Error state

#### Example: error

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <ColorInput label="Boolean error" placeholder="Boolean error" error />
      <ColorInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```


## Disabled state

#### Example: disabled

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```


## Read only

#### Example: readOnly

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
```


#### Example: stylesApi

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      
    />
  );
}
```


<GetElementRef component="ColorInput" refType="input" />

## Get element ref

```tsx
import { useRef } from 'react';
import { ColorInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <ColorInput ref={ref} />;
}
```

<InputAccessibility component="ColorInput" />

## Accessibility

ColorInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| closeOnColorSwatchClick | boolean | - | If set, the dropdown is closed when one of the color swatches is clicked |
| defaultValue | string | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of <code>Input.Description</code> component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the <code>Input.Description</code> component |
| disabled | boolean | - | Sets <code>disabled</code> attribute on the <code>input</code> element |
| disallowInput | boolean | - | If input is not allowed, the user can only pick value with color picker and swatches |
| error | React.ReactNode | - | Contents of <code>Input.Error</code> component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the <code>Input.Error</code> component |
| eyeDropperButtonProps | Record<string, any> | - | Props passed down to the eye dropper button |
| eyeDropperIcon | React.ReactNode | - | An icon to replace the default eye dropper icon |
| fixOnBlur | boolean | - | If set, the input value resets to the last known valid value when the input loses focus |
| format | ColorFormat | - | Color format |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | <code>size</code> attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of <code>Input.Label</code> component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the <code>Input.Label</code> component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>leftSection</code> element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>leftSection</code> element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set <code>width</code> of the section and input <code>padding-left</code>, by default equals to the input height |
| onChange | (value: string) => void | - | Called when value changes |
| onChangeEnd | (value: string) => void | - | Called when the user stops dragging one of the sliders or changes the value with keyboard |
| pointer | boolean | - | Determines whether the input should have <code>cursor: pointer</code> style |
| popoverProps | PopoverProps | - | Props passed down to the <code>Popover</code> component |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>rightSection</code> element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>rightSection</code> element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set <code>width</code> of the section and input <code>padding-right</code>, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input <code>height</code> and horizontal <code>padding</code> |
| swatches | string[] | - | A list of colors used to display swatches list below the color picker |
| swatchesPerRow | number | - | Number of swatches per row |
| value | string | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides <code>required</code> prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the <code>error</code> prop is set |
| withEyeDropper | boolean | - | If set, the eye dropper button is displayed in the right section |
| withPicker | boolean | - | Determines whether the color picker should be displayed |
| withPreview | boolean | - | If set, the preview color swatch is displayed in the left section of the input |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

ColorInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ColorInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-ColorInput-wrapper | Root element |
| input | .mantine-ColorInput-input | Input element |
| section | .mantine-ColorInput-section | Left and right sections |
| root | .mantine-ColorInput-root | Root element |
| label | .mantine-ColorInput-label | Label element |
| required | .mantine-ColorInput-required | Required asterisk element, rendered inside label |
| description | .mantine-ColorInput-description | Description element |
| error | .mantine-ColorInput-error | Error element |
| preview | .mantine-ColorInput-preview | Color preview, displayed only when `format` supports alpha channel |
| body | .mantine-ColorInput-body | Contains alpha/hue sliders and color preview |
| slider | .mantine-ColorInput-slider | Alpha and hue sliders root |
| sliderOverlay | .mantine-ColorInput-sliderOverlay | Element used to display various overlays over hue and alpha sliders |
| saturation | .mantine-ColorInput-saturation | Saturation picker |
| saturationOverlay | .mantine-ColorInput-saturationOverlay | Element used to display various overlays over saturation picker |
| sliders | .mantine-ColorInput-sliders | Contains alpha and hue sliders |
| thumb | .mantine-ColorInput-thumb | Thumb of all sliders |
| swatch | .mantine-ColorInput-swatch | Color swatch |
| swatches | .mantine-ColorInput-swatches | Color swatches list |
| dropdown | .mantine-ColorInput-dropdown | Popover dropdown |
| colorPreview | .mantine-ColorInput-colorPreview | Color swatch preview in input left section |
| eyeDropperButton | .mantine-ColorInput-eyeDropperButton | Eye dropper button |
| eyeDropperIcon | .mantine-ColorInput-eyeDropperIcon | Default eye dropper icon |

**ColorInput CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| colorPreview | --ci-preview-size | Controls `width` and `height` of color preview |