# BarsList
Package: @mantine/charts
Import: import { BarsList } from '@mantine/charts';
Description: Display a list of bars with names and values

## Usage

`BarsList` component displays a list of bars with names and values.
The only required prop is `data` – an array of objects with `name` and `value` properties.

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <BarsList data={data} />;
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Data format

`BarsList` expects data in the following format:

```tsx
export const data = [
  { name: 'React', value: 950000 },
  { name: 'Vue', value: 320000 },
  { name: 'Angular', value: 580000 },
  { name: 'Svelte', value: 145000 },
];
```

## Value formatter

Use `valueFormatter` prop to format the value displayed next to the bar.
The function receives the numeric value and must return a string.

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <BarsList data={data} valueFormatter={(value) => value.toLocaleString('en-US')} />;
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Labels

Use `barsLabel` and `valueLabel` props to display column headers above the bars and values:

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Bar gap

Control the spacing between bars with the `barGap` prop:

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barGap="xl"
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Minimum bar size

Set the minimum bar width with the `minBarSize` prop:

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      minBarSize={200}
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Bar height

Control the height of bars with the `barHeight` prop:

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barHeight={48}
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Bar color

Use `barColor` and `barTextColor` props to set the default background and text colors for all bars:

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barColor="teal.6"
      barTextColor="white"
      valueFormatter={(value) => value.toLocaleString('en-barsUS')}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Auto contrast

Set `autoContrast` prop to automatically adjust text color based on background color:

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      variant="filled"
      autoContrast
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Custom colors

Each bar can have its own color by setting the `color` property in the data:

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      variant="filled"
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Get bar props

Use `getBarProps` to pass additional props to each bar element.
For example, it can be used to add custom styling or event handlers:

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      valueFormatter={(value) => value.toLocaleString('en-US')}
      barTextColor="white"
      getBarProps={(barData) => ({
        style: {
          backgroundColor: barData.value > 500000 ? '#10a37f' : undefined,
          fontWeight: barData.value > 500000 ? 700 : undefined,
        },
      })}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Custom bar rendering

Use `renderBar` to completely customize how each bar is rendered:

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { Tooltip } from '@mantine/core';
import { data } from './data';

function Demo() {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      renderBar={(barData, defaultBar) => {
        const percentage = ((barData.value / maxValue) * 100).toFixed(1);

        return (
          <Tooltip
            label={`${barData.name}: ${percentage}% of total traffic`}
            position="top"
            withArrow
          >
            {defaultBar}
          </Tooltip>
        );
      }}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```



#### Props

**BarsList props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color |
| barColor | MantineColor | - | Default bar background color, used when item does not have color specified |
| barGap | MantineSpacing | - | Controls gap between bars |
| barHeight | string \| number | - | Bar height |
| barTextColor | MantineColor | - | Bar text color, overrides autoContrast |
| barsLabel | string | - | Label displayed above the bars column |
| data | BarsListBarData[] | required | Data for bars |
| getBarProps | (data: BarsListBarData) => DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> | - | Function to pass props down to the bar depending on the bar data payload |
| minBarSize | string \| number | - | Minimum bar width |
| renderBar | (data: BarsListBarData, defaultBar: ReactNode) => ReactNode | - | Function to completely customize bar rendering |
| valueFormatter | (value: number) => string | - | Function to format value display |
| valueLabel | string | - | Label displayed above the values column |


#### Styles API

BarsList component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**BarsList selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-BarsList-root | Root element |
| labelsRow | .mantine-BarsList-labelsRow | Container for labels row |
| bar | .mantine-BarsList-bar | Bar container element |
| barLabel | .mantine-BarsList-barLabel | Bar label element with name inside |
| barValue | .mantine-BarsList-barValue | Bar value element |

**BarsList CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --bars-list-gap | Controls gap between bars |
| root | --bars-list-min-bar-size | Controls minimum bar width |
| root | --bars-list-bar-height | Controls bar height |
