# FunnelChart
Package: @mantine/charts
Import: import { FunnelChart } from '@mantine/charts';
Description: Funnel chart component

## Usage

`FunnelChart` is based on the [FunnelChart recharts component](https://recharts.org/en-US/api/FunnelChart):

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

Set the `withLabels` prop to display labels next to each segment.
Use the `labelPosition` prop to control the position of labels relative to the corresponding segment.

```tsx
// Demo.tsx
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart labelsPosition="right" withLabels data={data} />;
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

Set the `size` prop to control the width and height of the chart.
You can override this behavior by setting the `h` [style prop](https://mantine.dev/llms/styles-style-props.md).

```tsx
// Demo.tsx
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart size={160} data={data} />;
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

You can reference colors from [theme](https://mantine.dev/llms/theming-theme-object.md) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

```tsx
import { FunnelChart } from '@mantine/charts';

function Demo() {
  return (
    <FunnelChart
      data={[
        { name: 'USA', value: 400, color: 'blue' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
```


## Tooltip data source

By default, the tooltip displays data for all segments when hovered over any segment.
To display data only for the hovered segment, set `tooltipDataSource="segment"`:

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

Use the `strokeWidth` prop to control the width of the stroke around each segment:

```tsx
// Demo.tsx
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart strokeWidth={1} data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


To change the color of the stroke, use the `strokeColor` prop. You can reference colors from the [theme](https://mantine.dev/llms/theming-theme-object.md) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

```tsx
import { FunnelChart } from '@mantine/charts';

function Demo() {
  return <FunnelChart data={[]} strokeColor="red.5" />;
}
```

By default, the segments stroke color is the same as the background color of the body element
(`--mantine-color-body` CSS variable). If you want to change it depending on the color scheme,
define a CSS variable and pass it to the `strokeColor` prop:

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

**FunnelChart props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Additional elements rendered inside `FunnelChart` component |
| data | FunnelChartCell[] | required | Data used to render chart |
| funnelChartProps | (CartesianChartProps<unknown> & { ref?: Ref<SVGSVGElement>; }) \| undefined | - | Props passed down to recharts `FunnelChart` component |
| funnelProps | Partial<Omit<Props, "ref">> | - | Props passed down to recharts `Pie` component |
| labelColor | MantineColor | - | Controls text color of all labels |
| labelsPosition | "left" \| "right" \| "inside" | - | Controls labels position relative to the segment |
| size | number | - | Controls chart width and height |
| strokeColor | MantineColor | - | Controls color of the segments stroke, by default depends on color scheme |
| strokeWidth | number | - | Controls width of segments stroke |
| tooltipAnimationDuration | number | - | Tooltip animation duration in ms |
| tooltipDataSource | "all" \| "segment" | - | Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. |
| tooltipProps | RechartsProps | - | Props passed down to `Tooltip` recharts component |
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
