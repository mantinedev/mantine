# BulletChart
Package: @mantine/charts
Import: import { BulletChart } from '@mantine/charts';
Description: Compact KPI chart with value, target, and qualitative ranges

## Usage

`BulletChart` is a compact KPI chart that displays an actual value against a target
with qualitative ranges as background bands. The required props are `value` and `ranges`.
Labels are automatically displayed at range boundaries, the target position,
and the bar value.

```tsx
// Demo.tsx
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
    />
  );
}

// data.ts
export const ranges = ${JSON.stringify(ranges, null, 2)};
```


## Data format

`BulletChart` expects `ranges` as an array of objects with `value` and `color` properties.
Ranges are rendered back-to-front (largest first), so smaller ranges overlay larger ones.

```tsx
const ranges = [
  { value: 150000, color: 'red.8', label: 'Poor' },
  { value: 225000, color: 'yellow.8', label: 'Average' },
  { value: 300000, color: 'teal.8', label: 'Good' },
];
```

## Label

Use `label` prop to display a label next to the chart:

```tsx
// Demo.tsx
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      label="Revenue"
      valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
    />
  );
}

// data.ts
export const ranges = ${JSON.stringify(ranges, null, 2)};
```


## Vertical orientation

Set `orientation="vertical"` to render the chart vertically. Note that you need to set
a fixed height on the component when using vertical orientation:

```tsx
// Demo.tsx
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      orientation="vertical"
      valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
      h={250}
    />
  );
}

// data.ts
export const ranges = ${JSON.stringify(ranges, null, 2)};
```


## Bar color

By default, the bar color is white. Use `barColor` prop to customize
the color of the actual value bar. Use `targetColor` to change the target marker color:

```tsx
// Demo.tsx
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      barColor="black"
      targetColor="white"
      valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
    />
  );
}

// data.ts
export const ranges = ${JSON.stringify(ranges, null, 2)};
```


## Chart size

Use `size` prop to control the height of the chart track area.
The `barSize` prop controls the height of the actual value bar independently:

```tsx
// Demo.tsx
import { BulletChart } from '@mantine/charts';
import { Stack } from '@mantine/core';
import { ranges } from './data';

function Demo() {
  return (
    <Stack>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={20}
        label="Small"
        valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={32}
        label="Default"
        valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={48}
        label="Large"
        valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
      />
    </Stack>
  );
}

// data.ts
export const ranges = ${JSON.stringify(ranges, null, 2)};
```


## Value formatter

Use `valueFormatter` prop to format values displayed in labels and tooltips.
Set `withTooltip` to also show a tooltip on hover:

```tsx
// Demo.tsx
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      withTooltip
      valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
    />
  );
}

// data.ts
export const ranges = ${JSON.stringify(ranges, null, 2)};
```


## Without target

The `target` prop is optional. If not provided, the target marker is not rendered:

```tsx
// Demo.tsx
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      ranges={ranges}
      valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
    />
  );
}

// data.ts
export const ranges = ${JSON.stringify(ranges, null, 2)};
```



#### Props

**BulletChart props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| barColor | MantineColor | - | Color of the actual value bar, |
| barSize | string \| number | - | Height of the actual value bar, |
| getTooltipLabel | ((data: { value: number; target?: number; }) => ReactNode) \| undefined | - | Custom tooltip content |
| label | React.ReactNode | - | Label displayed next to the chart |
| orientation | "horizontal" \| "vertical" | - | Orientation, |
| ranges | BulletChartRange[] | required | Qualitative ranges displayed as background bands |
| size | string \| number | - | Height of the chart track area (ranges), |
| target | number | - | Target value, displayed as a marker line |
| targetColor | MantineColor | - | Color of the target marker, |
| targetRatio | number | - | Target marker size relative to chart size, |
| targetSize | string \| number | - | Target marker thickness, |
| value | number | required | Current actual value |
| valueFormatter | (value: number) => string | - | Value formatter for tooltip/display and labels |
| withTooltip | boolean | - | Whether to show tooltip on hover, |


#### Styles API

BulletChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**BulletChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-BulletChart-root | Root element |
| label | .mantine-BulletChart-label | Label element |
| trackWrapper | .mantine-BulletChart-trackWrapper | Wrapper around track and value labels |
| track | .mantine-BulletChart-track | Container for ranges, bar, and target |
| range | .mantine-BulletChart-range | Background range band |
| bar | .mantine-BulletChart-bar | Actual value bar |
| target | .mantine-BulletChart-target | Target marker line |
| rangeLabel | .mantine-BulletChart-rangeLabel | Value label at the end of each range |
| barLabel | .mantine-BulletChart-barLabel | Value label for the actual value bar |
| targetLabel | .mantine-BulletChart-targetLabel | Value label for the target marker |

**BulletChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --bullet-size | Controls height of the chart track area |
| root | --bullet-bar-size | Controls height of the actual value bar |
