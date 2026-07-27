# SunburstChart
Package: @mantine/charts
Import: import { SunburstChart } from '@mantine/charts';
Description: Sunburst chart component for hierarchical data

## Usage

`SunburstChart` is based on the [SunburstChart recharts component](https://recharts.org/en-US/api/SunburstChart).
It displays hierarchical data as concentric rings, similar to a treemap plotted in polar coordinates:

```tsx
// Demo.tsx
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} />;
}

// data.ts
export const data = [
  { name: 'Analytics', value: 100, color: 'pink.6' },
  {
    name: 'DevOps',
    color: 'grape.6',
    children: [
      { name: 'Docker', value: 80 },
      { name: 'Kubernetes', value: 50 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 150 },
      {
        name: 'Python',
        children: [
          { name: 'Django', value: 110 },
          { name: 'FastAPI', value: 60 },
        ],
      },
      { name: 'Go', value: 50 },
    ],
  },
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      {
        name: 'React',
        children: [
          {
            name: 'Frameworks',
            children: [
              { name: 'Next.js', value: 150 },
              { name: 'Remix', value: 40 },
            ],
          },
          { name: 'CRA', value: 20 },
        ],
      },
      { name: 'Vue', value: 90 },
      { name: 'Svelte', value: 30 },
    ],
  },
];
```


## Data format

`SunburstChart` expects an array of objects. Each object must have a `name` and `color` property.
Leaf nodes must have a `value` property. Parent nodes can have a `children` array:

```tsx
export const data = [
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      { name: 'React', value: 400 },
      { name: 'Vue', value: 200 },
      { name: 'Angular', value: 150 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 300 },
      { name: 'Python', value: 250 },
    ],
  },
];
```

## Node color

You can reference colors from [theme](https://mantine.dev/llms/theming-theme-object.md) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted. Children inherit the color of their parent node.

```tsx
import { SunburstChart } from '@mantine/charts';

const data = [
  { name: 'Sales', value: 500, color: 'violet.6' },
  { name: 'Marketing', value: 300, color: 'grape.6' },
  { name: 'Engineering', value: 400, color: 'pink.6' },
  { name: 'Support', value: 200, color: 'red.6' },
];

function Demo() {
  return <SunburstChart data={data} />;
}
```


## Stroke color

Use `strokeColor` to change the color of the stroke around each sector:

```tsx
// Demo.tsx
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} strokeColor="gray.3" />;
}

// data.ts
export const data = [
  { name: 'Analytics', value: 100, color: 'pink.6' },
  {
    name: 'DevOps',
    color: 'grape.6',
    children: [
      { name: 'Docker', value: 80 },
      { name: 'Kubernetes', value: 50 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 150 },
      {
        name: 'Python',
        children: [
          { name: 'Django', value: 110 },
          { name: 'FastAPI', value: 60 },
        ],
      },
      { name: 'Go', value: 50 },
    ],
  },
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      {
        name: 'React',
        children: [
          {
            name: 'Frameworks',
            children: [
              { name: 'Next.js', value: 150 },
              { name: 'Remix', value: 40 },
            ],
          },
          { name: 'CRA', value: 20 },
        ],
      },
      { name: 'Vue', value: 90 },
      { name: 'Svelte', value: 30 },
    ],
  },
];
```


## Chart size

Use `size` prop to control the width and height of the chart:

```tsx
// Demo.tsx
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} size={400} />;
}

// data.ts
export const data = [
  { name: 'Analytics', value: 100, color: 'pink.6' },
  {
    name: 'DevOps',
    color: 'grape.6',
    children: [
      { name: 'Docker', value: 80 },
      { name: 'Kubernetes', value: 50 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 150 },
      {
        name: 'Python',
        children: [
          { name: 'Django', value: 110 },
          { name: 'FastAPI', value: 60 },
        ],
      },
      { name: 'Go', value: 50 },
    ],
  },
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      {
        name: 'React',
        children: [
          {
            name: 'Frameworks',
            children: [
              { name: 'Next.js', value: 150 },
              { name: 'Remix', value: 40 },
            ],
          },
          { name: 'CRA', value: 20 },
        ],
      },
      { name: 'Vue', value: 90 },
      { name: 'Svelte', value: 30 },
    ],
  },
];
```


## Gap

Use `gap` prop to control the spacing between sectors and rings:

```tsx
// Demo.tsx
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data}  gap={1} />;
}

// data.ts
export const data = [
  { name: 'Analytics', value: 100, color: 'pink.6' },
  {
    name: 'DevOps',
    color: 'grape.6',
    children: [
      { name: 'Docker', value: 80 },
      { name: 'Kubernetes', value: 50 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 150 },
      {
        name: 'Python',
        children: [
          { name: 'Django', value: 110 },
          { name: 'FastAPI', value: 60 },
        ],
      },
      { name: 'Go', value: 50 },
    ],
  },
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      {
        name: 'React',
        children: [
          {
            name: 'Frameworks',
            children: [
              { name: 'Next.js', value: 150 },
              { name: 'Remix', value: 40 },
            ],
          },
          { name: 'CRA', value: 20 },
        ],
      },
      { name: 'Vue', value: 90 },
      { name: 'Svelte', value: 30 },
    ],
  },
];
```


## Labels

Set `withLabels` to display value labels inside each sector. It is recommended
to increase `size` to give labels enough space:

```tsx
// Demo.tsx
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} withLabels size={400} />;
}

// data.ts
export const data = [
  { name: 'Analytics', value: 100, color: 'pink.6' },
  {
    name: 'DevOps',
    color: 'grape.6',
    children: [
      { name: 'Docker', value: 80 },
      { name: 'Kubernetes', value: 50 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 150 },
      {
        name: 'Python',
        children: [
          { name: 'Django', value: 110 },
          { name: 'FastAPI', value: 60 },
        ],
      },
      { name: 'Go', value: 50 },
    ],
  },
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      {
        name: 'React',
        children: [
          {
            name: 'Frameworks',
            children: [
              { name: 'Next.js', value: 150 },
              { name: 'Remix', value: 40 },
            ],
          },
          { name: 'CRA', value: 20 },
        ],
      },
      { name: 'Vue', value: 90 },
      { name: 'Svelte', value: 30 },
    ],
  },
];
```


## Disable tooltip

To disable the tooltip, set `withTooltip={false}`:

```tsx
// Demo.tsx
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} withTooltip={false} />;
}

// data.ts
export const data = [
  { name: 'Analytics', value: 100, color: 'pink.6' },
  {
    name: 'DevOps',
    color: 'grape.6',
    children: [
      { name: 'Docker', value: 80 },
      { name: 'Kubernetes', value: 50 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 150 },
      {
        name: 'Python',
        children: [
          { name: 'Django', value: 110 },
          { name: 'FastAPI', value: 60 },
        ],
      },
      { name: 'Go', value: 50 },
    ],
  },
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      {
        name: 'React',
        children: [
          {
            name: 'Frameworks',
            children: [
              { name: 'Next.js', value: 150 },
              { name: 'Remix', value: 40 },
            ],
          },
          { name: 'CRA', value: 20 },
        ],
      },
      { name: 'Vue', value: 90 },
      { name: 'Svelte', value: 30 },
    ],
  },
];
```



#### Props

**SunburstChart props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Additional elements rendered inside `SunburstChart` component |
| data | SunburstChartData[] | required | Data used to render chart |
| dataKey | string | - | Key in data object for the value |
| endAngle | number | - | Angle in degrees at which the chart should end |
| gap | number | - | Gap between sectors and rings in px |
| innerRadius | number | - | Controls the radius of the inner circle at the center of the chart |
| size | number | - | Controls chart width and height |
| startAngle | number | - | Angle in degrees from which the chart should start |
| strokeColor | MantineColor | - | Controls color of the sectors stroke, by default depends on color scheme |
| sunburstChartProps | Partial<Omit<SunburstChartProps, "data" \| "ref" \| "dataKey">> | - | Props passed down to recharts `SunburstChart` component |
| tooltipAnimationDuration | number | - | Tooltip animation duration in ms |
| tooltipProps | RechartsProps | - | Props passed down to `Tooltip` recharts component |
| valueFormatter | (value: number) => string | - | A function to format values inside the tooltip and labels |
| withLabels | boolean | - | Determines whether value labels are displayed inside each sector |
| withTooltip | boolean | - | Determines whether the tooltip should be displayed when a node is hovered |