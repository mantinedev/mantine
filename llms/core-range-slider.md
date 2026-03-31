# RangeSlider
Package: @mantine/core
Import: import { RangeSlider } from '@mantine/core';
Description: RangeSlider component

## Usage

```tsx
import { RangeSlider } from '@mantine/core';


function Demo() {
  return (
    <RangeSlider
       color="blue" size="md" radius="xl" showLabelOnHover={true} labelAlwaysOn={false}
      defaultValue={[20, 60]}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
```


## Controlled

```tsx
import { useState } from 'react';
import { RangeSlider } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<[number, number]>([20, 80]);
  return <RangeSlider value={value} onChange={setValue} />;
}
```

## Uncontrolled

`RangeSlider` can be used with uncontrolled forms the same way as a native input element.
Set the `name` attribute to include range slider value in `FormData` object on form submission.
To control the initial value in uncontrolled forms, use the `defaultValue` prop.

Example usage of uncontrolled `RangeSlider` with `FormData`:

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('Range slider value:', formData.get('range'));
      }}
    >
      <RangeSlider
        name="range"
        defaultValue={[20, 80]}
        min={0}
        max={100}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Disabled

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider defaultValue={[20, 60]} disabled />;
}
```


## Control label

To change the label behavior and appearance, set the following props:

* `label` – formatter function, accepts value as an argument, set to null to disable the label, defaults to `f => f`
* `labelAlwaysOn` – if true, the label will always be displayed; by default the label is visible only when the user is dragging
* `labelTransitionProps` – props passed down to the [Transition](https://mantine.dev/llms/core-transition.md) component, can be used to customize the label animation

```tsx
import { RangeSlider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <RangeSlider defaultValue={[20, 60]} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <RangeSlider defaultValue={[20, 60]} label={(value) => `${value} °C`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <RangeSlider defaultValue={[20, 60]} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <RangeSlider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
```


## Min, max and step

```tsx
import { RangeSlider, Text } from '@mantine/core';

const marks = [{ value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <RangeSlider minRange={2} defaultValue={[0, 10]} min={-10} max={10} step={0.1} />

      <Text mt="md">Step matched with marks</Text>
      <RangeSlider defaultValue={[50, 75]} step={25} marks={marks} />
    </>
  );
}
```


## Domain

By default, `min` and `max` values define the possible range of values.
The `domain` prop allows setting the possible range of values independently of the
`min` and `max` values:

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider
      domain={[0, 100]}
      min={10}
      max={90}
      defaultValue={[25, 75]}
      marks={[
        { value: 10, label: 'min' },
        { value: 90, label: 'max' },
      ]}
    />
  );
}
```


## Decimal values

To use `RangeSlider` with decimal values, set the `min`, `max`, and `step` props:

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider min={0} max={1} minRange={0.2} step={0.0005} defaultValue={[0.2, 0.8]} />;
}
```


## minRange

Use the `minRange` prop to control the minimum range between `from` and `to` values
in `RangeSlider`. The default value is `10`. This ensures the thumbs must be at least
the specified distance apart:

```tsx
import { RangeSlider, Text } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([30, 60]);

  return (
    <>
      <Text size="sm" mb="xs">
        Minimum range: 20 (thumbs must be at least 20 units apart)
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        minRange={20}
      />
      <Text size="sm" mt="xs">
        Value: [{value[0]}, {value[1]}] - Range: {value[1] - value[0]}
      </Text>
    </>
  );
}
```


## maxRange

Use the `maxRange` prop to control the maximum range between `from` and `to` values.
This limits how wide the selection can be. By default, `maxRange` is set to `Infinity`:

```tsx
import { RangeSlider, Text } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([20, 80]);

  return (
    <>
      <Text size="sm" mb="xs">
        Maximum range: 50 (selection cannot be wider than 50 units)
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        maxRange={50}
      />
      <Text size="sm" mt="xs">
        Value: [{value[0]}, {value[1]}] - Range: {value[1] - value[0]}
      </Text>
    </>
  );
}
```


## pushOnOverlap

The `pushOnOverlap` prop controls whether the thumbs should push each other when they overlap.
By default, `pushOnOverlap` is `true`. If you want to disable this behavior, set it to `false`.

Example of `pushOnOverlap={false}`:

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider pushOnOverlap={false} defaultValue={[25, 65]} minRange={20} />;
}
```


## Marks

Add any number of marks to the slider by setting the `marks` prop to an array of objects:

```tsx
const marks = [
  { value: 20 }, // -> displays mark on slider track
  { value: 40, label: '40%' }, // -> adds mark label below slider track
];
```

Note that mark value is relative to slider value, not width:

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <RangeSlider
        defaultValue={[20, 60]}
        marks={[{ value: 10 }, { value: 40 }, { value: 95 }]}
        mb={32}
      />

      <RangeSlider
        mb={32}
        defaultValue={[20, 60]}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </>
  );
}
```


## Restrict selection to marks

Set `restrictToMarks` prop to restrict slider value to marks only. Note that in
this case `step` prop is ignored:

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider
      restrictToMarks
      defaultValue={[5, 15]}
      marks={[
        { value: 5 },
        { value: 15 },
        { value: 25 },
        { value: 35 },
        { value: 70 },
        { value: 80 },
        { value: 90 },
      ]}
    />
  );
}
```


## Inverted

You can invert the track with the `inverted` prop:

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider inverted defaultValue={[20, 60]} />;
}
```


## Hidden marks

Hidden marks allow you to snap to specific values without displaying them visually on the track.
This is useful when you want to create a "sticky" snapping behavior to certain values that
you don't want to show to the user. Use this feature together with `restrictToMarks` prop:

```tsx
import { RangeSlider, Text, Box } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([25, 75]);

  return (
    <Box pb="md">
      <Text size="sm" mb="xs">
        Hidden marks allow you to snap to specific values without displaying them visually. Current
        value: [{value[0]}, {value[1]}]
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
        minRange={10}
        restrictToMarks
        marks={[
          { value: 0, label: '0%' },
          { value: 20, hidden: true },
          { value: 40, hidden: true },
          { value: 50, label: '50%' },
          { value: 60, hidden: true },
          { value: 80, hidden: true },
          { value: 100, label: '100%' },
        ]}
      />
    </Box>
  );
}
```


## Accessibility

`RangeSlider` component is accessible by default:

* Thumbs are focusable
* When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb
* Value can be changed with arrows with step increment/decrement

To label component for screen readers, add labels to thumbs:

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider
      thumbFromLabel="First thumb aria-label"
      thumbToLabel="Second thumb aria-label"
    />
  );
}
```

## Keyboard interactions


#### Props

**RangeSlider props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color, controls color of track and thumb |
| defaultValue | RangeSliderValue | - | Uncontrolled component default value |
| disabled | boolean | - | Disables slider |
| domain | [number, number] | - | Domain of the slider, defines the selectable value range independently of min/max. Useful when you want to display a wider track range (min/max) but restrict actual selection to a subset (domain). |
| hiddenInputProps | React.ComponentProps<"input"> | - | Props passed down to the hidden input |
| inverted | boolean | - | Determines whether track values representation should be inverted |
| label | ReactNode \| ((value: number) => ReactNode) | - | Function to generate label or any react node to render instead, set to null to disable label |
| labelAlwaysOn | boolean | - | Determines whether the label should be visible when the slider is not being dragged or hovered |
| labelTransitionProps | TransitionProps | - | Props passed down to the `Transition` component |
| marks | SliderMark[] | - | Marks displayed on the track |
| max | number | - | Maximum possible value |
| maxRange | number | - | Maximum range interval |
| min | number | - | Minimal possible value |
| minRange | number | - | Minimal range interval between the two thumbs. Consider this value relative to the total range (max - min). |
| name | string | - | Hidden input name, use with uncontrolled component |
| onChange | (value: RangeSliderValue) => void | - | Called when value changes |
| onChangeEnd | (value: RangeSliderValue) => void | - | Called when user stops dragging slider or changes value with arrows |
| orientation | "horizontal" \| "vertical" | - | Slider orientation |
| precision | number | - | Number of significant digits after the decimal point |
| pushOnOverlap | boolean | - | Determines whether the other thumb should be pushed by the current thumb dragging when `minRange`/`maxRange` is reached |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| restrictToMarks | boolean | - | Determines whether the selection should be only allowed from the given marks array |
| scale | (value: number) => number | - | A transformation function to change the scale of the slider |
| showLabelOnHover | boolean | - | Determines whether the label should be displayed when the slider is hovered |
| size | MantineSize \| number | - | Controls size of the track |
| step | number | - | Number by which value will be incremented/decremented with thumb drag and arrows |
| thumbChildren | React.ReactNode | - | Content rendered inside thumb |
| thumbFromLabel | string | - | First thumb `aria-label` |
| thumbLabel | string | - | `aria-label` for both thumbs (overridden by thumbFromLabel/thumbToLabel if provided) |
| thumbProps | (index: 0 \| 1) => DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> | - | Props passed down to thumb element based on the thumb index |
| thumbSize | string \| number | - | Thumb `width` and `height`, by default value is computed based on `size` prop |
| thumbToLabel | string | - | Second thumb `aria-label` |
| value | RangeSliderValue | - | Controlled component value |