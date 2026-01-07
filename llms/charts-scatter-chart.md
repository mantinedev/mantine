# ScatterChart
Package: @mantine/charts
Import: import { ScatterChart } from '@mantine/charts';
Description: Scatter chart component

## Usage

#### Example: usage

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```


## Multiple series

#### Example: multipleSeries

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
  {
    color: 'red.5',
    name: 'Group 2',
    data: [
      { age: 26, BMI: 21 },
      { age: 31, BMI: 24 },
      { age: 37, BMI: 19 },
      { age: 42, BMI: 27 },
      { age: 29, BMI: 32 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 23 },
      { age: 45, BMI: 30 },
      { age: 27, BMI: 15 },
      { age: 33, BMI: 20 },
      { age: 38, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 30, BMI: 16 },
      { age: 36, BMI: 22 },
      { age: 41, BMI: 28 },
      { age: 46, BMI: 33 },
      { age: 28, BMI: 17 },
      { age: 34, BMI: 22 },
      { age: 39, BMI: 26 },
      { age: 44, BMI: 31 },
      { age: 32, BMI: 18 },
      { age: 38, BMI: 23 },
      { age: 43, BMI: 28 },
      { age: 48, BMI: 35 },
      { age: 25, BMI: 14 },
      { age: 31, BMI: 20 },
      { age: 36, BMI: 25 },
      { age: 41, BMI: 30 },
      { age: 29, BMI: 16 },
    ],
  },
];
```


## Legend

To display chart legend, set `withLegend` prop. When one of the items in the legend
is hovered, the corresponding data series is highlighted in the chart.

#### Example: legend

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      withLegend
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
  {
    color: 'red.5',
    name: 'Group 2',
    data: [
      { age: 26, BMI: 21 },
      { age: 31, BMI: 24 },
      { age: 37, BMI: 19 },
      { age: 42, BMI: 27 },
      { age: 29, BMI: 32 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 23 },
      { age: 45, BMI: 30 },
      { age: 27, BMI: 15 },
      { age: 33, BMI: 20 },
      { age: 38, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 30, BMI: 16 },
      { age: 36, BMI: 22 },
      { age: 41, BMI: 28 },
      { age: 46, BMI: 33 },
      { age: 28, BMI: 17 },
      { age: 34, BMI: 22 },
      { age: 39, BMI: 26 },
      { age: 44, BMI: 31 },
      { age: 32, BMI: 18 },
      { age: 38, BMI: 23 },
      { age: 43, BMI: 28 },
      { age: 48, BMI: 35 },
      { age: 25, BMI: 14 },
      { age: 31, BMI: 20 },
      { age: 36, BMI: 25 },
      { age: 41, BMI: 30 },
      { age: 29, BMI: 16 },
    ],
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
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 20 }}
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
  {
    color: 'red.5',
    name: 'Group 2',
    data: [
      { age: 26, BMI: 21 },
      { age: 31, BMI: 24 },
      { age: 37, BMI: 19 },
      { age: 42, BMI: 27 },
      { age: 29, BMI: 32 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 23 },
      { age: 45, BMI: 30 },
      { age: 27, BMI: 15 },
      { age: 33, BMI: 20 },
      { age: 38, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 30, BMI: 16 },
      { age: 36, BMI: 22 },
      { age: 41, BMI: 28 },
      { age: 46, BMI: 33 },
      { age: 28, BMI: 17 },
      { age: 34, BMI: 22 },
      { age: 39, BMI: 26 },
      { age: 44, BMI: 31 },
      { age: 32, BMI: 18 },
      { age: 38, BMI: 23 },
      { age: 43, BMI: 28 },
      { age: 48, BMI: 35 },
      { age: 25, BMI: 14 },
      { age: 31, BMI: 20 },
      { age: 36, BMI: 25 },
      { age: 41, BMI: 30 },
      { age: 29, BMI: 16 },
    ],
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
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      dataKey={{ x: 'age', y: 'BMI' }}
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```


## Value formatter

To format values in the tooltip and axis ticks, use `valueFormat` prop. It accepts
a function that takes number value as an argument and returns formatted value or an
object with `x` and `y` keys to format x and y values separately:

#### Example: valueFormatter

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'average_monthly_spending' }}
      yAxisProps={{ domain: [800, 3400] }}
      valueFormatter={{
        x: (value) => `${value} years`,
        y: (value) => `${new Intl.NumberFormat('en-US').format(value)}`,
      }}
    />
  );
}

// data.ts
export const spendingsData = [
  {
    color: 'cyan',
    name: 'Average monthly spending',
    data: [
      { age: 25, average_monthly_spending: 1400 },
      { age: 30, average_monthly_spending: 2100 },
      { age: 35, average_monthly_spending: 1800 },
      { age: 40, average_monthly_spending: 2400 },
      { age: 45, average_monthly_spending: 2300 },
      { age: 28, average_monthly_spending: 1600 },
      { age: 22, average_monthly_spending: 1200 },
      { age: 50, average_monthly_spending: 3200 },
      { age: 32, average_monthly_spending: 1900 },
      { age: 48, average_monthly_spending: 2700 },
      { age: 26, average_monthly_spending: 1700 },
      { age: 38, average_monthly_spending: 2200 },
      { age: 42, average_monthly_spending: 2600 },
      { age: 29, average_monthly_spending: 1500 },
      { age: 34, average_monthly_spending: 2000 },
      { age: 44, average_monthly_spending: 2500 },
      { age: 23, average_monthly_spending: 1300 },
      { age: 37, average_monthly_spending: 2100 },
      { age: 49, average_monthly_spending: 2900 },
      { age: 27, average_monthly_spending: 1600 },
      { age: 41, average_monthly_spending: 2500 },
      { age: 31, average_monthly_spending: 1800 },
      { age: 46, average_monthly_spending: 2700 },
      { age: 24, average_monthly_spending: 1400 },
      { age: 33, average_monthly_spending: 2100 },
      { age: 39, average_monthly_spending: 2400 },
      { age: 47, average_monthly_spending: 2800 },
      { age: 36, average_monthly_spending: 2200 },
      { age: 43, average_monthly_spending: 2600 },
      { age: 21, average_monthly_spending: 1100 },
    ],
  },
];
```


## Point labels

Set `pointLabels` prop to `x` or `y` to display labels on data points for the
corresponding axis:

#### Example: pointLabels

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      pointLabels="x"
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
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
import { ScatterChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      className={classes.root}
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```


If your application has only one color scheme, you can use `gridColor` and `textColor`
props instead of CSS variables:

```tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      gridColor="gray.5"
      textColor="gray.9"
    />
  );
}
```

## Stroke dash array

Set `strokeDasharray` prop to control the stroke dash array of the grid and cursor
lines. The value represent the lengths of alternating dashes and gaps. For example,
`strokeDasharray="10 5"` will render a dashed line with 10px dashes and 5px gaps.

#### Example: strokeDasharray

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      strokeDasharray="15 15"
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```


## Units

Set `unit` prop to render a unit label next to the axis ticks and tooltip values:

#### Example: units

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'average_monthly_spending' }}
      yAxisProps={{ domain: [800, 3500] }}
      unit={{ y: '

## Tooltip labels

To customize labels displayed in the tooltip, use `labels` prop:

#### Example: labels

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      labels={{ x: 'Age', y: 'Body mass index' }}
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```


## Custom tooltip

Use `tooltipProps.content` to pass custom tooltip renderer to recharts [Tooltip](https://recharts.org/en-US/api/Tooltip)
component:

#### Example: customTooltip

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { data } from './data';

interface ChartTooltipProps {
  payload: Record<string, any>[] | undefined;
}

function ChartTooltip({ payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      {payload.map((item: any) => (
        <Text key={item.name} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      tooltipProps={{
        content: ({ payload }) => <ChartTooltip payload={payload} />,
      }}
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```


## Remove tooltip

To remove tooltip, set `withTooltip={false}`. It also removes the cursor line
and disables interactions with the chart.

#### Example: noTooltip

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      withTooltip={false}
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```


## Tooltip animation

By default, tooltip animation is disabled. To enable it, set `tooltipAnimationDuration`
prop to a number of milliseconds to animate the tooltip position change.

#### Example: tooltipAnimation

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      tooltipAnimationDuration={200}
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```


## Customize dots

You can use any shape as a dot by passing props to recharts [Scatter](https://recharts.org/en-US/api/Scatter)
component:

#### Example: dotSize

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      scatterProps={{ shape: <circle r={3} /> }}
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```


## Reference lines

Use `referenceLines` prop to render reference lines. Reference lines are always
rendered behind the chart.

#### Example: referenceLines

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      referenceLines={[
        { y: 14, label: 'Underweight ↓', color: 'red.7' },
        { y: 19, label: 'Normal weight', color: 'teal.7' },
        { y: 30, label: 'Overweight ↑', color: 'red.7' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```

 }}
      labels={{ x: 'Age', y: 'Spending' }}
    />
  );
}

// data.ts
export const spendingsData = [
  {
    color: 'cyan',
    name: 'Average monthly spending',
    data: [
      { age: 25, average_monthly_spending: 1400 },
      { age: 30, average_monthly_spending: 2100 },
      { age: 35, average_monthly_spending: 1800 },
      { age: 40, average_monthly_spending: 2400 },
      { age: 45, average_monthly_spending: 2300 },
      { age: 28, average_monthly_spending: 1600 },
      { age: 22, average_monthly_spending: 1200 },
      { age: 50, average_monthly_spending: 3200 },
      { age: 32, average_monthly_spending: 1900 },
      { age: 48, average_monthly_spending: 2700 },
      { age: 26, average_monthly_spending: 1700 },
      { age: 38, average_monthly_spending: 2200 },
      { age: 42, average_monthly_spending: 2600 },
      { age: 29, average_monthly_spending: 1500 },
      { age: 34, average_monthly_spending: 2000 },
      { age: 44, average_monthly_spending: 2500 },
      { age: 23, average_monthly_spending: 1300 },
      { age: 37, average_monthly_spending: 2100 },
      { age: 49, average_monthly_spending: 2900 },
      { age: 27, average_monthly_spending: 1600 },
      { age: 41, average_monthly_spending: 2500 },
      { age: 31, average_monthly_spending: 1800 },
      { age: 46, average_monthly_spending: 2700 },
      { age: 24, average_monthly_spending: 1400 },
      { age: 33, average_monthly_spending: 2100 },
      { age: 39, average_monthly_spending: 2400 },
      { age: 47, average_monthly_spending: 2800 },
      { age: 36, average_monthly_spending: 2200 },
      { age: 43, average_monthly_spending: 2600 },
      { age: 21, average_monthly_spending: 1100 },
    ],
  },
];
```


## Tooltip labels

To customize labels displayed in the tooltip, use `labels` prop:

DEMOPLACEHOLDER::ScatterChartDemos.labels::END

## Custom tooltip

Use `tooltipProps.content` to pass custom tooltip renderer to recharts [Tooltip](https://recharts.org/en-US/api/Tooltip)
component:

DEMOPLACEHOLDER::ScatterChartDemos.customTooltip::END

## Remove tooltip

To remove tooltip, set `withTooltip={false}`. It also removes the cursor line
and disables interactions with the chart.

DEMOPLACEHOLDER::ScatterChartDemos.noTooltip::END

## Tooltip animation

By default, tooltip animation is disabled. To enable it, set `tooltipAnimationDuration`
prop to a number of milliseconds to animate the tooltip position change.

DEMOPLACEHOLDER::ScatterChartDemos.tooltipAnimation::END

## Customize dots

You can use any shape as a dot by passing props to recharts [Scatter](https://recharts.org/en-US/api/Scatter)
component:

DEMOPLACEHOLDER::ScatterChartDemos.dotSize::END

## Reference lines

Use `referenceLines` prop to render reference lines. Reference lines are always
rendered behind the chart.

DEMOPLACEHOLDER::ScatterChartDemos.referenceLines::END


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | ScatterChartSeries[] | required | Data that is used to build the chart |
| dataKey | { x: string; y: string; } | required | Keys that should be used to retrieve data from the data array on x and y axis |
| gridAxis | "none" | "x" | "y" | "xy" | - | Specifies which lines should be displayed in the grid, <code>'x'</code> by default |
| gridColor | MantineColor | - | Color of the grid and cursor lines, by default depends on color scheme |
| gridProps | RechartsProps | - | Props passed down to the <code>CartesianGrid</code> component |
| labels | { x?: string; y?: string | undefined; } | undefined | - | Labels that should be used instead of keys names in the tooltip |
| legendProps | RechartsProps | - | Props passed down to the <code>Legend</code> component |
| orientation | "horizontal" | "vertical" | - | Chart orientation, <code>'horizontal'</code> by default |
| pointLabels | "x" | "y" | - | If set, displays labels next to points for the given axis |
| referenceLines | ChartReferenceLineProps[] | - | Reference lines that should be displayed on the chart |
| rightYAxisLabel | string | - | A label to display next to the right y-axis |
| rightYAxisProps | RechartsProps | - | Props passed down to the <code>YAxis</code> recharts component rendered on the right side |
| scatterChartProps | Omit<CategoricalChartProps & RefAttributes<{ readonly eventEmitterSymbol: Symbol; clipPathId: string; accessibilityManager: AccessibilityManager; ... 65 more ...; UNSAFE_componentWillUpdate?(nextProps: Readonly<...>, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts <code>ScatterChart</code> component |
| scatterProps | Partial<Omit<Props, "ref">> | - | Props passed down to recharts <code>Scatter</code> component |
| strokeDasharray | string | number | - | Dash array for the grid lines and cursor, <code>'5 5'</code> by default |
| textColor | MantineColor | - | Color of the text displayed inside the chart, <code>'dimmed'</code> by default |
| tickLine | "none" | "x" | "y" | "xy" | - | Specifies which axis should have tick line, <code>'y'</code> by default |
| tooltipAnimationDuration | number | - | Tooltip position animation duration in ms, <code>0</code> by default |
| tooltipProps | RechartsProps | - | Props passed down to the <code>Tooltip</code> component |
| unit | { x?: string; y?: string | undefined; } | undefined | - | Units displayed after value on axis and inside the tooltip |
| valueFormatter | ((value: number) => string) | { x?: ((value: number) => string); y?: ((value: number) => string) | undefined; } | undefined | - | A function to format values on x/y axis and in the tooltip |
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

ScatterChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ScatterChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-ScatterChart-root | Root element |
| scatter | .mantine-ScatterChart-scatter | recharts Scatter component |
| axis | .mantine-ScatterChart-axis | X and Y axis of the chart |
| container | .mantine-ScatterChart-container | Recharts ResponsiveContainer component |
| grid | .mantine-ScatterChart-grid | Recharts CartesianGrid component |
| legend | .mantine-ScatterChart-legend | Legend root element |
| legendItem | .mantine-ScatterChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-ScatterChart-legendItemColor | Legend item color |
| legendItemName | .mantine-ScatterChart-legendItemName | Legend item name |
| tooltip | .mantine-ScatterChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-ScatterChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-ScatterChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-ScatterChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-ScatterChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-ScatterChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-ScatterChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-ScatterChart-tooltipLabel | Label of the tooltip |
| referenceLine | .mantine-ScatterChart-referenceLine | Reference line |
| axisLabel | .mantine-ScatterChart-axisLabel | X and Y axis labels |

**ScatterChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-grid-color | Controls color of the grid and cursor lines |
| root | --chart-text-color | Controls color of the axis labels |