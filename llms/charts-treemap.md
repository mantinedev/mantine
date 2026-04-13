# Treemap
Package: @mantine/charts
Import: import { Treemap } from '@mantine/charts';
Description: Treemap chart component

## Usage

`Treemap` is based on the [Treemap recharts component](https://recharts.org/en-US/api/Treemap).
It displays hierarchical data as a set of nested rectangles:

```tsx
// Demo.tsx
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.8' },
  { name: 'India', value: 300, color: 'red.8' },
  { name: 'Japan', value: 100, color: 'teal.8' },
  { name: 'Other', value: 200, color: 'gray.8' },
];
```


## Nested data

`Treemap` supports nested data – each data item can have a `children` array.
The `color` property on a parent node is used for all its children:

```tsx
// Demo.tsx
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} />;
}

// data.ts
export const data = [
  {
    name: 'Frontend',
    color: 'blue.8',
    children: [
      { name: 'React', value: 400 },
      { name: 'Vue', value: 200 },
      { name: 'Angular', value: 150 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.8',
    children: [
      { name: 'Node', value: 300 },
      { name: 'Python', value: 250 },
      { name: 'Go', value: 100 },
    ],
  },
  {
    name: 'Mobile',
    color: 'red.8',
    children: [
      { name: 'React Native', value: 200 },
      { name: 'Flutter', value: 180 },
    ],
  },
];
```


## Node color

You can reference colors from [theme](https://mantine.dev/llms/theming-theme-object.md) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

```tsx
// Demo.tsx
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.8' },
  { name: 'India', value: 300, color: 'red.8' },
  { name: 'Japan', value: 100, color: 'teal.8' },
  { name: 'Other', value: 200, color: 'gray.8' },
];
```


## autoContrast

`Treemap` supports `autoContrast` prop that automatically adjusts text color
based on the background color of each node to ensure readable labels:

```tsx
import { Treemap } from '@mantine/charts';

const data = [
  { name: 'USA', value: 400, color: 'indigo.0' },
  { name: 'India', value: 300, color: 'yellow.1' },
  { name: 'Japan', value: 100, color: 'teal.1' },
  { name: 'Other', value: 200, color: 'gray.2' },
];

function Demo() {
  return <Treemap data={data} autoContrast />;
}
```


## Node stroke

Use the `strokeWidth` prop to control the width of the stroke around each node.
To change the color of the stroke, use the `strokeColor` prop:

```tsx
// Demo.tsx
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} strokeColor="gray.3" strokeWidth={2} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.8' },
  { name: 'India', value: 300, color: 'red.8' },
  { name: 'Japan', value: 100, color: 'teal.8' },
  { name: 'Other', value: 200, color: 'gray.8' },
];
```


## Disable tooltip

To disable the tooltip, set `withTooltip={false}`:

```tsx
// Demo.tsx
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} withTooltip={false} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.8' },
  { name: 'India', value: 300, color: 'red.8' },
  { name: 'Japan', value: 100, color: 'teal.8' },
  { name: 'Other', value: 200, color: 'gray.8' },
];
```



#### Props

**Treemap props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| aspectRatio | number | - | The treemap will try to keep every single rectangle's aspect ratio near the aspectRatio given |
| autoContrast | boolean | - | Determines whether text color should be adjusted based on background color to improve contrast |
| children | React.ReactNode | - | Additional elements rendered inside `Treemap` component |
| data | TreemapData[] | required | Data used to render chart |
| dataKey | string | - | Key in data object for the value |
| height | number | - | Controls chart height |
| strokeColor | MantineColor | - | Controls color of the node stroke, by default depends on color scheme |
| strokeWidth | number | - | Controls width of node stroke |
| textColor | MantineColor | - | Controls text color of labels |
| tooltipAnimationDuration | number | - | Tooltip animation duration in ms |
| tooltipProps | RechartsProps | - | Props passed down to `Tooltip` recharts component |
| treemapProps | Partial<Omit<Props<TreemapDataType, any>, "data" \| "ref" \| "dataKey">> | - | Props passed down to recharts `Treemap` component |
| valueFormatter | (value: number) => string | - | A function to format values inside the tooltip |
| withTooltip | boolean | - | Determines whether the tooltip should be displayed when a node is hovered |