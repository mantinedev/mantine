# HueSlider
Package: @mantine/core
Import: import { HueSlider } from '@mantine/core';
Description: Slider component for selecting hue channel in color pickers (0 – 360 degrees)

## Usage

Use `HueSlider` component to allow users to select hue value of a color.
It accepts values from `0` to `360`. `HueSlider` is a part of [ColorPicker](https://mantine.dev/llms/core-color-picker.md) component,
but can also be used separately.

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



#### Props

**HueSlider props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| focusable | boolean | - | If set, slider thumb can be focused |
| onChange | (value: number) => void | - | Called when value changes |
| onChangeEnd | (value: number) => void | - | Called when user stops dragging the slider or uses keyboard to change value |
| onScrubEnd | () => void | - | Called when user stops dragging the slider |
| onScrubStart | () => void | - | Called when user starts dragging the slider |
| size | MantineSize | - | Slider size |
| value | number | required | Controlled component value |


#### Styles API

HueSlider component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**HueSlider selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| slider | .mantine-HueSlider-slider | Root element |
| sliderOverlay | .mantine-HueSlider-sliderOverlay | Element used to display various overlays over hue slider |
| thumb | .mantine-HueSlider-thumb | Thumb of the hue slider |
