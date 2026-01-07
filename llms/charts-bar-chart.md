# BarChart
Package: @mantine/charts
Import: import { BarChart } from '@mantine/charts';
Description: Bar chart component with stacked and percent variants

## Usage

Use `BarChart` component without `type` prop to render a regular bar chart.
In a regular bar chart, each data series is plotted on its own and does
not interact with other series.

#### Example: usage

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
      
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Stacked bar chart

Set `type="stacked"` to render a stacked bar chart. In this type of bar chart
stacking is applied along the vertical axis, allowing you to see the overall trend
as well as the contribution of each individual series to the total.

#### Example: stacked

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Mixed stacked bar chart

You can control how series are stacked by setting `stackId` property in series object:

#### Example: mixedStack

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6', stackId: 'a' },
        { name: 'Laptops', color: 'blue.6', stackId: 'b' },
        { name: 'Tablets', color: 'teal.6', stackId: 'b' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 500, Tablets: 800 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 1800, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 200, Tablets: 700 },
  { month: 'June', Smartphones: 800, Laptops: 500, Tablets: 200 },
];
```


## Percent bar chart

Set `type="percent"` to render a percent bar chart. In this type of bar chart
the y-axis scale is always normalized to 100%, making it easier to compare the
contribution of each series in terms of percentages.

#### Example: percent

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="percent"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Waterfall bar chart

Set `type="waterfall"` to render a waterfall bar chart. This chart type illustrates how an
initial value is influenced by subsequent positive or negative values,
with each bar starting where the previous one ended.
Use the `color` prop inside data to color each bar individually. Note that the series color gets overwritten for this specific bar.
Use the `standalone` prop inside data to decouple the bar from the flow.

#### Example: waterfall

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="item"
      type="waterfall"
      series={[{ name: 'Effective tax rate in %', color: 'blue' }]}
      withLegend
    />
  );
}

// data.ts
export const data =
[
  { item: 'TaxRate', 'Effective tax rate in %': 21, color: 'blue' },
  { item: 'Foreign inc.', 'Effective tax rate in %': -15.5, color: 'teal' },
  { item: 'Perm. diff.', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Credits', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Loss carryf. ', 'Effective tax rate in %': -2, color: 'teal' },
  { item: 'Law changes', 'Effective tax rate in %': 2, color: 'red' },
  { item: 'Reven. adj.', 'Effective tax rate in %': 4, color: 'red' },
  { item: 'ETR', 'Effective tax rate in %': 3.5, color: 'blue', standalone: true },
];
```


## SVG pattern as bar fill

You can use SVG patterns as bar fill. To do so, set `fill` property in series object to
a url of the SVG pattern that is defined in the `defs` section of the chart `children`.

Example of using diagonal stripes and crosshatch patterns as bar fill:

#### Example: stripes

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={mixedStackData}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'url(#crosshatch)', stackId: 'a' },
        { name: 'Laptops', color: 'blue.6', stackId: 'b' },
        { name: 'Tablets', color: 'url(#diagonalStripes)', stackId: 'b' },
      ]}
    >
      <defs>
        <pattern
          id="diagonalStripes"
          patternUnits="userSpaceOnUse"
          width={6}
          height={8}
          patternTransform="rotate(45)"
        >
          <rect
            width="2"
            height="8"
            transform="translate(0,0)"
            fill="color-mix(in lch, var(--mantine-color-teal-6) 70%, rgba(0,0,0,0))"
          />
        </pattern>

        <pattern id="crosshatch" patternUnits="userSpaceOnUse" width={8} height={8}>
          <path
            d="M 0 0 L 8 0 L 8 8 L 0 8 Z"
            fill="none"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
          <path
            d="M 0 0 L 8 8"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
          <path
            d="M 8 0 L 0 8"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
        </pattern>
      </defs>
    </BarChart>
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 500, Tablets: 800 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 1800, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 200, Tablets: 700 },
  { month: 'June', Smartphones: 800, Laptops: 500, Tablets: 200 },
];
```


## Bar color based on value

Use `getBarColor` prop to assign color based on value. `getBarColor` function is
called with two arguments: value and series object. It should return a color
string (theme color reference or any valid CSS color value).

Note that color returned by `getBarColor` does not impact colors of the legend
and tooltip.

#### Example: getBarColor

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      getBarColor={(value) => (value > 700 ? 'teal.8' : 'red.8')}
      series={[{ name: 'Laptops', color: 'gray.6' }]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Legend

To display chart legend, set `withLegend` prop. When one of the items in the legend
is hovered, the corresponding data series is highlighted in the chart.

#### Example: legend

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withLegend
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Legend position

You can pass props down to recharts [Legend](https://recharts.org/en-US/api/Legend)
component with `legendProps` prop. For example, setting `legendProps={{ verticalAlign: 'bottom', height: 50 }}`
will render the legend at the bottom of the chart and set its height to 50px.

#### Example: legendPosition

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 50 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Series labels

By default, series `name` is used as a label. To change it, set `label`
property in `series` object:

#### Example: seriesLabels

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      series={[
        { name: 'Smartphones', label: 'Smartphones sales', color: 'violet.6' },
        { name: 'Laptops', label: 'Laptops sales', color: 'blue.6' },
        { name: 'Tablets', label: 'Tablets sales', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## X and Y axis props

Use `xAxisProps` and `yAxisProps` to pass props down to recharts [XAxis](https://recharts.org/en-US/api/XAxis)
and [YAxis](https://recharts.org/en-US/api/YAxis) components. For example, these props
can be used to change orientation of axis:

#### Example: axisProps

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Axis labels

Use `xAxisLabel` and `yAxisLabel` props to display axis labels:

#### Example: axisLabels

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## X axis offset

Use `xAxisProps` to set padding between the charts ends and the x-axis:

#### Example: xAxisOffset

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Y axis scale

Use `yAxisProps` to change domain of the Y axis. For example, if you know that
your data will always be in the range of 0 to 150, you can set domain to `[0, 150]`:

#### Example: yScale

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      yAxisProps={{ domain: [0, 250] }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Value formatter

To format values in the tooltip and axis ticks, use `valueFormat` prop. It accepts
a function that takes number value as an argument and returns formatted value:

#### Example: valueFormatter

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Area color

You can reference colors from [theme](https://mantine.dev/theming/theme-object) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

#### Example: color

```tsx
// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Bar props

You can pass props down to recharts [Bar](https://recharts.org/en-US/api/Bar)
component with `barProps` prop. `barProps` accepts either an object with props
or a function that receives series data as an argument and returns an object with
props.

#### Example: barProps

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={200}
      data={data}
      dataKey="month"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      barProps={{ radius: 10 }}
      series={[{ name: 'Smartphones', color: 'blue.6' }]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Minimum bar size

Use `minBarSize` prop to set the minimum size of the bar in px:

#### Example: minBarSize

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      minBarSize={10}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 0 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 0, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 0, Tablets: 1200 },
  { month: 'June', Smartphones: 0, Laptops: 600, Tablets: 1000 },
];
```


## Change bar color depending on color scheme

You can use CSS variables in `color` property. To define a CSS variable that
changes depending on the color scheme, use [light/dark mixins](https://mantine.dev/styles/postcss-preset/#dark-and-light-mixins)
or [light-dark function](https://mantine.dev/styles/postcss-preset/#light-dark-function). Example
of bar that is dark orange in light mode and lime in dark mode:

#### Example: colorSchemeColor

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      className={classes.root}
      series={[{ name: 'Smartphones', color: 'var(--bar-color)' }]}
    />
  );
}

// Demo.module.css
.root {
  @mixin light {
    --bar-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --bar-color: var(--mantine-color-lime-4);
  }
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Stroke dash array

Set `strokeDasharray` prop to control the stroke dash array of the grid and cursor
lines. The value represent the lengths of alternating dashes and gaps. For example,
`strokeDasharray="10 5"` will render a dashed line with 10px dashes and 5px gaps.

#### Example: strokeDasharray

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      strokeDasharray="15 15"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
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
import { BarChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      className={classes.root}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


If your application has only one color scheme, you can use `gridColor` and `textColor`
props instead of CSS variables:

```tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      gridColor="gray.5"
      textColor="gray.9"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
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
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      tooltipAnimationDuration={200}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Units

Set `unit` prop to render a unit label next to the y-axis ticks and tooltip values:

#### Example: unit

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      unit="$"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Custom tooltip

Use `tooltipProps.content` to pass custom tooltip renderer to recharts [Tooltip](https://recharts.org/en-US/api/Tooltip)
component. Note that it is required to filter recharts payload with `getFilteredChartTooltipPayload`
function to remove empty values that are used for styling purposes only.

#### Example: customTooltip

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
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
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      tooltipProps={{
        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
      }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Remove tooltip

To remove tooltip, set `withTooltip={false}`. It also removes the cursor line
and disables interactions with the chart.

#### Example: noTooltip

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withTooltip={false}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Sync multiple BarCharts

You can pass props down to recharts [BarChart](https://recharts.org/en-US/api/BarChart)
component with `barChartProps` prop. For example, setting `barChartProps={{ syncId: 'any-id' }}`
will sync tooltip of multiple `BarChart` components with the same `syncId` prop.

#### Example: sync

```tsx
// Demo.tsx
import { Text } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Smartphones sales:
      </Text>

      <BarChart
        h={180}
        data={data}
        dataKey="month"
        series={[{ name: 'Smartphones', color: 'violet.6' }]}
        barChartProps={{ syncId: 'tech' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Laptops sales:
      </Text>

      <BarChart
        h={180}
        data={data}
        dataKey="month"
        barChartProps={{ syncId: 'tech' }}
        series={[{ name: 'Laptops', color: 'teal.6' }]}
      />
    </>
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Vertical orientation

Set `orientation="vertical"` to render a vertical bar chart:

#### Example: vertical

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Reference lines

Use `referenceLines` prop to render reference lines. Reference lines are always
rendered behind the chart.

#### Example: referenceLines

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      referenceLines={[
        {
          y: 1130,
          color: 'red.5',
          label: 'Profit reached',
          labelPosition: 'insideTopRight',
        },
      ]}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Reference area

Use `ReferenceArea` component from recharts to display a reference area:

#### Example: referenceArea

```tsx
// Demo.tsx
import { ReferenceArea } from 'recharts';
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    >
      <ReferenceArea
        x1="January"
        x2="March"
        y1={0}
        y2={1250}
        yAxisId="left"
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-4)"
        stroke="var(--mantine-color-gray-6)"
        strokeWidth={1}
        label={{
          value: 'Q1 sales threshold',
          position: 'insideTopRight',
          fontSize: 12,
          fill: 'var(--mantine-color-bright)',
        }}
      />
    </BarChart>
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Bar value label

To display value above each bar, set `withBarValueLabel`:

#### Example: barValueLabel

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      withBarValueLabel
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Bar value label props

You can pass props down to recharts [LabelList](https://recharts.org/en-US/api/LabelList)
component with `valueLabelProps` prop. `valueLabelProps` accepts either an object with props
or a function that receives series data as an argument and returns an object with
props.

#### Example: valueLabelProps

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      withBarValueLabel
      valueLabelProps={{ position: 'inside', fill: 'white' }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Bar overlays

#### Example: overlay

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import classes from './Demo.module.css';
import { data } from './data';

function Demo() {
  const bigBarWidth = useMediaQuery('(min-width: 48em)') ? 42 : 26;
  const ratio = 0.5;
  const smallBarWidth = bigBarWidth * ratio;
  const barGap = (bigBarWidth + smallBarWidth) / -2;

  return (
    <BarChart
      h={300}
      data={overlayData}
      dataKey="index"
      barChartProps={{ barGap }}
      barProps={(data) => ({ barSize: data.name === 'you' ? bigBarWidth : smallBarWidth })}
      classNames={classes}
      series={[
        { name: 'you', color: 'var(--you-bar-color)' },
        { name: 'average', color: 'var(--average-bar-color)' },
      ]}
    />
  );
}

// Demo.module.css
.root {
  @mixin light {
    --average-bar-color: var(--mantine-color-dark-8);
    --you-bar-color: var(--mantine-color-blue-3);
  }

  @mixin dark {
    --you-bar-color: var(--mantine-color-blue-8);
    --average-bar-color: var(--mantine-color-gray-4);
  }
}

.bar {
  transform: translateX(-1.5px);
}

// data.ts
export const data = [
  { you: 5, average: 3, index: '1' },
  { you: 7, average: 9, index: '2' },
  { you: 8, average: 5, index: '3' },
  { you: 3, average: 6, index: '4' },
  { you: 2, average: 4, index: '5' },
  { you: 6, average: 8, index: '6' },
  { you: 4, average: 7, index: '7' },
  { you: 9, average: 2, index: '8' },
];
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| barChartProps | Omit<CategoricalChartProps & RefAttributes<{ readonly eventEmitterSymbol: Symbol; clipPathId: string; accessibilityManager: AccessibilityManager; ... 65 more ...; UNSAFE_componentWillUpdate?(nextProps: Readonly<...>, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts <code>BarChart</code> component |
| barLabelColor | MantineColor | - | Controls color of the bar label, by default the value is determined by the chart orientation |
| barProps | ((series: BarChartSeries) => Partial<Omit<Props, "ref">>) | Partial<Omit<Props, "ref">> | - | Props passed down to recharts <code>Bar</code> component |
| children | React.ReactNode | - | Additional components that are rendered inside recharts <code>BarChart</code> component |
| cursorFill | MantineColor | - | Fill of hovered bar section, by default value is based on color scheme |
| data | Record<string, any>[] | required | Data used to display chart. |
| dataKey | string | required | Key of the <code>data</code> object for x-axis values |
| fillOpacity | number | - | Controls fill opacity of all bars |
| getBarColor | (value: number, series: BarChartSeries) => DefaultMantineColor | - | A function to assign dynamic bar color based on its value |
| gridAxis | "none" | "x" | "y" | "xy" | - | Specifies which lines should be displayed in the grid, <code>'x'</code> by default |
| gridColor | MantineColor | - | Color of the grid and cursor lines, by default depends on color scheme |
| gridProps | RechartsProps | - | Props passed down to the <code>CartesianGrid</code> component |
| legendProps | RechartsProps | - | Props passed down to the <code>Legend</code> component |
| maxBarWidth | number | - | Maximum bar width in px |
| minBarSize | number | - | Sets minimum height of the bar in px |
| orientation | "horizontal" | "vertical" | - | Chart orientation, <code>'horizontal'</code> by default |
| referenceLines | ChartReferenceLineProps[] | - | Reference lines that should be displayed on the chart |
| rightYAxisLabel | string | - | A label to display next to the right y-axis |
| rightYAxisProps | RechartsProps | - | Props passed down to the <code>YAxis</code> recharts component rendered on the right side |
| series | BarChartSeries[] | required | An array of objects with <code>name</code> and <code>color</code> keys. Determines which data should be consumed from the <code>data</code> array. |
| strokeDasharray | string | number | - | Dash array for the grid lines and cursor, <code>'5 5'</code> by default |
| textColor | MantineColor | - | Color of the text displayed inside the chart, <code>'dimmed'</code> by default |
| tickLine | "none" | "x" | "y" | "xy" | - | Specifies which axis should have tick line, <code>'y'</code> by default |
| tooltipAnimationDuration | number | - | Tooltip position animation duration in ms, <code>0</code> by default |
| tooltipProps | RechartsProps | - | Props passed down to the <code>Tooltip</code> component |
| type | BarChartType | - | Controls how bars are positioned relative to each other |
| unit | string | - | Unit displayed next to each tick in y-axis |
| valueFormatter | (value: number) => string | - | A function to format values on Y axis and inside the tooltip |
| valueLabelProps | ((series: BarChartSeries) => Partial<Omit<Props<Record<string, any>>, "ref">>) | Partial<Props<Record<string, any>>> | - | Props passed down to recharts <code>LabelList</code> component |
| withBarValueLabel | boolean | - | Determines whether a label with bar value should be displayed on top of each bar, incompatible with <code>type="stacked"</code> and <code>type="percent"</code> |
| withLegend | boolean | - | Determines whether chart legend should be displayed, <code>false</code> by default |
| withRightYAxis | boolean | - | Determines whether additional y-axis should be displayed on the right side of the chart, <code>false</code> by default |
| withTooltip | boolean | - | Determines whether chart tooltip should be displayed, <code>true</code> by default |
| withXAxis | boolean | - | Determines whether x-axis should be displayed, <code>true</code> by default |
| withYAxis | boolean | - | Determines whether y-axis should be displayed, <code>true</code> by default |
| xAxisLabel | string | - | A label to display below the x-axis |
| xAxisProps | RechartsProps | - | Props passed down to the <code>XAxis</code> recharts component |
| yAxisLabel | string | - | A label to display next to the y-axis |
| yAxisProps | RechartsProps | - | Props passed down to the <code>YAxis</code> recharts component |


#### Styles API

BarChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**BarChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-BarChart-root | Root element |
| bar | .mantine-BarChart-bar | Bar of the chart |
| axis | .mantine-BarChart-axis | X and Y axis of the chart |
| container | .mantine-BarChart-container | Recharts ResponsiveContainer component |
| grid | .mantine-BarChart-grid | Recharts CartesianGrid component |
| legend | .mantine-BarChart-legend | Legend root element |
| legendItem | .mantine-BarChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-BarChart-legendItemColor | Legend item color |
| legendItemName | .mantine-BarChart-legendItemName | Legend item name |
| tooltip | .mantine-BarChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-BarChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-BarChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-BarChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-BarChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-BarChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-BarChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-BarChart-tooltipLabel | Label of the tooltip |
| referenceLine | .mantine-BarChart-referenceLine | Reference line |
| axisLabel | .mantine-BarChart-axisLabel | X and Y axis labels |

**BarChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-grid-color | Controls color of the grid and cursor lines |
| root | --chart-text-color | Controls color of the axis labels |
| root | --chart-cursor-fill | Controls fill color of the cursor line |
| root | --chart-bar-label-color | Controls color of the bar labels |