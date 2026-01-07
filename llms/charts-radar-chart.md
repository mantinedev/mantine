# RadarChart
Package: @mantine/charts
Import: import { RadarChart } from '@mantine/charts';
Description: Radar chart component

## Usage

`RadarChart` is based on recharts [RadarChart](https://recharts.org/en-US/api/RadarChart) component:

#### Example: usage

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      series={[{ name: 'sales', color: 'blue.4', opacity: 0.2 }]}
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    sales: 120,
  },
  {
    product: 'Oranges',
    sales: 98,
  },
  {
    product: 'Tomatoes',
    sales: 86,
  },
  {
    product: 'Grapes',
    sales: 99,
  },
  {
    product: 'Bananas',
    sales: 85,
  },
  {
    product: 'Lemons',
    sales: 65,
  },
];
```


## Multiple series

You can display multiple series on the same radar chart:

#### Example: multiple

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];
```


## Change color

You can reference colors from [theme](https://mantine.dev/theming/theme-object) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

#### Example: color

```tsx
// data.ts
export const data = [
  {
    product: 'Apples',
    sales: 120,
  },
  {
    product: 'Oranges',
    sales: 98,
  },
  {
    product: 'Tomatoes',
    sales: 86,
  },
  {
    product: 'Grapes',
    sales: 99,
  },
  {
    product: 'Bananas',
    sales: 85,
  },
  {
    product: 'Lemons',
    sales: 65,
  },
];
```


## Hide/show chart parts

#### Example: parts

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
      
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];
```


## With tooltip and dots

#### Example: tooltip

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withTooltip
      withDots
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
      
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];
```


## Recharts props

To pass props down to the underlying recharts components, use the following props:

* `radarChartProps` passed props to [RadarChart](https://recharts.org/en-US/api/RadarChart) component
* `polarGridProps` passed props to [PolarGrid](https://recharts.org/en-US/api/PolarGrid) component
* `polarAngleAxisProps` passed props to [PolarAngleAxis](https://recharts.org/en-US/api/PolarAngleAxis) component
* `polarRadiusAxisProps` passed props to [PolarRadiusAxis](https://recharts.org/en-US/api/PolarRadiusAxis) component

Example of passing props down to [PolarRadiusAxis](https://recharts.org/en-US/api/PolarRadiusAxis) component:

#### Example: rechartsProps

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      polarRadiusAxisProps={{ angle: 30, tickFormatter: (value) => `${value}## Usage

`RadarChart` is based on recharts [RadarChart](https://recharts.org/en-US/api/RadarChart) component:

#### Example: usage

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      series={[{ name: 'sales', color: 'blue.4', opacity: 0.2 }]}
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    sales: 120,
  },
  {
    product: 'Oranges',
    sales: 98,
  },
  {
    product: 'Tomatoes',
    sales: 86,
  },
  {
    product: 'Grapes',
    sales: 99,
  },
  {
    product: 'Bananas',
    sales: 85,
  },
  {
    product: 'Lemons',
    sales: 65,
  },
];
```


## Multiple series

You can display multiple series on the same radar chart:

#### Example: multiple

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];
```


## Change color

You can reference colors from [theme](https://mantine.dev/theming/theme-object) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

#### Example: color

```tsx
// data.ts
export const data = [
  {
    product: 'Apples',
    sales: 120,
  },
  {
    product: 'Oranges',
    sales: 98,
  },
  {
    product: 'Tomatoes',
    sales: 86,
  },
  {
    product: 'Grapes',
    sales: 99,
  },
  {
    product: 'Bananas',
    sales: 85,
  },
  {
    product: 'Lemons',
    sales: 65,
  },
];
```


## Hide/show chart parts

#### Example: parts

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
      
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];
```


## With tooltip and dots

#### Example: tooltip

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withTooltip
      withDots
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
      
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];
```


## Recharts props

To pass props down to the underlying recharts components, use the following props:

* `radarChartProps` passed props to [RadarChart](https://recharts.org/en-US/api/RadarChart) component
* `polarGridProps` passed props to [PolarGrid](https://recharts.org/en-US/api/PolarGrid) component
* `polarAngleAxisProps` passed props to [PolarAngleAxis](https://recharts.org/en-US/api/PolarAngleAxis) component
* `polarRadiusAxisProps` passed props to [PolarRadiusAxis](https://recharts.org/en-US/api/PolarRadiusAxis) component

Example of passing props down to [PolarRadiusAxis](https://recharts.org/en-US/api/PolarRadiusAxis) component:

 }}
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];
```


## Legend

Set `withLegend` prop to display the legend:

#### Example: legend

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      withLegend
      series={[
        { name: 'Sales January', color: 'blue.6', opacity: 0.2 },
        { name: 'Sales February', color: 'orange.6', opacity: 0.2 },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activeDotProps | MantineChartDotProps | - | Props passed down to all active dots. Ignored if <code>withDots={false}</code> is set. |
| children | React.ReactNode | - | Additional components that are rendered inside recharts <code>RadarChart</code> component |
| data | Record<string, any>[] | required | Data used in the chart |
| dataKey | string | required | Key of the <code>data</code> object for axis values |
| dotProps | MantineChartDotProps | - | Props passed down to all dots. Ignored if <code>withDots={false}</code> is set. |
| gridColor | MantineColor | - | Controls color of the grid lines. By default, color depends on the color scheme. |
| legendProps | RechartsProps | - | Props passed down to recharts Legend component |
| polarAngleAxisProps | RechartsProps | - | Props passed down to recharts PolarAngleAxis component |
| polarGridProps | RechartsProps | - | Props passed down to recharts PolarGrid component |
| polarRadiusAxisProps | RechartsProps | - | Props passed down to recharts PolarRadiusAxis component |
| radarChartProps | Omit<CategoricalChartProps & RefAttributes<{ readonly eventEmitterSymbol: Symbol; clipPathId: string; accessibilityManager: AccessibilityManager; ... 65 more ...; UNSAFE_componentWillUpdate?(nextProps: Readonly<...>, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts RadarChart component |
| radarProps | ((series: RadarChartSeries) => Partial<Omit<Props, "ref">>) | Partial<Omit<Props, "ref">> | - | Props passed down to recharts Radar component |
| series | RadarChartSeries[] | required | Determines which data should be consumed from the <code>data</code> array. |
| textColor | MantineColor | - | Controls color of all text elements. By default, color depends on the color scheme. |
| tooltipAnimationDuration | number | - | Tooltip position animation duration in ms |
| tooltipProps | RechartsProps | - | Props passed down to recharts Tooltip component |
| withDots | boolean | - | Determines whether dots should be displayed |
| withLegend | boolean | - | Determines whether the legend should be displayed |
| withPolarAngleAxis | boolean | - | Determines whether PolarAngleAxis component should be displayed |
| withPolarGrid | boolean | - | Determines whether PolarGrid component should be displayed |
| withPolarRadiusAxis | boolean | - | Determines whether PolarRadiusAxisProps component should be displayed |
| withTooltip | boolean | - | Determines whether Tooltip component should be displayed |


#### Styles API

RadarChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**RadarChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-RadarChart-root | Root element |
| container | .mantine-RadarChart-container | Recharts ResponsiveContainer component |
| tooltip | .mantine-RadarChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-RadarChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-RadarChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-RadarChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-RadarChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-RadarChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-RadarChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-RadarChart-tooltipLabel | Label of the tooltip |
| legend | .mantine-RadarChart-legend | Legend root element |
| legendItem | .mantine-RadarChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-RadarChart-legendItemColor | Legend item color |
| legendItemName | .mantine-RadarChart-legendItemName | Legend item name |

**RadarChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-grid-color | Controls color of the chart grid |
| root | --chart-text-color | Controls color of all text elements in the chart |