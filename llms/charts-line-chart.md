# LineChart
Package: @mantine/charts
Import: import { LineChart } from '@mantine/charts';
Description: Line chart component

## Usage

#### Example: usage

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
      
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Gradient type

Set `type="gradient"` to render a line chart with gradient fill. To customize
gradient colors, use `gradientStops` prop. It accepts an array of objects with
`offset` and `color` properties. `offset` is a number between 0 and 100 that
defines the position of the color in the gradient, `color` is a reference to `theme.colors`
or any valid CSS color.

#### Example: gradient

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      series={[{ name: 'temperature', label: 'Avg. Temperature' }]}
      dataKey="date"
      type="gradient"
      gradientStops={[
        { offset: 0, color: 'red.6' },
        { offset: 20, color: 'orange.6' },
        { offset: 40, color: 'yellow.5' },
        { offset: 70, color: 'lime.5' },
        { offset: 80, color: 'cyan.5' },
        { offset: 100, color: 'blue.5' },
      ]}
      strokeWidth={5}
      curveType="natural"
      yAxisProps={{ domain: [-25, 40] }}
      valueFormatter={(value) => `${value}°C`}
    />
  );
}

// data.ts
export const data = [
  { date: 'Jan', temperature: -25 },
  { date: 'Feb', temperature: -10 },
  { date: 'Mar', temperature: 5 },
  { date: 'Apr', temperature: 15 },
  { date: 'May', temperature: 30 },
  { date: 'Jun', temperature: 15 },
  { date: 'Jul', temperature: 30 },
  { date: 'Aug', temperature: 40 },
  { date: 'Sep', temperature: 15 },
  { date: 'Oct', temperature: 20 },
  { date: 'Nov', temperature: 0 },
  { date: 'Dec', temperature: -10 },
];
```


## Legend

To display chart legend, set `withLegend` prop. When one of the items in the legend
is hovered, the corresponding data series is highlighted in the chart.

#### Example: legend

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Legend position

You can pass props down to recharts [Legend](https://recharts.org/en-US/api/Legend)
component with `legendProps` prop. For example, setting `legendProps={{ verticalAlign: 'bottom', height: 50 }}`
will render the legend at the bottom of the chart and set its height to 50px.

#### Example: legendPosition

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 50 }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Series labels

By default, series `name` is used as a label. To change it, set `label`
property in `series` object:

#### Example: seriesLabels

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      series={[
        { name: 'Apples', label: 'Apples sales', color: 'indigo.6' },
        { name: 'Oranges', label: 'Oranges sales', color: 'blue.6' },
        { name: 'Tomatoes', label: 'Tomatoes sales', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Connect nulls

Use `connectNulls` prop to specify whether to connect a data point across null
points. By default, `connectNulls` is `true`.

#### Example: connectNulls

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', color: 'indigo.6' }]}
      
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 110,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 80,
  },
  {
    date: 'Mar 25',
    Apples: null,
  },
  {
    date: 'Mar 26',
    Apples: null,
  },
  {
    date: 'Mar 27',
    Apples: 40,
  },
  {
    date: 'Mar 28',
    Apples: 120,
  },
  {
    date: 'Mar 29',
    Apples: 80,
  },
];
```


## Points labels

To display labels on data points, set `withPointLabels`:

#### Example: pointLabels

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      withPointLabels
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## X and Y axis props

Use `xAxisProps` and `yAxisProps` to pass props down to recharts [XAxis](https://recharts.org/en-US/api/XAxis)
and [YAxis](https://recharts.org/en-US/api/YAxis) components. For example, these props
can be used to change orientation of axis:

#### Example: axisProps

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Axis labels

Use `xAxisLabel` and `yAxisLabel` props to display axis labels:

#### Example: axisLabels

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## X axis offset

Use `xAxisProps` to set padding between the charts ends and the x-axis:

#### Example: xAxisOffset

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Y axis scale

Use `yAxisProps` to change domain of the Y axis. For example, if you know that
your data will always be in the range of 0 to 100, you can set domain to `[0, 100]`:

#### Example: yScale

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      series={[{ name: 'Apples', color: 'indigo.6' }]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 50,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 40,
  },
  {
    date: 'Mar 25',
    Apples: 30,
  },
  {
    date: 'Mar 26',
    Apples: 0,
  },
  {
    date: 'Mar 27',
    Apples: 20,
  },
  {
    date: 'Mar 28',
    Apples: 20,
  },
  {
    date: 'Mar 29',
    Apples: 10,
  },
];
```


## Right Y axis

To display additional Y axis on the right side of the chart, set `withRightYAxis` prop.
You can pass props down to recharts [YAxis](https://recharts.org/en-US/api/YAxis)
component with `rightYAxisProps` prop and assign a label to the right Y axis with
`rightYAxisLabel` prop. Note that you need to bind data series to the right Y axis
by setting `yAxisId` in the `series` object.

#### Example: rightYAxis

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right' },
      ]}
    />
  );
}

// data.ts
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
```


## Value formatter

To format values in the tooltip and axis ticks, use `valueFormat` prop. It accepts
a function that takes number value as an argument and returns formatted value:

#### Example: valueFormatter

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Set curve type per line

You can set individual curve types for each line in the `series` array. If you
do not set a curve type for a line, the series will fall back to `curveType` prop, or
`monotone` if `curveType` is not set.

#### Example: curveType

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6', curveType: 'linear' },
        { name: 'Oranges', color: 'blue.6', curveType: 'bump' },
        { name: 'Tomatoes', color: 'teal.6', curveType: 'stepAfter' },
      ]}
      
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Line color

You can reference colors from [theme](https://mantine.dev/theming/theme-object) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

#### Example: color

```tsx
// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Change line color depending on color scheme

You can use CSS variables in `color` property. To define a CSS variable that
changes depending on the color scheme, use [light/dark mixins](https://mantine.dev/styles/postcss-preset/#dark-and-light-mixins)
or [light-dark function](https://mantine.dev/styles/postcss-preset/#light-dark-function). Example
of line that is dark orange in light mode and lime in dark mode:

#### Example: colorSchemeColor

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[{ name: 'Apples', color: 'var(--line-color)' }]}
    />
  );
}

// Demo.module.css
.root {
  @mixin light {
    --line-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --line-color: var(--mantine-color-lime-4);
  }
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Stroke dash array

Set `strokeDasharray` prop to control the stroke dash array of the grid and cursor
lines. The value represent the lengths of alternating dashes and gaps. For example,
`strokeDasharray="10 5"` will render a dashed line with 10px dashes and 5px gaps.

#### Example: strokeDasharray

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      strokeDasharray="15 15"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Grid and text colors

Use `--chart-grid-color` and `--chart-text-color` to change colors of
grid lines and text within the chart. With [CSS modules](https://mantine.dev/styles/css-modules/), you can change colors
depending on color scheme:

#### Example: gridColor

```tsx
// Demo.module.css
.root {
  @mixin light {
    --chart-grid-color: alpha(var(--mantine-color-black), 0.15);
    --chart-text-color: var(--mantine-color-gray-7);
  }

  @mixin dark {
    --chart-grid-color: alpha(var(--mantine-color-white), 0.15);
    --chart-text-color: var(--mantine-color-dark-0);
  }
}

// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


If your application has only one color scheme, you can use `gridColor` and `textColor`
props instead of CSS variables:

```tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      gridColor="gray.5"
      textColor="gray.9"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
```

## Tooltip animation

By default, tooltip animation is disabled. To enable it, set `tooltipAnimationDuration`
prop to a number of milliseconds to animate the tooltip position change.

#### Example: tooltipAnimation

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      tooltipAnimationDuration={200}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Units

Set `unit` prop to render a unit label next to the y-axis ticks and tooltip values:

#### Example: unit

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      unit="$"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Custom tooltip

Use `tooltipProps.content` to pass custom tooltip renderer to recharts [Tooltip](https://recharts.org/en-US/api/Tooltip)
component. Note that it is required to filter recharts payload with `getFilteredChartTooltipPayload`
function to remove empty values that are used for styling purposes only.

#### Example: customTooltip

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { data } from './data';

interface ChartTooltipProps {
  label: React.ReactNode;
  payload: Record<string, any>[] | undefined;
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Text fw={500} mb={5}>
        {label}
      </Text>
      {payload.map((item: any) => (
        <Text key={item.name} c={item.color} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      tooltipProps={{
        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
      }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Remove tooltip

To remove tooltip, set `withTooltip={false}`. It also removes the cursor line
and disables interactions with the chart.

#### Example: noTooltip

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withTooltip={false}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Customize dots

Use `dotProps` to pass props down to recharts dot in regular state and `activeDotProps`
to pass props down to recharts dot in active state (when cursor is over the current series).

#### Example: dotProps

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      dotProps={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
      activeDotProps={{ r: 8, strokeWidth: 1, fill: '#fff' }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Stroke width

Use `strokeWidth` prop to control the stroke width of all lines:

#### Example: strokeWidth

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
      
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Sync multiple LineCharts

You can pass props down to recharts [LineChart](https://recharts.org/en-US/api/LineChart)
component with `lineChartProps` prop. For example, setting `lineChartProps={{ syncId: 'any-id' }}`
will sync tooltip of multiple `LineChart` components with the same `syncId` prop.

#### Example: sync

```tsx
// Demo.tsx
import { Text } from '@mantine/core';
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Apples sales:
      </Text>

      <LineChart
        h={180}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'indigo.6' }]}
        lineChartProps={{ syncId: 'groceries' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Tomatoes sales:
      </Text>

      <LineChart
        h={180}
        data={data}
        dataKey="date"
        lineChartProps={{ syncId: 'groceries' }}
        series={[{ name: 'Tomatoes', color: 'teal.6' }]}
      />
    </>
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Vertical orientation

Set `orientation="vertical"` to render a vertical line chart:

#### Example: vertical

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      orientation="vertical"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Dashed line

Set `strokeDasharray` property in `series` to change line style to dashed:

#### Example: lineDasharray

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      dotProps={{ r: 2 }}
      activeDotProps={{ r: 3, strokeWidth: 1 }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6', strokeDasharray: '5 5' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```


## Reference lines

Use `referenceLines` prop to render reference lines. Reference lines are always
rendered behind the chart.

#### Example: referenceLines

```tsx
// Demo.tsx
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      referenceLines={[
        { y: 40, label: 'Average sales', color: 'red.6' },
        { x: 'Mar 25', label: 'Report out' },
      ]}
      series={[{ name: 'Apples', color: 'indigo.6' }]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 50,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 40,
  },
  {
    date: 'Mar 25',
    Apples: 30,
  },
  {
    date: 'Mar 26',
    Apples: 0,
  },
  {
    date: 'Mar 27',
    Apples: 20,
  },
  {
    date: 'Mar 28',
    Apples: 20,
  },
  {
    date: 'Mar 29',
    Apples: 10,
  },
];
```


## Reference area

Use `ReferenceArea` component from recharts to display a reference area:

#### Example: referenceArea

```tsx
// Demo.tsx
import { ReferenceArea } from 'recharts';
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    >
      <ReferenceArea
        x1="Mar 23"
        x2="Mar 25"
        y1={1200}
        y2={3200}
        yAxisId="left"
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-4)"
        stroke="var(--mantine-color-gray-6)"
        strokeWidth={1}
        label={{
          value: 'Weekend sales target',
          position: 'insideTopRight',
          fontSize: 12,
          fill: 'var(--mantine-color-bright)',
        }}
      />
    </LineChart>
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activeDotProps | MantineChartDotProps | - | Props passed down to all active dots. Ignored if <code>withDots={false}</code> is set. |
| children | React.ReactNode | - | Additional components that are rendered inside recharts <code>LineChart</code> component |
| connectNulls | boolean | - | Determines whether points with <code>null</code> values should be connected |
| curveType | LineChartCurveType | - | Type of the curve |
| data | Record<string, any>[] | required | Data used to display chart |
| dataKey | string | required | Key of the <code>data</code> object for x-axis values |
| dotProps | MantineChartDotProps | - | Props passed down to all dots. Ignored if <code>withDots={false}</code> is set. |
| fillOpacity | number | - | Controls fill opacity of all lines |
| gradientStops | LineChartGradientStop[] | - | Data used to generate gradient stops |
| gridAxis | "none" | "x" | "y" | "xy" | - | Specifies which lines should be displayed in the grid, <code>'x'</code> by default |
| gridColor | MantineColor | - | Color of the grid and cursor lines, by default depends on color scheme |
| gridProps | RechartsProps | - | Props passed down to the <code>CartesianGrid</code> component |
| legendProps | RechartsProps | - | Props passed down to the <code>Legend</code> component |
| lineChartProps | Omit<CategoricalChartProps & RefAttributes<{ readonly eventEmitterSymbol: Symbol; clipPathId: string; accessibilityManager: AccessibilityManager; ... 65 more ...; UNSAFE_componentWillUpdate?(nextProps: Readonly<...>, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts <code>LineChart</code> component |
| lineProps | Partial<Omit<Props, "ref">> | ((series: LineChartSeries) => Partial<Omit<Props, "ref">>) | - | Props passed down to recharts <code>Line</code> component |
| orientation | "horizontal" | "vertical" | - | Chart orientation, <code>'horizontal'</code> by default |
| referenceLines | ChartReferenceLineProps[] | - | Reference lines that should be displayed on the chart |
| rightYAxisLabel | string | - | A label to display next to the right y-axis |
| rightYAxisProps | RechartsProps | - | Props passed down to the <code>YAxis</code> recharts component rendered on the right side |
| series | LineChartSeries[] | required | An array of objects with <code>name</code> and <code>color</code> keys. Determines which data should be consumed from the <code>data</code> array. |
| strokeDasharray | string | number | - | Dash array for the grid lines and cursor, <code>'5 5'</code> by default |
| strokeWidth | number | - | Stroke width for the chart lines |
| textColor | MantineColor | - | Color of the text displayed inside the chart, <code>'dimmed'</code> by default |
| tickLine | "none" | "x" | "y" | "xy" | - | Specifies which axis should have tick line, <code>'y'</code> by default |
| tooltipAnimationDuration | number | - | Tooltip position animation duration in ms, <code>0</code> by default |
| tooltipProps | RechartsProps | - | Props passed down to the <code>Tooltip</code> component |
| type | LineChartType | - | Controls styles of the line |
| unit | string | - | Unit displayed next to each tick in y-axis |
| valueFormatter | (value: number) => string | - | A function to format values on Y axis and inside the tooltip |
| withDots | boolean | - | Determines whether dots should be displayed |
| withLegend | boolean | - | Determines whether chart legend should be displayed, <code>false</code> by default |
| withPointLabels | boolean | - | Determines whether each point should have associated label |
| withRightYAxis | boolean | - | Determines whether additional y-axis should be displayed on the right side of the chart, <code>false</code> by default |
| withTooltip | boolean | - | Determines whether chart tooltip should be displayed, <code>true</code> by default |
| withXAxis | boolean | - | Determines whether x-axis should be displayed, <code>true</code> by default |
| withYAxis | boolean | - | Determines whether y-axis should be displayed, <code>true</code> by default |
| xAxisLabel | string | - | A label to display below the x-axis |
| xAxisProps | RechartsProps | - | Props passed down to the <code>XAxis</code> recharts component |
| yAxisLabel | string | - | A label to display next to the y-axis |
| yAxisProps | RechartsProps | - | Props passed down to the <code>YAxis</code> recharts component |


#### Styles API

LineChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**LineChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-LineChart-root | Root element |
| line | .mantine-LineChart-line | Line of the chart |
| axis | .mantine-LineChart-axis | X and Y axis of the chart |
| container | .mantine-LineChart-container | Recharts ResponsiveContainer component |
| grid | .mantine-LineChart-grid | Recharts CartesianGrid component |
| legend | .mantine-LineChart-legend | Legend root element |
| legendItem | .mantine-LineChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-LineChart-legendItemColor | Legend item color |
| legendItemName | .mantine-LineChart-legendItemName | Legend item name |
| tooltip | .mantine-LineChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-LineChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-LineChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-LineChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-LineChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-LineChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-LineChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-LineChart-tooltipLabel | Label of the tooltip |
| referenceLine | .mantine-LineChart-referenceLine | Reference line |
| axisLabel | .mantine-LineChart-axisLabel | X and Y axis labels |

**LineChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-grid-color | Controls color of the grid and cursor lines |
| root | --chart-text-color | Controls color of the axis labels |