# BubbleChart
Package: @mantine/charts
Import: import { BubbleChart } from '@mantine/charts';
Description: Bubble chart component

## Usage

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```


## Change color

You can reference colors from [theme](https://mantine.dev/llms/theming-theme-object.md) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
       color="blue"
    />
  );
}

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```


## Change area color depending on color scheme

You can use CSS variables in the `color` property. To define a CSS variable that
changes depending on the color scheme, use [light/dark mixins](https://mantine.dev/llms/styles-postcss-preset.md#dark-and-light-mixins)
or the [light-dark function](https://mantine.dev/llms/styles-postcss-preset.md#light-dark-function). Example
of an area that is dark orange in light mode and lime in dark mode:

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="var(--scatter-color)"
      className={classes.root}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}

// Demo.module.css
.root {
  @mixin light {
    --scatter-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --scatter-color: var(--mantine-color-lime-4);
  }
}

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```


## Remove tooltip

To remove the tooltip, set `withTooltip={false}`. This also removes the cursor line
and disables interactions with the chart.

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      withTooltip={false}
    />
  );
}

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```


## Value formatter

To format values in the tooltip, use the `valueFormat` prop. It accepts
a function that takes a number value as an argument and returns a formatted value:

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      valueFormatter={(value) => `${value.toFixed(2)} USD`}
    />
  );
}

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```


## Grid and text colors

Use `--chart-grid-color` and `--chart-text-color` to change colors of
grid lines and text within the chart. With [CSS modules](https://mantine.dev/llms/styles-css-modules.md), you can change colors
depending on color scheme:

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      className={classes.root}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}

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

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```


If your application has only one color scheme, you can use the `gridColor` and `textColor`
props instead of CSS variables:

```tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      gridColor="gray.5"
      textColor="gray.9"
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}
```


#### Props

**BubbleChart props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Color of the chart items. Key of `theme.colors` or any valid CSS color. |
| data | Record<string, any>[] | required | Chart data |
| dataKey | BubbleChartDataKey | required | Data keys for x, y and z axis |
| gridColor | MantineColor | - | Color of the grid and cursor lines, by default depends on color scheme |
| label | string | - | Chart label displayed next to the x axis |
| range | [number, number] | required | Z axis range |
| scatterProps | Partial<Omit<Props, "ref">> | - | Props passed down to the `Scatter` component |
| textColor | MantineColor | - | Color of the text displayed inside the chart |
| tooltipProps | RechartsProps | - | Props passed down to the `Tooltip` component |
| valueFormatter | (value: number) => string | - | Function to format z axis values |
| withTooltip | boolean | - | Determines whether the tooltip should be displayed |
| xAxisProps | RechartsProps | - | Props passed down to the `XAxis` recharts component |
| yAxisProps | RechartsProps | - | Props passed down to the `YAxis` recharts component |
| zAxisProps | Omit<Props<any, any>, "ref"> | - | Props passed down to the `ZAxis` recharts component |


#### Styles API

BubbleChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**BubbleChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-BubbleChart-root | Root element |
| axis | .mantine-BubbleChart-axis | X and Y axis of the chart |
| tooltip | .mantine-BubbleChart-tooltip | Tooltip root element |

**BubbleChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-grid-color | Controls color of the grid and cursor lines |
| root | --chart-text-color | Controls color of the axis labels |
