# RadialBarChart
Package: @mantine/charts
Import: import { RadialBarChart } from '@mantine/charts';
Description: Radial bar chart component

## Usage

`RadialBarChart` is based on [RadialBarChart recharts component](https://recharts.org/en-US/api/RadialBarChart):

#### Example: usage

```tsx
// Demo.tsx
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} />;
}

// data.ts
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
```


## Change color

You can reference theme colors or use any valid CSS color in `color` property of `data`:

#### Example: color

```tsx
import { RadialBarChart } from '@mantine/charts';

const data = [
    { name: '18-24', value: 31.47, color: '' },
    { name: '25-29', value: 26.69, color: '' },
    { name: '30-34', value: 15.69, color: '' },
    { name: '35-39', value: 8.22, color: '' },
    { name: '40-49', value: 8.63, color: '' },
    { name: '50+', value: 2.63, color: '' },
    { name: 'unknown', value: 6.67, color: '' },
  ];

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} w={220} />;
}
```


## Legend

To show legend, set `withLegend` prop:

#### Example: legend

```tsx
// Demo.tsx
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withLegend />;
}

// data.ts
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
```


## Labels

To show labels, set `withLabels` prop:

#### Example: labels

```tsx
// Demo.tsx
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={280} withLabels />;
}

// data.ts
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
```


## Hide tooltip

To hide tooltip, set `withTooltip={false}` prop:

#### Example: noTooltip

```tsx
// Demo.tsx
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withTooltip={false} />;
}

// data.ts
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| barSize | number | - | Size of bars in px, <code>20</code> by default |
| data | Record<string, any>[] | required | Chart data |
| dataKey | string | required | Key from data object to use as data key |
| emptyBackgroundColor | string | - | Color of the empty background, by default depends on the color scheme |
| endAngle | number | - | Angle at which chart ends |
| legendProps | RechartsProps | - | Props passed down to recharts Legend component |
| radialBarChartProps | Omit<CategoricalChartProps & RefAttributes<{ readonly eventEmitterSymbol: Symbol; clipPathId: string; accessibilityManager: AccessibilityManager; ... 65 more ...; UNSAFE_componentWillUpdate?(nextProps: Readonly<...>, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts RadarChartChart component |
| radialBarProps | Omit<RadialBarProps, "ref"> | - | Props passed down to recharts RadialBar component |
| startAngle | number | - | Angle at which chart starts |
| tooltipProps | RechartsProps | - | Props passed down to <code>Tooltip</code> recharts component |
| withBackground | boolean | - | Determines whether empty bars area should be visible |
| withLabels | boolean | - | Determines whether labels should be displayed |
| withLegend | boolean | - | Determines whether the legend should be displayed |
| withTooltip | boolean | - | Determines whether the tooltip should be displayed when one of the bars is hovered |


#### Styles API

RadialBarChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**RadialBarChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-RadialBarChart-root | Root element |
| tooltip | .mantine-RadialBarChart-tooltip | Tooltip root element |
| legend | .mantine-RadialBarChart-legend | Legend root element |
| legendItem | .mantine-RadialBarChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-RadialBarChart-legendItemColor | Legend item color |
| legendItemName | .mantine-RadialBarChart-legendItemName | Legend item name |

**RadialBarChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-empty-background | Background color of the empty space in the chart |