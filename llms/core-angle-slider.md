# AngleSlider
Package: @mantine/core
Import: import { AngleSlider } from '@mantine/core';
Description: Pick angle value between 0 and 360

## Usage

Use `AngleSlider` component to pick angle value between 0 and 360:

#### Example: usage

```tsx
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" />;
}
```


## Controlled

`AngleSlider` value is a number between 0 and 360.

```tsx
import { useState } from 'react';
import { AngleSlider } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(180);
  return <AngleSlider value={value} onChange={setValue} />;
}
```

## formatLabel

Use the `formatLabel` prop to change the angle label format.
It accepts a function that takes the angle value and returns a React node:

#### Example: formatLabel

```tsx
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => `${value}°`} />;
}
```


## Marks

Set the `marks` prop to display marks on the slider.
Mark is an object of value (required, number between 0 and 360) and label (optional, React node).
To restrict selection to marks only, set the `restrictToMarks` prop:

#### Example: marks

```tsx
import { AngleSlider, Group } from '@mantine/core';

function Demo() {
  return (
    <Group p="lg" gap={50}>
      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => `${value}°`}
        size={100}
        restrictToMarks
        marks={[
          { value: 0 },
          { value: 45 },
          { value: 90 },
          { value: 135 },
          { value: 180 },
          { value: 225 },
          { value: 270 },
          { value: 315 },
        ]}
      />

      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => `${value}°`}
        size={100}
        marks={[
          { value: 0, label: '0°' },
          { value: 45, label: '45°' },
          { value: 90, label: '90°' },
          { value: 135, label: '135°' },
          { value: 180, label: '180°' },
          { value: 225, label: '225°' },
          { value: 270, label: '270°' },
          { value: 315, label: '315°' },
        ]}
      />
    </Group>
  );
}
```


## onChangeEnd

The `onChangeEnd` callback fires when the user stops dragging the slider or changes its value with the keyboard.
Use it as a debounced callback to prevent frequent updates.

#### Example: onChangeEnd

```tsx
import { useState } from 'react';
import { AngleSlider, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(0);
  const [endValue, setEndValue] = useState(0);

  return (
    <>
      <AngleSlider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <Text mt="md">Current value: {value}</Text>
      <Text>End value: {endValue}</Text>
    </>
  );
}
```


## disabled

`disabled` prop disables the component and prevents user interaction:

#### Example: disabled

```tsx
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" disabled />;
}
```


## Accessibility

To make the component accessible for screen readers, set the `aria-label` prop:

```tsx
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Gradient angle" />;
}
```

Keyboard interactions when the component is focused:

## Based on use-radial-move

`AngleSlider` is based on the [use-radial-move](https://mantine.dev/hooks/use-radial-move) hook.
You can build a custom radial slider using this hook if you need more control over the component's behavior.




#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | number | - | Uncontrolled component default value |
| disabled | boolean | - | Sets <code>data-disabled</code> attribute, disables interactions |
| formatLabel | (value: number) => ReactNode | - | A function to format label based on the current value |
| hiddenInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to the hidden input |
| marks | { value: number; label?: string; }[] | undefined | - | Array of marks displayed on the slider |
| name | string | - | Hidden input name, use with uncontrolled component |
| onChange | (value: number) => void | - | Called on value change |
| onChangeEnd | (value: number) => void | - | Called after the selection is finished |
| onScrubEnd | () => void | - | Called in <code>onMouseUp</code> and <code>onTouchEnd</code> |
| onScrubStart | () => void | - | Called in <code>onMouseDown</code> and <code>onTouchStart</code> |
| restrictToMarks | boolean | - | If set, the selection is allowed only from the given marks array |
| size | number | - | Slider size in px |
| step | number | - | Step between values |
| thumbSize | number | - | Size of the thumb in px. Calculated based on the <code>size</code> value by default. |
| value | number | - | Controlled component value |
| withLabel | boolean | - | If set, the label is displayed inside the slider |


#### Styles API

AngleSlider component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**AngleSlider selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-AngleSlider-root | Root element |
| label | .mantine-AngleSlider-label | Label inside the slider |
| marks | .mantine-AngleSlider-marks | Wrapper for all marks |
| mark | .mantine-AngleSlider-mark | Mark element |
| thumb | .mantine-AngleSlider-thumb | Slider thumb |

**AngleSlider CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --slider-size | Controls slider width and height |
| root | --thumb-size | Controls thumb size |

**AngleSlider data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | disabled | - | - |