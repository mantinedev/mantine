# AlphaSlider
Package: @mantine/core
Import: import { AlphaSlider } from '@mantine/core';
Description: Slider component for selecting alpha channel in color pickers (0 – 1)

## Usage

Use `AlphaSlider` component to allow users to select alpha (opacity) value of a color.
It accepts values from `0` to `1`. `AlphaSlider` is a part of [ColorPicker](https://mantine.dev/llms/core-color-picker.md) component,
but can also be used separately.

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



#### Props

**AlphaSlider props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | string | required | - |
| focusable | boolean | - | If set, slider thumb can be focused |
| onChange | (value: number) => void | - | Called when value changes |
| onChangeEnd | (value: number) => void | - | Called when user stops dragging the slider or uses keyboard to change value |
| onScrubEnd | () => void | - | Called when user stops dragging the slider |
| onScrubStart | () => void | - | Called when user starts dragging the slider |
| size | MantineSize | - | Slider size |
| value | number | required | Controlled component value |