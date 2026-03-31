# DonutChart
Package: @mantine/charts
Import: import { DonutChart } from '@mantine/charts';
Description: Donut chart component

## Usage

`DonutChart` is based on the [PieChart recharts component](https://recharts.org/en-US/api/PieChart):

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
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

Set the `withLabels` prop to display labels next to each segment:

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart withLabelsLine={true} labelsType="value" withLabels data={data} />;
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

Set the `size` prop to control the width and height of the chart. Note that if the `withLabels` prop is set,
the chart height is automatically increased by 80px to make room for labels. You can override
this behavior by setting the `h` [style prop](https://mantine.dev/llms/styles-style-props.md).

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart size={160} thickness={20} data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## Padding angle

Use the `paddingAngle` prop to control the space between segments:

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart paddingAngle={10} data={data} />;
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
import { DonutChart } from '@mantine/charts';

function Demo() {
  return (
    <DonutChart
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
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <DonutChart data={data} tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <DonutChart data={data} mx="auto" />
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
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} withTooltip={false} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## Chart label

To display a label in the center of the chart, use the `chartLabel` prop.
It accepts a string or a number:

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} chartLabel="Users by country" />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## Start and end angle

Use the `startAngle` and `endAngle` props to control the start and end angle of the chart.
For example, to display a half-circle chart, set `startAngle={180}` and `endAngle={0}`:

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} startAngle={180} endAngle={0} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


Note that even when the `startAngle` and `endAngle` props are set, the chart still takes
the same amount of space as if it were a full circle.

## Segments stroke

Use the `strokeWidth` prop to control the width of the stroke around each segment:

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart strokeWidth={1} data={data} />;
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
import { DonutChart } from '@mantine/charts';

function Demo() {
  return <DonutChart data={[]} strokeColor="red.5" />;
}
```

By default, the segments stroke color is the same as the background color of the body element
(`--mantine-color-body` CSS variable). If you want to change it depending on the color scheme,
define a CSS variable and pass it to the `strokeColor` prop:

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <DonutChart data={data} strokeColor="var(--card-bg)" />
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

**DonutChart props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| cellProps | ((series: DonutChartCell) => Partial<Omit<SVGProps<SVGElement>, "ref">>) \| Partial<Omit<SVGProps<SVGElement>, "ref">> | - | Props passed down to each segment of the chart |
| chartLabel | string \| number | - | Chart label, displayed in the center of the chart |
| children | React.ReactNode | - | Additional elements rendered inside `PieChart` component |
| data | DonutChartCell[] | required | Data used to render chart |
| endAngle | number | - | Controls angle at which charts ends. Set to `0` to render the chart as semicircle. |
| labelColor | MantineColor | - | Controls text color of all labels, by default depends on color scheme |
| labelsType | "value" \| "percent" | - | Type of labels to display, `'value'` by default |
| paddingAngle | number | - | Controls padding between segments |
| pieChartProps | (PolarChartProps<unknown> & { ref?: Ref<SVGSVGElement>; }) \| undefined | - | Props passed down to recharts `PieChart` component |
| pieProps | Partial<Omit<Props, "ref">> | - | Props passed down to recharts `Pie` component |
| size | number | - | Controls chart width and height, height is increased by 40 if `withLabels` prop is set. Cannot be less than `thickness`. |
| startAngle | number | - | Controls angle at which chart starts. Set to `180` to render the chart as semicircle. |
| strokeColor | MantineColor | - | Controls color of the segments stroke, by default depends on color scheme |
| strokeWidth | number | - | Controls width of segments stroke |
| thickness | number | - | Controls thickness of the chart segments |
| tooltipAnimationDuration | number | - | Tooltip animation duration in ms |
| tooltipDataSource | "all" \| "segment" | - | Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. |
| tooltipProps | RechartsProps | - | Props passed down to `Tooltip` recharts component |
| valueFormatter | (value: number) => string | - | A function to format values inside the tooltip |
| withLabels | boolean | - | Determines whether each segment should have associated label |
| withLabelsLine | boolean | - | Determines whether segments labels should have lines that connect the segment with the label |
| withTooltip | boolean | - | Determines whether the tooltip should be displayed when one of the section is hovered |


#### Styles API

DonutChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**DonutChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-DonutChart-root | Root element |
| label | .mantine-DonutChart-label | Chart label, controlled by `chartLabel` prop |
| tooltip | .mantine-DonutChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-DonutChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-DonutChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-DonutChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-DonutChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-DonutChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-DonutChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-DonutChart-tooltipLabel | Label of the tooltip |

**DonutChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-labels-color | Controls color of the chart labels |
| root | --chart-size | Controls size of the chart |
| root | --chart-stroke-color | Controls color of the chart stroke |
