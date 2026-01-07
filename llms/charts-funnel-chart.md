# FunnelChart
Package: @mantine/charts
Import: import { FunnelChart } from '@mantine/charts';
Description: Funnel chart component

## Usage

`FunnelChart` is based on [FunnelChart recharts component](https://recharts.org/en-US/api/FunnelChart):

#### Example: usage

```tsx
// Demo.tsx
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## Segments labels

Set `withLabels` prop to display labels next to each segment.
Use `labelPosition` prop to control the position of labels relative to the corresponding segment.

#### Example: withLabels

```tsx
// Demo.tsx
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart withLabels data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## Size and thickness

Set `size` prop to control width and height of the chart.
You can override this behavior by setting `h` [style prop](https://mantine.dev/styles/style-props).

#### Example: size

```tsx
// Demo.tsx
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## Segment color

You can reference colors from [theme](https://mantine.dev/theming/theme-object) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

#### Example: color

```tsx
import { FunnelChart } from '@mantine/charts';

function Demo() {
  return (
    <FunnelChart
      data={[
        { name: 'USA', value: 400, color: '' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
```


## Tooltip data source

By default, the tooltip displays data for all segments when hovered over any segment.
To display data only for the hovered segment, set `tooltipDataSource="segment"`:

#### Example: tooltipDataSource

```tsx
// Demo.tsx
import { Group, Text } from '@mantine/core';
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <FunnelChart data={data} tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <FunnelChart data={data} mx="auto" />
      </div>
    </Group>
  );
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## Without tooltip

To remove the tooltip, set `withTooltip={false}`:

#### Example: noTooltip

```tsx
// Demo.tsx
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} withTooltip={false} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## Segments stroke

Use `strokeWidth` prop to control the width of the stroke around each segment:

#### Example: strokeWidth

```tsx
// Demo.tsx
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


To change color of the stroke, use `strokeColor` prop. You can reference colors from [theme](https://mantine.dev/theming/theme-object) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

```tsx
import { FunnelChart } from '@mantine/charts';

function Demo() {
  return <FunnelChart data={[]} strokeColor="red.5" />;
}
```

By default, segments stroke color is the same as the background color of the body element
(`--mantine-color-body` CSS variable). If you want to change it depending on the color scheme,
define CSS variable and pass it to the `strokeColor` prop:

#### Example: strokeColor

```tsx
// Demo.tsx
import { FunnelChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <FunnelChart data={data} strokeColor="var(--card-bg)" />
    </div>
  );
}

// Demo.module.css
.root {
  --card-bg: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));

  background-color: var(--card-bg);
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-md);
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Additional elements rendered inside <code>FunnelChart</code> component |
| data | FunnelChartCell[] | required | Data used to render chart |
| funnelChartProps | Omit<CategoricalChartProps & RefAttributes<{ readonly eventEmitterSymbol: Symbol; clipPathId: string; accessibilityManager: AccessibilityManager; ... 65 more ...; UNSAFE_componentWillUpdate?(nextProps: Readonly<...>, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts <code>FunnelChart</code> component |
| funnelProps | Partial<Omit<FunnelProps, "ref">> | - | Props passed down to recharts <code>Pie</code> component |
| labelColor | MantineColor | - | Controls text color of all labels |
| labelsPosition | "left" | "right" | "inside" | - | Controls labels position relative to the segment |
| size | number | - | Controls chart width and height |
| strokeColor | MantineColor | - | Controls color of the segments stroke, by default depends on color scheme |
| strokeWidth | number | - | Controls width of segments stroke |
| tooltipAnimationDuration | number | - | Tooltip animation duration in ms |
| tooltipDataSource | "all" | "segment" | - | Determines which data is displayed in the tooltip. <code>'all'</code> – display all values, <code>'segment'</code> – display only hovered segment. |
| tooltipProps | RechartsProps | - | Props passed down to <code>Tooltip</code> recharts component |
| valueFormatter | (value: number) => string | - | A function to format values inside the tooltip and labels |
| withLabels | boolean | - | Determines whether each segment should have associated label |
| withTooltip | boolean | - | Determines whether the tooltip should be displayed when a section is hovered |


#### Styles API

FunnelChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**FunnelChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-FunnelChart-root | Root element |
| tooltip | .mantine-FunnelChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-FunnelChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-FunnelChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-FunnelChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-FunnelChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-FunnelChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-FunnelChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-FunnelChart-tooltipLabel | Label of the tooltip |

**FunnelChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-labels-color | Controls color of the chart labels |
| root | --chart-size | Controls size of the chart |
| root | --chart-stroke-color | Controls color of the chart stroke |