# Slider
Package: @mantine/core
Import: import { Slider } from '@mantine/core';
Description: Slider component

## Usage

#### Example: configurator

```tsx
import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      
      defaultValue={40}
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
import { Slider } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(40);
  return <Slider value={value} onChange={setValue} />;
}
```

## Disabled

#### Example: disabled

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider defaultValue={60} disabled />;
}
```


## onChangeEnd

`onChangeEnd` callback is called when user the slider is stopped from being dragged or value is changed with keyboard.
You can use it as a debounced callback to avoid too frequent updates.

#### Example: changeEnd

```tsx
import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />

      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
```


## Control label

To change label behavior and appearance, set the following props:

* `label` – formatter function, accepts value as an argument, set null to disable label, defaults to `f => f`
* `labelAlwaysOn` – if true – label will always be displayed, by default label is visible only when user is dragging
* `labelTransitionProps` – props passed down to the [Transition](https://mantine.dev/core/transition) component, can be used to customize label animation

#### Example: label

```tsx
import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => `${value} °C`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
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
import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
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
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      domain={[0, 100]}
      min={10}
      max={90}
      defaultValue={25}
      marks={[
        { value: 10, label: 'min' },
        { value: 90, label: 'max' },
      ]}
    />
  );
}
```


## Decimal values

To use `Slider` with decimal values, set `min`, `max` and `step` props:

#### Example: decimal

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
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
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} mb={32} />
      <Slider
        mb={32}
        defaultValue={40}
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
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Slider
        restrictToMarks
        defaultValue={25}
        marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
      />

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
    </Stack>
  );
}
```


## Thumb size

#### Example: thumbSize

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider defaultValue={20} />;
}
```


## Thumb children

#### Example: thumbChildren

```tsx
import { Slider, RangeSlider } from '@mantine/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size={16} />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size={16} key="1" />, <IconHeartBroken size={16} key="2" />]}
      />
    </>
  );
}
```


## Scale

You can use the `scale` prop to represent the value on a different scale.

In the following demo, the value `x` represents the value `2^x`. Increasing `x` by one increases the represented value by 2 to the power of `x`.

#### Example: scale

```tsx
import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
```


## Inverted

You can invert the track with the `inverted` prop:

#### Example: inverted

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider inverted defaultValue={80} />;
}
```


#### Example: stylesApi

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
```


Example of using [Styles API](https://mantine.dev/styles/styles-api/) to change `Slider` styles:

#### Example: customize

```tsx
// Demo.tsx
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      size={2}
      classNames={classes}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}

// Demo.module.css
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  transform: translateX(-3px) translateY(-2px);
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: 5px;
  margin-top: 0;
}

.thumb {
  height: 16px;
  width: 16px;
  background-color: var(--mantine-color-white);
  border-width: 1px;
  box-shadow: var(--mantine-shadow-sm);
}
```


## Vertical slider

`Slider` does not provide vertical orientation as it is very rarely used.
If you need this feature you can build it yourself with [use-move](https://mantine.dev/hooks/use-move/) hook.

## Build custom slider

If `Slider` component does not meet your requirements, you can build a custom slider with [use-move](https://mantine.dev/hooks/use-move/) hook:

#### Example: customSlider

```tsx
// Demo.tsx
import { useState } from 'react';
import { IconGripVertical } from '@tabler/icons-react';
import { clamp, useMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(0.3);
  const { ref } = useMove(({ x }) => setValue(clamp(x, 0.1, 0.9)));
  const labelFloating = value < 0.2 || value > 0.8;

  return (
    <div className={classes.root}>
      <div className={classes.track} ref={ref}>
        <div
          className={classes.filled}
          style={{
            width: `calc(${value * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined} data-filled>
            {(value * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.empty}
          style={{
            width: `calc(${(1 - value) * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined}>
            {((1 - value) * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.thumb}
          style={{ left: `calc(${value * 100}% - var(--thumb-width) / 2)` }}
        >
          <IconGripVertical stroke={1.5} />
        </div>
      </div>
    </div>
  );
}

// Demo.module.css
.root {
  padding-top: 20px;
}

.track {
  --thumb-width: 20px;
  --thumb-offset: 10px;

  position: relative;
  height: 60px;
  display: flex;
}

.filled {
  height: 100%;
  margin-right: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-blue-filled);
  display: flex;
  align-items: center;
  padding-inline: 10px;
}

.empty {
  height: 100%;
  margin-left: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-gray-1);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: flex-end;

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
  }
}

.thumb {
  position: absolute;
  background-color: var(--mantine-color-white);
  border: 1px solid var(--mantine-color-gray-2);
  border-radius: var(--mantine-radius-md);
  height: 100%;
  width: var(--thumb-width);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-gray-5);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
    color: var(--mantine-color-dark-0);
  }
}

.label {
  font-size: var(--mantine-font-size-xl);
  font-weight: 700;
  transition:
    transform 100ms ease,
    color 100ms ease;

  &[data-filled] {
    color: var(--mantine-color-white);
  }

  &[data-floating] {
    transform: translateY(-44px) translateX(-10px);
    color: var(--mantine-color-black);

    &:not([data-filled]) {
      transform: translateY(-44px) translateX(10px);
    }

    @mixin dark {
      color: var(--mantine-color-white);
    }
  }
}
```


## Accessibility

`Slider` component is accessible by default:

* Thumbs are focusable
* When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb
* Value can be changed with arrows with step increment/decrement

To label component for screen readers, add labels to thumbs:

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider thumbLabel="Thumb aria-label" />;
}
```

## Keyboard interactions


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color, controls color of track and thumb |
| defaultValue | number | - | Uncontrolled component default value |
| disabled | boolean | - | Disables slider |
| domain | [number, number] | - | Domain of the slider, defines the full range of possible values |
| hiddenInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to the hidden input |
| inverted | boolean | - | Determines whether track value representation should be inverted |
| label | ReactNode | ((value: number) => ReactNode) | - | Function to generate label or any react node to render instead, set to null to disable label |
| labelAlwaysOn | boolean | - | Determines whether the label should be visible when the slider is not being dragged or hovered |
| labelTransitionProps | TransitionProps | - | Props passed down to the <code>Transition</code> component |
| marks | { value: number; label?: ReactNode; }[] | - | Marks displayed on the track |
| max | number | - | Maximum possible value |
| min | number | - | Minimal possible value |
| name | string | - | Hidden input name, use with uncontrolled component |
| onChange | (value: number) => void | - | Called when value changes |
| onChangeEnd | (value: number) => void | - | Called when user stops dragging slider or changes value with arrows |
| precision | number | - | Number of significant digits after the decimal point |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| restrictToMarks | boolean | - | Determines whether the selection should be only allowed from the given marks array |
| scale | (value: number) => number | - | A transformation function to change the scale of the slider |
| showLabelOnHover | boolean | - | Determines whether the label should be displayed when the slider is hovered |
| size | number | MantineSize | (string & {}) | - | Controls size of the track |
| step | number | - | Number by which value will be incremented/decremented with thumb drag and arrows |
| thumbChildren | React.ReactNode | - | Content rendered inside thumb |
| thumbLabel | string | - | Thumb <code>aria-label</code> |
| thumbProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to thumb element |
| thumbSize | string | number | - | Thumb <code>width</code> and <code>height</code>, by default value is computed based on <code>size</code> prop |
| value | number | - | Controlled component value |


#### Styles API

Slider component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Slider selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Slider-root | Root element |
| label | .mantine-Slider-label | Thumb label |
| thumb | .mantine-Slider-thumb | Thumb element |
| trackContainer | .mantine-Slider-trackContainer | Wraps track element |
| track | .mantine-Slider-track | Slider track |
| bar | .mantine-Slider-bar | Track filled part |
| markWrapper | .mantine-Slider-markWrapper | Contains `mark` and `markLabel` elements |
| mark | .mantine-Slider-mark | Mark displayed on track |
| markLabel | .mantine-Slider-markLabel | Label of the associated mark, displayed below track |

**Slider CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --slider-size | Controls track `height` |
| root | --slider-color | Controls filled track, thumb and marks `background` |
| root | --slider-thumb-size | Controls thumb `width` and `height` |
| root | --slider-radius | Controls `border-radius` of track and thumb |