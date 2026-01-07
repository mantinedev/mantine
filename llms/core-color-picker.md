# ColorPicker
Package: @mantine/core
Import: import { ColorPicker } from '@mantine/core';
Description: Pick colors in hex(a), rgb(a), hsl(a) and hsv(a) formats

## Usage

#### Example: usage

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


## Color format

`ColorPicker` supports hex, hexa, rgb, rgba, hsl and hsla color formats.
Slider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:

#### Example: formatsConfigurator

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker />;
}
```


## With swatches

You can add predefined color swatches with `swatches` prop:

#### Example: swatches

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


By default, `ColorPicker` will display 7 swatches per row, you can configure it with `swatchesPerRow` prop:

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


To display swatches without picker set `withPicker={false}` and `fullWidth` props:

#### Example: swatchesOnly

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

#### Example: sizeConfigurator

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker />;
}
```


## fullWidth

Set `fullWidth` prop to stretch component to 100% of parent width. In this case the picker will not
have fixed width, but you can still use `size` prop to control sizes of sliders.

#### Example: fullWidth

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
```


#### Example: stylesApi

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg" swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
```


## HueSlider component

#### Example: hueSlider

```tsx
import { useState } from 'react';
import { HueSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  );
}
```


## AlphaSlider component

#### Example: alphaSlider

```tsx
import { useState } from 'react';
import { AlphaSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(0.55);

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="#1c7ed6" value={value} onChange={onChange} />
    </>
  );
}
```


## Accessibility

ColorPicker component is accessible by default:

* Saturation, hue and alpha sliders are focusable
* When moused is used to interact with the slider, focus is moved to the slider
* All values can be changed with arrows

To make component accessible for screen readers, set `saturationLabel`, `hueLabel` and `alphaLabel`:

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| alphaLabel | string | - | Alpha slider <code>aria-label</code> |
| defaultValue | string | - | Uncontrolled component default value |
| focusable | boolean | - | If set, interactive elements (sliders thumbs and swatches) are focusable with keyboard |
| format | ColorFormat | - | Color format |
| fullWidth | boolean | - | If set, the component takes 100% width of its container |
| hueLabel | string | - | Hue slider <code>aria-label</code> |
| onChange | (value: string) => void | - | Called when value changes |
| onChangeEnd | (value: string) => void | - | Called when the user stops dragging one of the sliders or changes the value with keyboard |
| onColorSwatchClick | (color: string) => void | - | Called when one of the color swatches is clicked |
| saturationLabel | string | - | Saturation slider <code>aria-label</code> |
| size | MantineSize | (string & {}) | - | Controls size of hue, alpha and saturation sliders |
| swatches | string[] | - | A list of colors used to display swatches list below the color picker |
| swatchesPerRow | number | - | Number of swatches per row |
| value | string | - | Controlled component value |
| withPicker | boolean | - | Determines whether the color picker should be displayed |


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