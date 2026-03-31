# SemiCircleProgress
Package: @mantine/core
Import: import { SemiCircleProgress } from '@mantine/core';
Description: Represent progress with semi circle diagram

## Usage

```tsx
import { SemiCircleProgress } from '@mantine/core';


function Demo() {
  return (
    <SemiCircleProgress
       fillDirection="left-to-right" orientation="up" filledSegmentColor="blue" size={200} thickness={12} value={40}
      label="Label"
    />
  );
}
```


## Change empty segment color

Use `emptySegmentColor` prop to change color of empty segment,
it accepts key of `theme.colors` or any valid CSS color value:

```tsx
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
```


## Change label position

By default, the label is displayed at the bottom of the component,
you can change its position to `center` by using `labelPosition` prop:

```tsx
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  );
}
```


## Filled segment transition

By default, transitions are disabled, to enable them, set `transitionDuration` prop
to a number of milliseconds:

```tsx
import { useState } from 'react';
import { Button, SemiCircleProgress } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(30);

  return (
    <>
      <SemiCircleProgress value={value} transitionDuration={250} label={`${value}%`} />

      <Button onClick={() => setValue(Math.floor(Math.random() * 100))} mt="xl" fullWidth>
        Set random value
      </Button>
    </>
  );
}
```



#### Props

**SemiCircleProgress props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| emptySegmentColor | MantineColor | - | Key of `theme.colors` or any valid CSS color value |
| fillDirection | "right-to-left" \| "left-to-right" | - | Direction from which the circle is filled |
| filledSegmentColor | MantineColor | - | Key of `theme.colors` or any valid CSS color value |
| label | React.ReactNode | - | Label rendered inside the circle |
| labelPosition | "center" \| "bottom" | - | Label position relative to the circle center |
| orientation | "up" \| "down" | - | Orientation of the circle |
| size | number | - | Width of the component and diameter of the full circle in px. The visible SVG height will be size/2 |
| thickness | number | - | Stroke width of the circle segments in px |
| transitionDuration | number | - | Transition duration for the filled segment progress changes in ms. Does not affect color transitions |
| value | number | required | Progress value from `0` to `100` |


#### Styles API

SemiCircleProgress component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**SemiCircleProgress selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-SemiCircleProgress-root | Root element |
| svg | .mantine-SemiCircleProgress-svg | Root svg element |
| emptySegment | .mantine-SemiCircleProgress-emptySegment | Empty circle segment |
| filledSegment | .mantine-SemiCircleProgress-filledSegment | Filled circle segment |
| label | .mantine-SemiCircleProgress-label | Label element |

**SemiCircleProgress CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --scp-empty-segment-color | Color of the empty segment |
| root | --scp-filled-segment-color | Color of the filled segment |
| root | --scp-thickness | Controls `strokeWidth` of the circle |
| root | --scp-transition-duration | Controls transition duration of the filled segment |

**SemiCircleProgress data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| label | data-position | - | Value of `labelPosition` prop |
| label | data-orientation | - | Value of `orientation` prop |
