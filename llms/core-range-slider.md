# RangeSlider
Package: @mantine/core
Import: import { RangeSlider } from '@mantine/core';
Description: RangeSlider component

## Usage

#### Example: configurator

```tsx
import { RangeSlider } from '@mantine/core';


function Demo() {
  return (
    <RangeSlider
      
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

## Disabled

#### Example: disabled

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider defaultValue={[20, 60]} disabled />;
}
```


## Control label

To change label behavior and appearance, set the following props:

* `label` – formatter function, accepts value as an argument, set null to disable label, defaults to `f => f`
* `labelAlwaysOn` – if true – label will always be displayed, by default label is visible only when user is dragging
* `labelTransitionProps` – props passed down to the [Transition](https://mantine.dev/core/transition) component, can be used to customize label animation

#### Example: label

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

#### Example: step

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
`domain` prop allows setting the possible range of values independently of the
`min` and `max` values:

#### Example: domain

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

To use `RangeSlider` with decimal values, set `min`, `max` and `step` props:

#### Example: decimal

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider min={0} max={1} minRange={0.2} step={0.0005} defaultValue={[0.2, 0.8]} />;
}
```


## minRange

Use `minRange` prop to control minimum range between `from` and `to` values
in `RangeSlider`. The default value is `10`. The example below shows how to
use `minRange` prop to capture decimal values from the user:

#### Example: decimal

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider min={0} max={1} minRange={0.2} step={0.0005} defaultValue={[0.2, 0.8]} />;
}
```


## pushOnOverlap

`pushOnOverlap` prop controls whether the thumbs should push each other when they overlap.
By default, `pushOnOverlap` is `true`, if you want to disable this behavior, set it to `false`.

Example of `pushOnOverlap={false}`:

#### Example: pushOnOverlap

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider pushOnOverlap={false} defaultValue={[25, 65]} minRange={20} />;
}
```


## Marks

Add any number of marks to slider by setting `marks` prop to an array of objects:

```tsx
const marks = [
  { value: 20 }, // -> displays mark on slider track
  { value: 40, label: '40%' }, // -> adds mark label below slider track
];
```

Note that mark value is relative to slider value, not width:

#### Example: marks

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

#### Example: restrictToMarks

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

#### Example: inverted

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider inverted defaultValue={[20, 60]} />;
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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color, controls color of track and thumb |
| defaultValue | RangeSliderValue | - | Uncontrolled component default value |
| disabled | boolean | - | Disables slider |
| domain | [number, number] | - | Domain of the slider, defines the full range of possible values |
| hiddenInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to the hidden input |
| inverted | boolean | - | Determines whether track values representation should be inverted |
| label | ReactNode | ((value: number) => ReactNode) | - | Function to generate label or any react node to render instead, set to null to disable label |
| labelAlwaysOn | boolean | - | Determines whether the label should be visible when the slider is not being dragged or hovered |
| labelTransitionProps | TransitionProps | - | Props passed down to the <code>Transition</code> component |
| marks | { value: number; label?: ReactNode; }[] | - | Marks displayed on the track |
| max | number | - | Maximum possible value |
| maxRange | number | - | Maximum range interval |
| min | number | - | Minimal possible value |
| minRange | number | - | Minimal range interval |
| name | string | - | Hidden input name, use with uncontrolled component |
| onChange | (value: RangeSliderValue) => void | - | Called when value changes |
| onChangeEnd | (value: RangeSliderValue) => void | - | Called when user stops dragging slider or changes value with arrows |
| precision | number | - | Number of significant digits after the decimal point |
| pushOnOverlap | boolean | - | Determines whether the other thumb should be pushed by the current thumb dragging when <code>minRange</code>/<code>maxRange</code> is reached |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| restrictToMarks | boolean | - | Determines whether the selection should be only allowed from the given marks array |
| scale | (value: number) => number | - | A transformation function to change the scale of the slider |
| showLabelOnHover | boolean | - | Determines whether the label should be displayed when the slider is hovered |
| size | number | MantineSize | (string & {}) | - | Controls size of the track |
| step | number | - | Number by which value will be incremented/decremented with thumb drag and arrows |
| thumbChildren | React.ReactNode | - | Content rendered inside thumb |
| thumbFromLabel | string | - | First thumb <code>aria-label</code> |
| thumbProps | (index: 0 | 1) => Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | - | Props passed down to thumb element based on the thumb index |
| thumbSize | string | number | - | Thumb <code>width</code> and <code>height</code>, by default value is computed based on <code>size</code> prop |
| thumbToLabel | string | - | Second thumb <code>aria-label</code> |
| value | RangeSliderValue | - | Controlled component value |