# SemiCircleProgress
Package: @mantine/core
Import: import { SemiCircleProgress } from '@mantine/core';
Description: Represent progress with semi circle diagram

## Usage

#### Example: usage

```tsx
import { SemiCircleProgress } from '@mantine/core';


function Demo() {
  return (
    <SemiCircleProgress
      
      label="Label"
    />
  );
}
```


## Change empty segment color

Use `emptySegmentColor` prop to change color of empty segment,
it accepts key of `theme.colors` or any valid CSS color value:

#### Example: emptySegmentColor

```tsx
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
```


## Change label position

By default, the label is displayed at the bottom of the component,
you can change its position to `center` by using `labelPosition` prop:

#### Example: labelPosition

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

#### Example: transitions

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| emptySegmentColor | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color value, by default the value is determined based on the color scheme value |
| fillDirection | "right-to-left" | "left-to-right" | - | Direction from which the circle is filled |
| filledSegmentColor | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color value |
| label | React.ReactNode | - | Label rendered inside the circle |
| labelPosition | "center" | "bottom" | - | Label position relative to the circle center |
| orientation | "up" | "down" | - | Orientation of the circle |
| size | number | - | Diameter of the svg in px |
| thickness | number | - | Circle thickness in px |
| transitionDuration | number | - | Transition duration of filled section styles changes in ms |
| value | number | required | Progress value from <code>0</code> to <code>100</code> |


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
| label | data-position | - | Value of  |