# ColorInput
Package: @mantine/core
Import: import { ColorInput } from '@mantine/core';
Description: Capture color from user

## Usage

ColorInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. ColorInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      placeholder="Input placeholder"
    />
  );
}
```


## Loading state

Set `loading` prop to display a loading indicator. By default, the loader is displayed on the right side of the input.
You can change the position with the `loadingPosition` prop to `'left'` or `'right'`. This is useful for async operations like API calls, searches, or validations:

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput placeholder="Pick color" loading />;
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

The component supports hex, hexa, rgb, rgba, hsl and hsla color formats.
The slider to change opacity is displayed only for hexa, rgba and hsla formats:

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899" format="hex" />;
}
```


## Preserve invalid input

By default, `ColorInput` will revert the value on blur to the last known valid value.
To change this behavior and keep the invalid value, set `fixOnBlur={false}`:

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput fixOnBlur={false} label="Value is not fixed on blur" placeholder="May contain invalid value" />;
}
```


## onChangeEnd

`onChangeEnd` is called when the user stops dragging the slider or changes the input value.
It is useful when you need to update the color only when the user has finished interacting with the component:

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

To disable free input, set the `disallowInput` prop:

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
```


## With swatches

You can add any amount of predefined color swatches:

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
    />
  );
}
```


By default, there will be 7 swatches per row. You can change this with the `swatchesPerRow` prop,
like in the [ColorPicker](https://mantine.dev/llms/core-color-picker.md) component:

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker swatchesPerRow={7} format="hex" swatches={[${Object.keys(DEFAULT_THEME.colors)
      .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
      .join(', ')}]} />
  );
}
```


If you need to restrict color picking to certain colors – disable the color picker and disallow free input:

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
    />
  );
}
```


## Close dropdown on color swatch click

To close the dropdown when one of the color swatches is clicked, set the `closeOnColorSwatchClick` prop:

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      closeOnColorSwatchClick
      label="Dropdown is closed when color swatch is clicked"
      placeholder="Click color swatch"
      swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
    />
  );
}
```


## Hide dropdown

To hide the dropdown, set `withPicker={false}`:

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
```


## Eye dropper

By default, if the [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API)
is available, the eye dropper icon will be displayed at the right section of the input.
To disable it, set `withEyeDropper={false}`:

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
```


## Change eye dropper icon

You can replace the eye dropper icon with any React node using the `eyeDropperIcon` prop:

```tsx
import { ColorInput } from '@mantine/core';
import { CrosshairIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<CrosshairIcon size={18} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
```


## Input sections

ColorInput supports left and right sections to display icons, buttons or other content alongside the input.

Note that by default, `ColorPicker` has a color preview in the left section and an eye dropper button
in the right section. You can replace these elements with any React node using the `leftSection`
and `rightSection` props:

```tsx
import { ColorInput } from '@mantine/core';
import { EyedropperIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <EyedropperIcon size={18} />;

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        leftSectionPointerEvents="none"
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
```


## Error state

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

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```



#### Props

**ColorInput props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| closeOnColorSwatchClick | boolean | - | If set, the dropdown is closed when one of the color swatches is clicked |
| defaultValue | string | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| disallowInput | boolean | - | If input is not allowed, the user can only pick value with color picker and swatches |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| eyeDropperButtonProps | Record<string, any> | - | Props passed down to the eye dropper button |
| eyeDropperIcon | React.ReactNode | - | An icon to replace the default eye dropper icon |
| fixOnBlur | boolean | - | If set, the input value resets to the last known valid value when the input loses focus |
| format | 'hex' \| 'hexa' \| 'rgba' \| 'rgb' \| 'hsl' \| 'hsla' | - | Color format. `hexa`, `rgba`, `hsla` values render alpha channel slider |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| onChange | (value: string) => void | - | Called when value changes |
| onChangeEnd | (value: string) => void | - | Called when the user stops dragging one of the sliders or changes the value with keyboard |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| popoverProps | PopoverProps | - | Props passed down to the `Popover` component |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| swatches | string[] | - | A list of colors used to display swatches list below the color picker |
| swatchesPerRow | number | - | Number of swatches per row |
| value | string | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| withEyeDropper | boolean | - | If set, the eye dropper button is displayed in the right section |
| withPicker | boolean | - | If `false`, the component displays only swatches |
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
