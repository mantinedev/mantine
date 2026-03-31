# Sparkline
Package: @mantine/charts
Import: import { Sparkline } from '@mantine/charts';
Description: Simplified area chart to show trends

## Usage

`Sparkline` is a simplified version of [AreaChart](https://mantine.dev/llms/charts-area-chart.md). It can be used
to display a single series of data in a small space.

```tsx
import { Sparkline } from '@mantine/charts';


function Demo() {
  return (
    <Sparkline
      w={200}
      h={60}
      data={[10, 20, 40, 20, 40, 10, 50]}
       curveType="linear" color="blue" fillOpacity={0.6} withGradient={true} strokeWidth={2}
    />
  );
}
```


## Change area color depending on color scheme

You can use CSS variables in the `color` property. To define a CSS variable that
changes depending on the color scheme, use [light/dark mixins](https://mantine.dev/llms/styles-postcss-preset.md#dark-and-light-mixins)
or the [light-dark function](https://mantine.dev/llms/styles-postcss-preset.md#light-dark-function). Example
of an area that is dark orange in light mode and lime in dark mode:

```tsx
// Demo.module.css
.root {
  @mixin light {
    --chart-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --chart-color: var(--mantine-color-lime-4);
  }
}

// Demo.tsx
import { Sparkline } from '@mantine/charts';
import classes from './Demo.module.css';

function Demo() {
  return <Sparkline w={200} h={80} data={[10, 20, 40, 20, 40, 10, 50]} className={classes.root} />;
}
```


## Trend colors

Use the `trendColors` prop instead of `color` to change the chart color depending on the trend.
The prop accepts an object with `positive`, `negative`, and `neutral` properties:

* `positive` - color for positive trend (first value is less than the last value in the `data` array)
* `negative` - color for negative trend (first value is greater than the last value in the `data` array)
* `neutral` - color for neutral trend (first and last values are equal)

`neutral` is optional; if not provided, the color will be the same as `positive`.

```tsx
import { Sparkline } from '@mantine/charts';
import { Stack, Text } from '@mantine/core';

const positiveTrend = [10, 20, 40, 20, 40, 10, 50];
const negativeTrend = [50, 40, 20, 40, 20, 40, 10];
const neutralTrend = [10, 20, 40, 20, 40, 10, 50, 5, 10];

function Demo() {
  return (
    <Stack gap="sm">
      <Text>Positive trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={positiveTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Negative trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={negativeTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Neutral trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={neutralTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />
    </Stack>
  );
}
```



#### Props

**Sparkline props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| areaProps | Omit<Props<any, any>, "data" \| "ref" \| "dataKey"> | - | Props passed down to the underlying recharts `Area` component |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color |
| connectNulls | boolean | - | Determines whether null values should be connected with other values |
| curveType | AreaChartCurveType | - | Type of the curve |
| data | (number \| null)[] | required | Data used to render the chart |
| fillOpacity | number | - | Controls fill opacity of the area |
| strokeWidth | number | - | Area stroke width |
| trendColors | SparklineTrendColors | - | If set, `color` prop is ignored and chart color is determined by the difference between first and last value. |
| withGradient | boolean | - | Determines whether the chart fill should be a gradient |


#### Styles API

Sparkline component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Sparkline selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Sparkline-root | Root element |

**Sparkline CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-color | Controls stroke and fill color |
