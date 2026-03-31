# ColorPicker
Package: @mantine/core
Import: import { ColorPicker } from '@mantine/core';
Description: Pick colors in hex(a), rgb(a), hsl(a) and hsv(a) formats

## Usage

```tsx
import { useState } from 'react';
import { ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </>
  );
}
```


## Controlled

The `ColorPicker` value must be a string; other types are not supported.
The `onChange` function is called with a string value as a single argument.

```tsx
import { useState } from 'react';
import { ColorPicker } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('#ffffff');
  return <ColorPicker value={value} onChange={setValue} />;
}
```

## Uncontrolled

`ColorPicker` can be used with uncontrolled forms the same way as a native `input` element.
Set the `name` attribute to include color picker value in `FormData` object on form submission.
To control the initial value in uncontrolled forms, use the `defaultValue` prop.

Example usage of uncontrolled `ColorPicker` with `FormData`:

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Color value:', formData.get('color'));
      }}
    >
      <ColorPicker
        name="color"
        defaultValue="#FF0000"
        format="hex"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Color format

`ColorPicker` supports hex, hexa, rgb, rgba, hsl and hsla color formats.
The slider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker format="hex" />;
}
```


## With swatches

You can add predefined color swatches with the `swatches` prop:

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors)
        .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
        .join(', ')}]}
    />
  );
}
```


By default, `ColorPicker` will display 7 swatches per row. You can configure it with the `swatchesPerRow` prop:

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


To display swatches without picker, set `withPicker={false}` and `fullWidth` props:

```tsx
import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red.slice(0, 7),
          ...DEFAULT_THEME.colors.green.slice(0, 7),
          ...DEFAULT_THEME.colors.blue.slice(0, 7),
        ]}
      />

      <Text>{value}</Text>
    </>
  );
}
```


## Size

`ColorPicker` has 5 predefined sizes: `xs`, `sm`, `md`, `lg` and `xl`:

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker size="sm" />;
}
```


## Accessibility

The ColorPicker component is accessible by default:

* Saturation, hue and alpha sliders are focusable
* When the mouse is used to interact with the slider, focus is moved to the slider
* All values can be changed with arrows

To make the component accessible for screen readers, set `saturationLabel`, `hueLabel` and `alphaLabel`:

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      saturationLabel="Saturation"
      hueLabel="Hue"
      alphaLabel="Alpha"
    />
  );
}
```


#### Props

**ColorPicker props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| alphaLabel | string | - | Alpha slider `aria-label` |
| defaultValue | string | - | Uncontrolled component default value |
| focusable | boolean | - | If set, interactive elements (sliders thumbs and swatches) are focusable with keyboard |
| format | 'hex' \| 'hexa' \| 'rgba' \| 'rgb' \| 'hsl' \| 'hsla' | - | Color format. `hexa`, `rgba`, `hsla` values render alpha channel slider |
| fullWidth | boolean | - | If set, the component takes 100% width of its container |
| hiddenInputProps | ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & DataAttributes | - | Props spread to the hidden input |
| hueLabel | string | - | Hue slider `aria-label` |
| name | string | - | Hidden input `name` attribute, if not set, the input will not be rendered |
| onChange | (value: string) => void | - | Called when value changes |
| onChangeEnd | (value: string) => void | - | Called when the user stops dragging one of the sliders or changes the value with keyboard |
| onColorSwatchClick | (color: string) => void | - | Called when one of the color swatches is clicked |
| saturationLabel | string | - | Saturation slider `aria-label` |
| size | MantineSize | - | Component size |
| swatches | string[] | - | A list of colors used to display swatches list below the color picker |
| swatchesPerRow | number | - | Number of swatches per row |
| value | string | - | Controlled component value |
| withPicker | boolean | - | If `false`, the component displays only swatches |


#### Styles API

ColorPicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ColorPicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-ColorPicker-wrapper | Root element |
| preview | .mantine-ColorPicker-preview | Color preview, displayed only when `format` supports alpha channel |
| body | .mantine-ColorPicker-body | Contains alpha/hue sliders and color preview |
| slider | .mantine-ColorPicker-slider | Alpha and hue sliders root |
| sliderOverlay | .mantine-ColorPicker-sliderOverlay | Element used to display various overlays over hue and alpha sliders |
| saturation | .mantine-ColorPicker-saturation | Saturation picker |
| saturationOverlay | .mantine-ColorPicker-saturationOverlay | Element used to display various overlays over saturation picker |
| sliders | .mantine-ColorPicker-sliders | Contains alpha and hue sliders |
| thumb | .mantine-ColorPicker-thumb | Thumb of all sliders |
| swatch | .mantine-ColorPicker-swatch | Color swatch |
| swatches | .mantine-ColorPicker-swatches | Color swatches list |

**ColorPicker CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| wrapper | --cp-body-spacing | Controls spacing between sliders and saturation |
| wrapper | --cp-preview-size | Controls size of the preview swatch |
| wrapper | --cp-width | Controls `width` of the root element |
| wrapper | --cp-swatch-size | Controls swatch `width` and `height` |
| wrapper | --cp-thumb-size | Controls thumb `width` and `height` in all sliders and saturation picker |
| wrapper | --cp-saturation-height | Controls `height` of the saturation picker |
